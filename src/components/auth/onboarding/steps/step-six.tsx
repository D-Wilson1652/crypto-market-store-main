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
import { NameSchema } from "@/validations/common/name-validation";

// Components Import
import CreateListingFooter from "@/components/footer/create-listing-footer";
import Text from "@/components/ui/typography/text";
import Input from "@/components/ui/form-fields/input";
import Radio from "@/components/ui/form-fields/radio";
import SelectBox from "@/components/ui/select-box";
import FieldHelperText from "@/components/ui/form-fields/field-helper-text";
import Textarea from "@/components/ui/form-fields/textarea";

// Lib Imports
import { cn } from "@/lib/utils";

// Zod
const StepSixSchema = z.object({
    itemsInterest: z
        .object({
            itemName: NameSchema.shape.name,
            category: z.string().min(1, { message: "This field is required" }),
            itemDescription: z
                .string()
                .min(1, { message: "This field is required" })
                .max(700, { message: "This field is too long" }),
            itemPrice: z
                .string()
                .min(1, { message: "This field is required" })
                .regex(/^\d*\.?\d+$/, {
                    message: "Please enter a valid price",
                }),
            hasItemBeenAuthenticated: z.string(),
            authenticationCertificate: z.string().optional(),
            itemCondition: z
                .string()
                .min(1, { message: "This field is required" }),
            warranty: z.string(),
            shippingDetails: z.object({
                weight: z
                    .string()
                    .min(1, { message: "This field is required" }),
                dimensions: z
                    .string()
                    .min(1, { message: "This field is required" }),
            }),
        })
        .refine(
            (data) => {
                if (data.hasItemBeenAuthenticated === "true") {
                    return (
                        data.authenticationCertificate &&
                        data.authenticationCertificate.length > 0
                    );
                }
                return true;
            },
            {
                message:
                    "Authentication certificate is required when the item has been authenticated.",
                path: ["authenticationCertificate"],
            }
        ),
});

type StepSixSchemaType = z.infer<typeof StepSixSchema>;

const categoryOptions = [
    { label: "Select Category", disabled: true },
    { label: "Real Estate", value: "Real Estate" },
    { label: "Cars", value: "Cars" },
    { label: "Watches", value: "Watches" },
    { label: "Yachts", value: "Yachts" },
    { label: "Jets", value: "Jets" },
    { label: "Motorcycles", value: "Motorcycles" },
    { label: "Number Plates", value: "Number Plates" },
    { label: "Jewellery", value: "Jewellery" },
    { label: "Domains", value: "Domains" },
    { label: "Others", value: "Others" },
];

const itemConditionOptions = [
    { label: "Select Item Condition", disabled: true },
    { label: "New", value: "New" },
    { label: "Like New", value: "Like New" },
    { label: "Used (Good)", value: "Used (Good)" },
    { label: "Used (Fair)", value: "Used (Fair)" },
];

