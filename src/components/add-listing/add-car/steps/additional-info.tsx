import { useState } from "react";

// Jotai Imports
import { useAtom, useSetAtom } from "jotai";
import { stepAtom, storeAtom } from "@/components/add-listing/add-car/context";

// Zod Import
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Components Import
import CreateListingFooter from "@/components/footer/create-listing-footer";
import Input from "@/components/ui/form-fields/input";
import Text from "@/components/ui/typography/text";
import SelectBox from "@/components/ui/select-box";
import FieldHelperText from "@/components/ui/form-fields/field-helper-text";
import { cn } from "@/lib/utils";

const options = [
    { label: "Select VAT Type", value: "", disabled: true },
    { label: "EU VAT Paid", value: "EU VAT Paid" },
    { label: "No Duty Paid", value: "No Duty Paid" },
    { label: "VAT Exempt", value: "VAT Exempt" },
    { label: "VAT Paid", value: "VAT Paid" },
    { label: "VAT Qualifying", value: "VAT Qualifying" },
    { label: "VAT Reclaimable", value: "VAT Reclaimable" },
    { label: "VAT Unpaid", value: "VAT Unpaid" },
];

// Zod Schema
const AdditionalInfoSchema = z.object({
    carAdditionalInfo: z.object({
        vatType: z
            .string()
            .min(1, "Please enter the VAT type")
            .max(50, "VAT type is too long"),
        licenseNumber: z
            .string()
            .min(1, "Please enter the license number")
            .max(50, "License number is too long"),
    }),
});

type AdditionalInfoSchemaType = z.infer<typeof AdditionalInfoSchema>;

// JSX Component
export default function AdditionalInfo() {
    // Jotai
    const setStep = useSetAtom(stepAtom);
    const [store, setStore] = useAtom(storeAtom);

    // State
    const vatType = store.carAdditionalInfo.vatType;
    const [selectedVatType, setSelectedVatType] = useState(
        vatType
            ? {
                  label: vatType,
                  value: vatType,
                  disabled: false,
              }
            : options[0]
    );

    // Zod Form
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = useForm<AdditionalInfoSchemaType>({
        defaultValues: {
            carAdditionalInfo: {
                vatType: vatType,
                licenseNumber: store.carAdditionalInfo.licenseNumber,
            },
        },
        resolver: zodResolver(AdditionalInfoSchema),
    });

    function handleAdditionalDetails(data: AdditionalInfoSchemaType) {
        // Extracting data from the form
        const { vatType, licenseNumber } = data.carAdditionalInfo;

        // Updating the store
        setStore({
            ...store,
            carAdditionalInfo: {
                vatType,
                licenseNumber,
            },
        });
        console.log(data);
        setStep(6);
    }

    return (
        <div className="w-full md:w-[648px] xl:w-[748px] 2xl:w-[848px]">
            <Text
                tag="h3"
                className="mb-4 border-b border-b-gray-lighter pb-4 text-xl lg:mb-6"
            >
                Additional Information
            </Text>

            <form
                noValidate
                onSubmit={handleSubmit((data) => handleAdditionalDetails(data))}
                className="grid grid-cols-1 gap-8 xl:gap-12"
            >
                <div>
                    <div className="grid grid-cols-1">
                        <div>
                            <Controller
                                name="carAdditionalInfo.vatType"
                                control={control}
                                render={({ field }) => (
                                    <SelectBox
                                        {...field}
                                        value={selectedVatType}
                                        options={options}
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        onChange={(data: any) => {
                                            setSelectedVatType(data);
                                            field.onChange(data.value);
                                        }}
                                        labelClassName="mb-1.5 !text-sm lg:!text-base !font-semibold"
                                        buttonClassName={cn(
                                            "h-10 lg:h-11 2xl:h-12",
                                            errors.carAdditionalInfo?.vatType
                                                ?.message && "border-red"
                                        )}
                                        clearable={
                                            selectedVatType.disabled
                                                ? false
                                                : true
                                        }
                                        onClearClick={() => {
                                            setSelectedVatType(options[0]);

                                            field.onChange("");
                                        }}
                                    />
                                )}
                            />

                            <FieldHelperText className="text-xs font-normal text-red mt-px">
                                {errors.carAdditionalInfo?.vatType?.message}
                            </FieldHelperText>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 mt-6">
                        {/* License */}
                        <Input
                            variant="outline"
                            label="License Number"
                            placeholder="Enter License Number"
                            labelClassName="!font-semibold lg:text-base"
                            {...register("carAdditionalInfo.licenseNumber")}
                            error={
                                errors.carAdditionalInfo?.licenseNumber?.message
                            }
                        />
                    </div>
                </div>

                <CreateListingFooter onBack={() => setStep(4)} />
            </form>
        </div>
    );
}
