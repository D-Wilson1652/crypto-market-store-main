import { useState, useRef, useEffect } from "react";

// Jotai Import
import { useAtom, useSetAtom } from "jotai";
import {
    onboardingStepAtom,
    onboardingAtom,
} from "@/components/auth/onboarding/context";

// Zod Import
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Components Import
import CreateListingFooter from "@/components/footer/create-listing-footer";
import Text from "@/components/ui/typography/text";
import Input from "@/components/ui/form-fields/input";
import SelectBox from "@/components/ui/select-box";
import FieldHelperText from "@/components/ui/form-fields/field-helper-text";
import { cn } from "@/lib/utils";

// Zod
const StepThreeSchema = z.object({
    identityVerification: z.object({
        governmentIdType: z
            .string({
                required_error: "Please select a government ID type",
                invalid_type_error: "Please select a government ID type",
            })
            .min(1, { message: "Please select a government ID type" }),
        governmentIdNumber: z
            .string()
            .min(1, {
                message: "Government ID number is required",
            })
            .max(50, { message: "Government ID number is too long" }),
        photoOfGovernmentId: z
            .string({
                required_error: "Photo of Government ID is required",
                invalid_type_error: "Photo of Government ID is required",
            })
            .min(1, {
                message: "Photo of Government ID is required",
            }),
        selfiePhotoWithId: z
            .string({
                required_error: "Selfie photo with ID is required",
                invalid_type_error: "Selfie photo with ID is required",
            })
            .min(1, {
                message: "Selfie photo with ID is required",
            }),
    }),
});

type StepThreeSchemaType = z.infer<typeof StepThreeSchema>;

const options = [
    { label: "Select Government ID", value: "", disabled: true },
    { label: "Passport", value: "Passport" },
    { label: "National ID", value: "National ID" },
    { label: "Driver's License", value: "Driver's License" },
];

