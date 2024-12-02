import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

// Dexie Imports
import { db, ListingImage } from "../model/db";
import { useLiveQuery } from "dexie-react-hooks";

// Jotai Import
import { useAtom, useSetAtom } from "jotai";
import { RESET } from "jotai/utils";
import { stepAtom, storeAtom } from "@/components/add-listing/add-car/context";

// Components Import
import UploadedPhotoPreview from "@/components/add-listing/common/uploaded-photo-preview";
import CreateListingFooter from "@/components/footer/create-listing-footer";
import Text from "@/components/ui/typography/text";
import Upload from "@/components/ui/upload";
import { toast } from "sonner";

// Redux Imports
import {
    useCreateCarListingMutation,
    useUploadCarMediaMutation,
} from "@/redux/api/add-listing/car-api";
import { useDispatch } from "react-redux";

// Utils Imports
import { checkStorageAvailability } from "@/utils/check-storage-availability";
import { responseToast } from "@/utils/response-toast";

// Config Imports
import { Routes } from "@/config/routes";

// Constant Imports
import { UPLOAD_IMAGE_CONSTANTS } from "@/constants";

// Constants
const MAX_TOTAL_IMAGES = UPLOAD_IMAGE_CONSTANTS.MAX_TOTAL_IMAGES;
const MAX_IMAGE_SIZE_MB = UPLOAD_IMAGE_CONSTANTS.MAX_IMAGE_SIZE_MB;
const REQUIRED_STORAGE_MB = UPLOAD_IMAGE_CONSTANTS.REQUIRED_STORAGE_MB;

// Upload Props
const uploadProps = {
    maxSize: MAX_IMAGE_SIZE_MB * (1024 * 1024),
};
export default function AddListingPhotos() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const setStep = useSetAtom(stepAtom);
    const [store, setStore] = useAtom(storeAtom);

    const [imageError, setImageError] = useState({
        error: false,
        type: "",
        message: "",
    });

    const listingImages = useLiveQuery(() => db.listingImages.toArray(), []);

    const [newImgArr, setNewImgArr] = useState<ListingImage[]>([]);

    // API Calls
    const [createCarListing, { isLoading: isCreatingCarListing }] =
        useCreateCarListingMutation();
    const [uploadCarMedia] = useUploadCarMediaMutation();

    useEffect(() => {
        if (listingImages) {
            setNewImgArr(listingImages);
        }
    }, [listingImages]);

    const handleDropAccepted = async (acceptedFiles: File[]) => {
        if (!(await checkStorageAvailability())) {
            setImageError({
                error: true,
                type: "storage",
                message: `You need at least ${REQUIRED_STORAGE_MB} MB of free space to upload images.`,
            });
            return;
        }

        const newImages = await Promise.all(
            acceptedFiles.map(async (file) => {
                const blob = new Blob([await file.arrayBuffer()], {
                    type: file.type,
                });

                return { name: file.name, blob };
            })
        );

        if (newImages.length + newImgArr.length > MAX_TOTAL_IMAGES) {
            setImageError({
                error: true,
                type: "max-image",
                message: `You can only upload ${MAX_TOTAL_IMAGES} photos`,
            });

            return;
        }

        try {
            await db.listingImages.bulkAdd(newImages);
        } catch (error) {
            console.error("Error adding images to IndexedDB:", error);
            setImageError({
                error: true,
                type: "db-error",
                message: "Failed to add images to the database.",
            });
            return;
        }

        setImageError({ error: false, type: "", message: "" });
    };

    const handleDeleteImage = useCallback(async (id: string) => {
        try {
            await db.listingImages.delete(id);
        } catch (error) {
            console.error("Error deleting image from IndexedDB:", error);
            setImageError({
                error: true,
                type: "db-error",
                message: "Failed to delete image from the database.",
            });
        }
    }, []);

    const handleNext = async () => {
        if (newImgArr.length === 0) {
            setImageError({
                error: true,
                type: "no-image",
                message: "Please upload at least 1 photo",
            });
        } else {
            const newObj = {
                ...store,
                carLocation: {
                    ...store.carLocation,
                    latitude: store.carLocation.latitude.toString(),
                    longitude: store.carLocation.longitude.toString(),
                },
                carDetails: {
                    ...store.carDetails,
                    carPower: {
                        ...store.carDetails.carPower,
                        power: store.carDetails.carPower.power.toString(),
                    },
                    mileage: {
                        ...store.carDetails.mileage,
                        mileage: store.carDetails.mileage.mileage.toString(),
                    },
                },
            };

            const mediaFormData = new FormData();

            try {
                const response = await createCarListing(newObj);

                if (response.error) {
                    responseToast(response, null, null, dispatch);
                    return;
                }

                setStep(7);

                mediaFormData.append("carId", response.data.data.id);
                newImgArr.forEach((image) => {
                    const file = new File([image.blob], image.name, {
                        type: image.blob.type,
                    });

                    mediaFormData.append("files", file);
                });

                uploadCarMedia(mediaFormData).then((response) => {
                    if (response.error) {
                        responseToast(
                            response,
                            navigate,
                            Routes.private.addListing.car,
                            dispatch
                        );

                        setTimeout(() => {
                            window.location.reload();
                        }, 2000);

                        return;
                    }

                    setStore(RESET);

                    db.listingImages.clear();
                });
            } catch (error) {
                toast.error("Failed to create listing");
                console.error("Error creating listing:", error);
            }
        }
    };

    return (
        <div className="w-full max-w-[548px] xl:max-w-[648px]">
            <form noValidate onSubmit={(e) => e.preventDefault()}>
                <Upload
                    accept="img"
                    label="Add some photos relevant to your listing"
                    onDropAccepted={handleDropAccepted}
                    labelClassName="md:!text-2xl md:leading-7 mb-5 md:mb-6"
                    iconClassName="w-12 h-16 md:w-20 md:h-20 !text-gray-dark"
                    className={clsx(
                        "h-[262px] pb-9 pt-12 xl:h-[500px] xl:pb-14 xl:pt-32",
                        imageError.error && imageError.type === "no-image"
                            ? "border border-red"
                            : ""
                    )}
                    text={
                        <div className="flex h-full flex-col justify-between text-center">
                            <div>
                                <Text
                                    tag="h3"
                                    className="text-lg font-normal leading-6 text-gray-dark"
                                >
                                    Drag your photos here
                                </Text>
                                <Text
                                    className={clsx(
                                        "mt-3 text-gray",
                                        imageError.error ? "text-red" : ""
                                    )}
                                >
                                    {imageError.error
                                        ? imageError.message
                                        : "Choose at least 1 photos"}
                                </Text>
                            </div>
                            <Text className="text-gray underline">
                                Upload from your device
                            </Text>
                        </div>
                    }
                    {...uploadProps}
                >
                    {() => (
                        <div className="mt-3 grid grid-cols-2 gap-2 lg:gap-3">
                            {newImgArr.map((image) => (
                                <UploadedPhotoPreview
                                    key={image.id}
                                    image={URL.createObjectURL(image.blob)}
                                    onDelete={() => handleDeleteImage(image.id)}
                                />
                            ))}
                        </div>
                    )}
                </Upload>

                <CreateListingFooter
                    onBack={() => setStep(5)}
                    onNext={handleNext}
                    disabled={isCreatingCarListing}
                />
            </form>
        </div>
    );
}