// JSX Component
export default function StepSix() {
    // Jotai
    const setStep = useSetAtom(onboardingStepAtom);
    const [store, setStore] = useAtom(onboardingAtom);

    // State
    const category = store.itemsInterest.category;
    const [selected, setSelected] = useState(
        category
            ? {
                  value: category,
                  label: category,
                  disabled: false,
              }
            : categoryOptions[0]
    );

    const itemCondition = store.itemsInterest.itemCondition;
    const [selectedCondition, setSelectedCondition] = useState(
        itemCondition
            ? {
                  value: itemCondition,
                  label: itemCondition,
                  disabled: false,
              }
            : itemConditionOptions[0]
    );

    const [authenticationCertificate, setAuthenticationCertificate] =
        useState("");
    const [
        authenticationCertificateFileName,
        setAuthenticationCertificateFileName,
    ] = useState("");
    const [
        isAuthenticatedCertificateSelected,
        setIsAuthenticatedCertificateSelected,
    ] = useState(false);

    // Refs
    const certificateRef = useRef<HTMLInputElement>(null);

    // useEffect
    useEffect(() => {
        if (store.itemsInterest.authenticationCertificate) {
            setAuthenticationCertificate(
                store.itemsInterest.authenticationCertificate
            );
        }
    }, [store.itemsInterest.authenticationCertificate]);

    // Zod Form
    const {
        handleSubmit,
        register,
        control,
        watch,
        formState: { errors },
    } = useForm<StepSixSchemaType>({
        defaultValues: {
            itemsInterest: {
                itemName: store.itemsInterest.itemName,
                category: store.itemsInterest.category,
                itemDescription: store.itemsInterest.itemDescription,
                itemPrice: store.itemsInterest.itemPrice,
                hasItemBeenAuthenticated: store.itemsInterest
                    .hasItemBeenAuthenticated
                    ? "true"
                    : "false",
                authenticationCertificate: store.itemsInterest
                    .authenticationCertificate
                    ? "File Selected"
                    : "",
                itemCondition: store.itemsInterest.itemCondition,
                warranty: store.itemsInterest.warranty ? "true" : "false",
                shippingDetails: {
                    weight: store.itemsInterest.shippingDetails.weight,
                    dimensions: store.itemsInterest.shippingDetails.dimensions,
                },
            },
        },
        resolver: zodResolver(StepSixSchema),
    });

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setAuthenticationCertificateFileName("");
        setIsAuthenticatedCertificateSelected(false);

        const file: File | undefined = e.target.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64 = reader.result as string;
                setAuthenticationCertificate(base64);
                setAuthenticationCertificateFileName(file.name);
                setIsAuthenticatedCertificateSelected(true);
            };
            reader.readAsDataURL(file);
        }
    };

    function handleStepSix(data: StepSixSchemaType) {
        // Extracting fields
        const {
            itemName,
            category,
            itemDescription,
            itemPrice,
            itemCondition,
            shippingDetails,
        } = data.itemsInterest;

        setStore((prev) => ({
            ...prev,
            itemsInterest: {
                itemName,
                category,
                itemDescription,
                itemPrice: itemPrice.includes(".")
                    ? parseFloat(itemPrice).toFixed(2).toString()
                    : itemPrice,
                hasItemBeenAuthenticated:
                    data.itemsInterest.hasItemBeenAuthenticated == "true",
                itemCondition,
                authenticationCertificate: authenticationCertificate,
                warranty: data.itemsInterest.warranty == "true",
                shippingDetails: {
                    weight: shippingDetails.weight,
                    dimensions: shippingDetails.dimensions,
                },
            },
        }));

        setStep(7);
    }

    return (
        <div className="w-full md:w-[648px] xl:w-[748px] 2xl:w-[848px]">
            <Text
                tag="h3"
                className="mb-4 border-b border-b-gray-lighter pb-4 text-xl lg:mb-6"
            >
                Items Description for Sale
            </Text>

            <form
                noValidate
                onSubmit={handleSubmit((data) => handleStepSix(data))}
                className="grid grid-cols-1 gap-8 xl:gap-12"
            >
                <div>
                    <div className="mb-4 grid grid-cols-1 gap-3 md:mb-6 xl:gap-4">
                        <div className="grid grid-cols-1 gap-3">
                            <Input
                                type="text"
                                label="Item Name"
                                placeholder="Item Name"
                                labelClassName="!font-semibold lg:text-base"
                                {...register("itemsInterest.itemName")}
                                error={errors.itemsInterest?.itemName?.message}
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            <div>
                                <Controller
                                    name="itemsInterest.category"
                                    control={control}
                                    render={({ field }) => (
                                        <SelectBox
                                            {...field}
                                            value={selected}
                                            label="Category"
                                            options={categoryOptions}
                                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                            onChange={(data: any) => {
                                                setSelected(data);
                                                field.onChange(data.value);
                                            }}
                                            labelClassName="mb-1.5 !text-sm lg:!text-base !font-semibold"
                                            buttonClassName={cn(
                                                "h-10 lg:h-11 2xl:h-12",
                                                errors.itemsInterest?.category
                                                    ?.message && "border-red"
                                            )}
                                            clearable={
                                                selected.disabled ? false : true
                                            }
                                            onClearClick={() => {
                                                setSelected(categoryOptions[0]);
                                                field.onChange("");
                                            }}
                                        />
                                    )}
                                />

                                <FieldHelperText className="text-xs font-normal text-red mt-px">
                                    {errors.itemsInterest?.category?.message}
                                </FieldHelperText>
                            </div>
                        </div>

                        <Textarea
                            variant="outline"
                            label={"Describe your listing"}
                            maxLength={700}
                            labelClassName="!mb-2 !text-base !font-semibold"
                            textareaClassName="h-[72px] lg:h-32 xl:h-40 w-full resize-none lg:rounded-xl"
                            {...register("itemsInterest.itemDescription")}
                            error={
                                errors.itemsInterest?.itemDescription?.message
                            }
                        />
                        <p className="-mt-1 text-sm font-normal lg:text-base">
                            {watch("itemsInterest.itemDescription")?.length ??
                                0}
                            /700
                        </p>

                        {/* Price and condition */}
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                            <Input
                                type="number"
                                label="Price"
                                placeholder="Price"
                                labelClassName="!font-semibold lg:text-base"
                                {...register("itemsInterest.itemPrice")}
                                error={errors.itemsInterest?.itemPrice?.message}
                            />

                            <div>
                                <Controller
                                    name="itemsInterest.itemCondition"
                                    control={control}
                                    render={({ field }) => (
                                        <SelectBox
                                            {...field}
                                            value={selectedCondition}
                                            label="Item Condition"
                                            options={itemConditionOptions}
                                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                            onChange={(data: any) => {
                                                setSelectedCondition(data);
                                                field.onChange(data.value);
                                            }}
                                            labelClassName="mb-1.5 !text-sm lg:!text-base !font-semibold"
                                            buttonClassName={cn(
                                                "h-10 lg:h-11 2xl:h-12",
                                                errors.itemsInterest
                                                    ?.itemCondition?.message &&
                                                    "border-red"
                                            )}
                                            clearable={
                                                selectedCondition.disabled
                                                    ? false
                                                    : true
                                            }
                                            onClearClick={() => {
                                                setSelectedCondition(
                                                    itemConditionOptions[0]
                                                );
                                            }}
                                        />
                                    )}
                                />

                                <FieldHelperText className="text-xs font-normal text-red mt-px">
                                    {
                                        errors.itemsInterest?.itemCondition
                                            ?.message
                                    }
                                </FieldHelperText>
                            </div>
                        </div>

                        {/* Warranty */}
                        <div>
                            <Text tag="h6" className="mb-4 !font-semibold">
                                Does the item come with a warranty?
                            </Text>
                            <div className="flex items-center gap-8">
                                <Radio
                                    label="Yes"
                                    labelClassName="!ml-3 !text-gray-dark font-normal"
                                    inputClassName="!border-gray-lighter focus:!ring-1 focus:!ring-offset-0 focus:!ring-gray-dark ring-1 !ring-gray-dark !text-gray-dark"
                                    value="true"
                                    {...register("itemsInterest.warranty")}
                                />
                                <Radio
                                    label="No"
                                    value="false"
                                    labelClassName="!ml-3 text-gray font-normal"
                                    inputClassName="!border-gray-lighter focus:!ring-1 focus:!ring-offset-0 focus:!ring-gray-dark ring-1 !ring-gray-dark !text-gray-dark"
                                    {...register("itemsInterest.warranty")}
                                />
                            </div>
                        </div>

                        <div>
                            <Text tag="h6" className="mb-4 !font-semibold">
                                Has the item been authenticated?
                            </Text>
                            <div className="flex items-center gap-8">
                                <Radio
                                    label="Yes"
                                    labelClassName="!ml-3 !text-gray-dark font-normal"
                                    inputClassName="!border-gray-lighter focus:!ring-1 focus:!ring-offset-0 focus:!ring-gray-dark ring-1 !ring-gray-dark !text-gray-dark"
                                    value="true"
                                    {...register(
                                        "itemsInterest.hasItemBeenAuthenticated"
                                    )}
                                />
                                <Radio
                                    label="No"
                                    value="false"
                                    labelClassName="!ml-3 text-gray font-normal"
                                    inputClassName="!border-gray-lighter focus:!ring-1 focus:!ring-offset-0 focus:!ring-gray-dark ring-1 !ring-gray-dark !text-gray-dark"
                                    {...register(
                                        "itemsInterest.hasItemBeenAuthenticated"
                                    )}
                                />
                            </div>
                        </div>

                        {watch("itemsInterest.hasItemBeenAuthenticated") ===
                            "true" && (
                            <>
                                <div className="grid grid-cols-1 gap-3">
                                    <Input
                                        type="file"
                                        onChange={(e) => {
                                            handleFileChange(e);
                                        }}
                                        className="hidden"
                                        ref={certificateRef}
                                    />

                                    <Input
                                        type="text"
                                        label="Upload Authentication Certificate"
                                        placeholder="Authentication Certificate"
                                        labelClassName="!font-semibold lg:text-base"
                                        onClick={() => {
                                            certificateRef.current?.click();

                                            setTimeout(() => {
                                                setAuthenticationCertificate(
                                                    ""
                                                );
                                            }, 300);
                                        }}
                                        {...register(
                                            "itemsInterest.authenticationCertificate"
                                        )}
                                        value={
                                            authenticationCertificateFileName
                                        }
                                        readOnly
                                    />

                                    {!isAuthenticatedCertificateSelected && (
                                        <FieldHelperText className="text-xs font-normal text-red -mt-2">
                                            {
                                                errors.itemsInterest
                                                    ?.authenticationCertificate
                                                    ?.message
                                            }
                                        </FieldHelperText>
                                    )}
                                </div>

                                {/* preview */}
                                {authenticationCertificate && (
                                    <div className="w-full flex items-center justify-center">
                                        <img
                                            src={authenticationCertificate}
                                            alt="preview"
                                            className="rounded-lg w-64 h-56"
                                        />
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>

                <div>
                    <Text
                        tag="h3"
                        className="mb-4 border-b border-b-gray-lighter pb-4 text-xl lg:mb-6"
                    >
                        Shipping Details
                    </Text>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="grid grid-cols-1 gap-3">
                            <Input
                                type="text"
                                label="Weight"
                                placeholder="Weight"
                                labelClassName="!font-semibold lg:text-base"
                                {...register(
                                    "itemsInterest.shippingDetails.weight"
                                )}
                                error={
                                    errors.itemsInterest?.shippingDetails
                                        ?.weight?.message
                                }
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            <Input
                                type="text"
                                label="Dimensions"
                                placeholder="Dimensions"
                                labelClassName="!font-semibold lg:text-base"
                                {...register(
                                    "itemsInterest.shippingDetails.dimensions"
                                )}
                                error={
                                    errors.itemsInterest?.shippingDetails
                                        ?.dimensions?.message
                                }
                            />
                        </div>
                    </div>
                </div>

                <CreateListingFooter onBack={() => setStep(5)} />
            </form>
        </div>
    );
}
