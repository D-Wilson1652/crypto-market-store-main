import { useAtom, useSetAtom } from "jotai";
import { stepAtom, storeAtom } from "@/components/add-listing/add-car/context";

// Zod Import
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// Components Import
import CreateListingFooter from "@/components/footer/create-listing-footer";
import Input from "@/components/ui/form-fields/input";
import Text from "@/components/ui/typography/text";

const FormDataSchema = z.object({
    carLocation: z.object({
        address: z
            .string()
            .min(1, "Address is required!")
            .max(255, "Address is too long"),
        country: z
            .string()
            .min(1, "Country is required!")
            .max(255, "Country is too long"),
        state: z
            .string()
            .min(1, "State is required!")
            .max(255, "State is too long"),
        city: z
            .string()
            .min(1, "City is required!")
            .max(255, "City is too long"),
        zipCode: z
            .string()
            .min(1, "Zip code is required!")
            .max(20, "Zip code is too long"),
        latitude: z
            .number({
                required_error: "Latitude is required!",
                invalid_type_error: "Latitude is required!",
            })
            .refine((val) => val >= -90 && val <= 90, {
                message: "Latitude must be between -90 and 90",
            }),
        longitude: z
            .number({
                required_error: "Longitude is required!",
                invalid_type_error: "Longitude is required!",
            })
            .refine((val) => val >= -180 && val <= 180, {
                message: "Longitude must be between -180 and 180",
            }),
    }),
});

type FormDataType = z.infer<typeof FormDataSchema>;

export default function AddLocation() {
    const setStep = useSetAtom(stepAtom);
    const [store, setStore] = useAtom(storeAtom);

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<FormDataType>({
        defaultValues: {
            carLocation: {
                country: store.carLocation.country,
                state: store.carLocation.state,
                city: store.carLocation.city,
                address: store.carLocation.address,
                zipCode: store.carLocation.zipCode,
                latitude:
                    store.carLocation.latitude === 0
                        ? undefined
                        : store.carLocation.latitude,
                longitude:
                    store.carLocation.longitude === 0
                        ? undefined
                        : store.carLocation.longitude,
            },
        },
        resolver: zodResolver(FormDataSchema),
    });

    function handleFormData(data: FormDataType) {
        // Extracting data from the form
        const { carLocation } = data;

        setStore({
            ...store,
            carLocation,
        });
        console.log(data);
        setStep(4);
    }

    return (
        <div className="w-full md:w-[648px] xl:w-[748px] 2xl:w-[848px]">
            <Text
                tag="h3"
                className="mb-4 border-b border-b-gray-lighter pb-4 text-xl lg:mb-6"
            >
                Personal Information
            </Text>

            <form
                noValidate
                onSubmit={handleSubmit((data) => handleFormData(data))}
                className="grid grid-cols-1 gap-8 xl:gap-12"
            >
                <div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="grid grid-cols-1 gap-x-3 gap-y-4 md:grid-cols-2">
                            <Input
                                type="text"
                                label="Country"
                                placeholder="Country"
                                labelClassName="!font-semibold lg:text-base"
                                {...register("carLocation.country")}
                                error={errors.carLocation?.country?.message}
                            />
                            <Input
                                type="text"
                                label="City"
                                placeholder="City"
                                labelClassName="!font-semibold lg:text-base"
                                {...register("carLocation.city")}
                                error={errors.carLocation?.city?.message}
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-x-3 gap-y-4 md:grid-cols-2">
                            <Input
                                type="text"
                                label="State"
                                placeholder="State"
                                labelClassName="!font-semibold lg:text-base"
                                {...register("carLocation.state")}
                                error={errors.carLocation?.state?.message}
                            />
                            <Input
                                type="text"
                                label="Postal Code"
                                placeholder="Postal code"
                                labelClassName="!font-semibold lg:text-base"
                                {...register("carLocation.zipCode")}
                                error={errors.carLocation?.zipCode?.message}
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                            <Input
                                type="text"
                                label="Address"
                                placeholder="Address"
                                labelClassName="!font-semibold lg:text-base"
                                {...register("carLocation.address")}
                                error={errors.carLocation?.address?.message}
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-x-3 gap-y-4 md:grid-cols-2">
                            <Input
                                type="number"
                                label="Latitude"
                                labelClassName="!font-semibold lg:text-base"
                                placeholder="Latitude"
                                {...register("carLocation.latitude", {
                                    valueAsNumber: true,
                                })}
                                error={errors.carLocation?.latitude?.message}
                            />

                            <Input
                                type="number"
                                label="Longitude"
                                labelClassName="!font-semibold lg:text-base"
                                placeholder="Longitude"
                                {...register("carLocation.longitude", {
                                    valueAsNumber: true,
                                })}
                                error={errors.carLocation?.longitude?.message}
                            />
                        </div>
                    </div>
                </div>

                <CreateListingFooter onBack={() => setStep(2)} />
            </form>
        </div>
    );
}