const StepThree = () => {
    // Jotai
    const setStep = useSetAtom(onboardingStepAtom);
    const [store, setStore] = useAtom(onboardingAtom);

    // State
    const selectedOption = store.identityVerification.governmentIdType;
    const [selected, setSelected] = useState(
        selectedOption
            ? {
                  label: selectedOption,
                  value: selectedOption,
                  disabled: false,
              }
            : options[0]
    );

    const [photoOfGovernmentId, setPhotoOfGovernmentId] = useState("");
    const [photoOfGovernmentIdFileName, setPhotoOfGovernmentIdFileName] =
        useState("");
    const [isPhotoOfGovernmentIdSelected, setIsPhotoOfGovernmentIdSelected] =
        useState(false);

    const [selfiePhotoWithId, setSelfiePhotoWithId] = useState("");
    const [selfiePhotoWithIdFileName, setSelfiePhotoWithIdFileName] =
        useState("");
    const [isSelfiePhotoWithIdSelected, setIsSelfiePhotoWithIdSelected] =
        useState(false);

    // Refs
    const photoOfGovernmentIdRef = useRef<HTMLInputElement>(null);
    const selfiePhotoWithIdRef = useRef<HTMLInputElement>(null);

    // useEffect
    useEffect(() => {
        setSelected(
            options.find(
                (item) =>
                    item.value === store.identityVerification.governmentIdType
            ) || options[0]
        );
    }, [store.identityVerification.governmentIdType]);

    useEffect(() => {
        if (store.identityVerification.photoOfGovernmentId) {
            setPhotoOfGovernmentId(
                store.identityVerification.photoOfGovernmentId
            );
        }

        if (store.identityVerification.selfiePhotoWithId) {
            setSelfiePhotoWithId(store.identityVerification.selfiePhotoWithId);
        }
    }, [
        store.identityVerification.photoOfGovernmentId,
        store.identityVerification.selfiePhotoWithId,
    ]);

    // Zod Form
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = useForm<StepThreeSchemaType>({
        defaultValues: {
            identityVerification: {
                governmentIdType:
                    store.identityVerification.governmentIdType || "",
                governmentIdNumber:
                    store.identityVerification.governmentIdNumber || "",
                photoOfGovernmentId: store.identityVerification
                    .photoOfGovernmentId
                    ? "File Selected"
                    : "",
                selfiePhotoWithId: store.identityVerification.selfiePhotoWithId
                    ? "File Selected"
                    : "",
            },
        },
        resolver: zodResolver(StepThreeSchema),
    });

    const handleFileChange = async (
        e: React.ChangeEvent<HTMLInputElement>,
        setter: (data: string) => void
    ) => {
        const file: File | undefined = e.target.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64 = reader.result as string;
                setter(base64);
            };
            reader.readAsDataURL(file);
        }
    };

    const handlePhotoOfGovernmentId = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPhotoOfGovernmentIdFileName("");
        setIsPhotoOfGovernmentIdSelected(false);

        const file: File | undefined = e.target.files?.[0];

        if (file) {
            setPhotoOfGovernmentIdFileName(file.name);
            handleFileChange(e, setPhotoOfGovernmentId);
            setIsPhotoOfGovernmentIdSelected(true);
        }
    };

    const handleSelfiePhotoWithId = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSelfiePhotoWithIdFileName("");
        setIsSelfiePhotoWithIdSelected(false);

        const file: File | undefined = e.target.files?.[0];

        if (file) {
            setSelfiePhotoWithIdFileName(file.name);
            handleFileChange(e, setSelfiePhotoWithId);
            setIsSelfiePhotoWithIdSelected(true);
        }
    };

    function handleStepThree(data: StepThreeSchemaType) {
        setStore((prev) => ({
            ...prev,
            identityVerification: {
                governmentIdType: data.identityVerification.governmentIdType,
                governmentIdNumber:
                    data.identityVerification.governmentIdNumber,
                photoOfGovernmentId: photoOfGovernmentId,
                selfiePhotoWithId: selfiePhotoWithId,
            },
        }));

        setStep(4);
    }

    return (
        <div className="w-full md:w-[648px] xl:w-[748px] 2xl:w-[848px]">
            <Text
                tag="h3"
                className="mb-4 border-b border-b-gray-lighter pb-4 text-xl lg:mb-6"
            >
                Identity Verification
            </Text>

            <form
                noValidate
                onSubmit={handleSubmit((data) => handleStepThree(data))}
                className="grid grid-cols-1 gap-8 xl:gap-12"
            >
                <div>
                    <div className="mb-4 grid grid-cols-1 gap-6 md:mb-6 xl:gap-8">
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                            <div>
                                <Controller
                                    name="identityVerification.governmentIdType"
                                    control={control}
                                    render={({ field }) => (
                                        <SelectBox
                                            {...field}
                                            value={selected}
                                            label="Government ID Type"
                                            options={options}
                                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                            onChange={(data: any) => {
                                                setSelected(data);
                                                field.onChange(data.value);
                                            }}
                                            labelClassName="mb-1.5 !text-sm lg:!text-base !font-semibold"
                                            buttonClassName={cn(
                                                "h-10 lg:h-11 2xl:h-12 !py-5",
                                                errors.identityVerification
                                                    ?.governmentIdType &&
                                                    "border-red"
                                            )}
                                            clearable={
                                                selected.disabled ? false : true
                                            }
                                            onClearClick={() => {
                                                setSelected(options[0]);
                                                field.onChange("");
                                            }}
                                        />
                                    )}
                                />

                                <FieldHelperText className="text-xs font-normal text-red mt-0.5">
                                    {
                                        errors.identityVerification
                                            ?.governmentIdType?.message
                                    }
                                </FieldHelperText>
                            </div>

                            <Input
                                type="text"
                                label="Government ID Number"
                                placeholder="Government ID Number"
                                labelClassName="!font-semibold lg:text-base"
                                {...register(
                                    "identityVerification.governmentIdNumber"
                                )}
                                error={
                                    errors.identityVerification
                                        ?.governmentIdNumber?.message
                                }
                            />
                        </div>

                        <div className="grid grid-cols-1">
                            <Input
                                type="file"
                                onChange={(e) => {
                                    handlePhotoOfGovernmentId(e);
                                }}
                                className="hidden"
                                ref={photoOfGovernmentIdRef}
                            />

                            <Input
                                type="text"
                                label="Photo of Government ID"
                                placeholder="Upload Photo of Government ID"
                                labelClassName="!font-semibold lg:text-base"
                                inputClassName="!cursor-pointer"
                                {...register(
                                    "identityVerification.photoOfGovernmentId"
                                )}
                                onClick={() => {
                                    photoOfGovernmentIdRef.current?.click();

                                    setTimeout(() => {
                                        setPhotoOfGovernmentId("");
                                    }, 300);
                                }}
                                value={photoOfGovernmentIdFileName}
                                readOnly
                            />

                            {!isPhotoOfGovernmentIdSelected && (
                                <FieldHelperText className="text-xs font-normal text-red mt-0.5">
                                    {
                                        errors.identityVerification
                                            ?.photoOfGovernmentId?.message
                                    }
                                </FieldHelperText>
                            )}
                        </div>

                        {/* preview */}
                        {photoOfGovernmentId && (
                            <div className="w-full flex items-center justify-center">
                                <img
                                    src={photoOfGovernmentId}
                                    alt="preview government id"
                                    className="rounded-lg w-64 h-56"
                                />
                            </div>
                        )}

                        <div className="grid grid-cols-1 gap-3">
                            <Input
                                type="file"
                                onChange={(e) => {
                                    handleSelfiePhotoWithId(e);
                                }}
                                className="hidden"
                                ref={selfiePhotoWithIdRef}
                            />

                            <Input
                                type="text"
                                label="Selfie Photo with ID"
                                placeholder="Upload Selfie Photo with ID"
                                labelClassName="!font-semibold lg:text-base"
                                inputClassName="!cursor-pointer"
                                onClick={() => {
                                    selfiePhotoWithIdRef.current?.click();

                                    setTimeout(() => {
                                        setSelfiePhotoWithId("");
                                    }, 300);
                                }}
                                {...register(
                                    "identityVerification.selfiePhotoWithId"
                                )}
                                value={selfiePhotoWithIdFileName}
                                readOnly
                            />

                            {!isSelfiePhotoWithIdSelected && (
                                <FieldHelperText className="text-xs font-normal text-red -mt-2.5">
                                    {
                                        errors.identityVerification
                                            ?.selfiePhotoWithId?.message
                                    }
                                </FieldHelperText>
                            )}
                        </div>

                        {/* preview */}
                        {selfiePhotoWithId && (
                            <div className="w-full flex items-center justify-center">
                                <img
                                    src={selfiePhotoWithId}
                                    alt="preview selfie"
                                    className="rounded-lg w-64 h-56"
                                />
                            </div>
                        )}
                    </div>
                </div>

                <CreateListingFooter onBack={() => setStep(2)} />
            </form>
        </div>
    );
};
export default StepThree;
