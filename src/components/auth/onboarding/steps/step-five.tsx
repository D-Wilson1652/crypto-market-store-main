import { useState } from "react";

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

// Lib Import
import { cn } from "@/lib/utils";

// Zod
const StepFiveSchema = z.object({
    financialInformation: z.object({
        sourceOfFunds: z
            .string()
            .min(1, { message: "This field is required" })
            .max(255, { message: "This field is too long" }),
        annualIncome: z
            .string()
            .min(1, { message: "This field is required" })
            .max(255, { message: "This field is too long" }),
        bankAccountDetails: z.object({
            bankName: z
                .string()
                .min(1, { message: "This field is required" })
                .max(255, { message: "This field is too long" }),
            accountNumber: z
                .string()
                .min(1, { message: "This field is required" })
                .max(255, { message: "This field is too long" }),
            accountHolderName: z
                .string()
                .min(1, { message: "This field is required" })
                .max(255, { message: "This field is too long" }),
            swiftBicCode: z
                .string()
                .min(1, { message: "This field is required" })
                .max(255, { message: "This field is too long" }),
            iban: z.string().optional(),
        }),
        cryptoWalletAddress: z.string().optional(),
    }),
});

type StepFiveSchemaType = z.infer<typeof StepFiveSchema>;

const sourceOfFundsOptions = [
    { label: "Select Source of Funds", value: "", disabled: true },
    { label: "Employment Income", value: "Employment Income" },
    { label: "Business Income", value: "Business Income" },
    { label: "Investment", value: "Investment" },
    { label: "Inheritance", value: "Inheritance" },
    { label: "Other", value: "Other" },
];

const annualIncomeOptions = [
    { label: "Select Annual Income", value: "", disabled: true },
    { label: "Less than $10,000", value: "Less than $10,000" },
    { label: "$10,000 - $50,000", value: "$10,000 - $50,000" },
    { label: "$50,000 - $100,000", value: "$50,000 - $100,000" },
    { label: "$100,000 - $500,000", value: "$100,000 - $500,000" },
    { label: "More than $500,000", value: "More than $500,000" },
];

// JSX Component
export default function StepFive() {
    // Jotai
    const setStep = useSetAtom(onboardingStepAtom);
    const [store, setStore] = useAtom(onboardingAtom);

    const sourceOfFunds = store.financialInformation.sourceOfFunds;
    const [sourceOfFundsSelected, setSourceOfFundsSelected] = useState(
        sourceOfFunds
            ? {
                  label: sourceOfFunds,
                  value: sourceOfFunds,
                  disabled: false,
              }
            : sourceOfFundsOptions[0]
    );

    const annualIncome = store.financialInformation.annualIncome;
    const [annualIncomeSelected, setAnnualIncomeSelected] = useState(
        annualIncome
            ? {
                  label: annualIncome,
                  value: annualIncome,
                  disabled: false,
              }
            : annualIncomeOptions[0]
    );

    // Zod Form
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = useForm<StepFiveSchemaType>({
        defaultValues: {
            financialInformation: {
                sourceOfFunds: store.financialInformation.sourceOfFunds,
                annualIncome: store.financialInformation.annualIncome,
                bankAccountDetails: {
                    bankName:
                        store.financialInformation.bankAccountDetails.bankName,
                    accountNumber:
                        store.financialInformation.bankAccountDetails
                            .accountNumber,
                    accountHolderName:
                        store.financialInformation.bankAccountDetails
                            .accountHolderName,
                    swiftBicCode:
                        store.financialInformation.bankAccountDetails
                            .swiftBicCode,
                    iban: store.financialInformation.bankAccountDetails.iban,
                },
                cryptoWalletAddress:
                    store.financialInformation.cryptoWalletAddress,
            },
        },
        resolver: zodResolver(StepFiveSchema),
    });

    function handleStepFive(data: StepFiveSchemaType) {
        setStore((prev) => ({
            ...prev,
            financialInformation: {
                sourceOfFunds: data.financialInformation.sourceOfFunds,
                annualIncome: data.financialInformation.annualIncome,
                bankAccountDetails: {
                    bankName:
                        data.financialInformation.bankAccountDetails.bankName,
                    accountNumber:
                        data.financialInformation.bankAccountDetails
                            .accountNumber,
                    accountHolderName:
                        data.financialInformation.bankAccountDetails
                            .accountHolderName,
                    swiftBicCode:
                        data.financialInformation.bankAccountDetails
                            .swiftBicCode,
                    iban:
                        data.financialInformation.bankAccountDetails.iban || "",
                },
                cryptoWalletAddress:
                    data.financialInformation.cryptoWalletAddress || "",
            },
        }));

        setStep(6);
    }

    return (
        <div className="w-full md:w-[648px] xl:w-[748px] 2xl:w-[848px]">
            <Text
                tag="h3"
                className="mb-4 border-b border-b-gray-lighter pb-4 text-xl lg:mb-6"
            >
                Financial Information
            </Text>

            <form
                noValidate
                onSubmit={handleSubmit((data) => handleStepFive(data))}
                className="grid grid-cols-1 gap-8 xl:gap-12"
            >
                <div>
                    <div className="mb-4 grid grid-cols-1 gap-3 md:mb-6 xl:gap-4">
                        <div className="grid grid-cols-1 gap-3">
                            <div>
                                <Controller
                                    name="financialInformation.sourceOfFunds"
                                    control={control}
                                    render={({ field }) => (
                                        <SelectBox
                                            {...field}
                                            value={sourceOfFundsSelected}
                                            label="Source of Funds"
                                            options={sourceOfFundsOptions}
                                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                            onChange={(data: any) => {
                                                setSourceOfFundsSelected(data);
                                                field.onChange(data.value);
                                            }}
                                            labelClassName="mb-1.5 !text-sm lg:!text-base !font-semibold"
                                            buttonClassName={cn(
                                                "h-10 lg:h-11 2xl:h-12",
                                                errors.financialInformation
                                                    ?.sourceOfFunds?.message &&
                                                    "border border-red"
                                            )}
                                            clearable={
                                                sourceOfFundsSelected.disabled
                                                    ? false
                                                    : true
                                            }
                                            onClearClick={() => {
                                                setSourceOfFundsSelected(
                                                    sourceOfFundsOptions[0]
                                                );
                                                field.onChange("");
                                            }}
                                        />
                                    )}
                                />

                                <FieldHelperText className="text-xs font-normal text-red mt-px">
                                    {
                                        errors.financialInformation
                                            ?.sourceOfFunds?.message
                                    }
                                </FieldHelperText>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            <div>
                                <Controller
                                    name="financialInformation.annualIncome"
                                    control={control}
                                    render={({ field }) => (
                                        <SelectBox
                                            {...field}
                                            value={annualIncomeSelected}
                                            label="Annual Income"
                                            options={annualIncomeOptions}
                                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                            onChange={(data: any) => {
                                                setAnnualIncomeSelected(data);
                                                field.onChange(data.value);
                                            }}
                                            labelClassName="mb-1.5 !text-sm lg:!text-base !font-semibold"
                                            buttonClassName={cn(
                                                "h-10 lg:h-11 2xl:h-12",
                                                errors.financialInformation
                                                    ?.annualIncome?.message &&
                                                    "border border-red"
                                            )}
                                            clearable={
                                                annualIncomeSelected.disabled
                                                    ? false
                                                    : true
                                            }
                                            onClearClick={() => {
                                                setAnnualIncomeSelected(
                                                    annualIncomeOptions[0]
                                                );
                                                field.onChange("");
                                            }}
                                        />
                                    )}
                                />

                                <FieldHelperText className="text-xs font-normal text-red mt-px">
                                    {
                                        errors.financialInformation
                                            ?.annualIncome?.message
                                    }
                                </FieldHelperText>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Text
                            tag="h3"
                            className="mb-4 border-b border-b-gray-lighter pb-4 text-xl lg:mb-6"
                        >
                            Bank Account Details
                        </Text>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="grid grid-cols-1 gap-x-3 gap-y-4 md:grid-cols-2">
                                <Input
                                    type="text"
                                    label="Bank Name"
                                    placeholder="Bank Name"
                                    labelClassName="!font-semibold lg:text-base"
                                    {...register(
                                        "financialInformation.bankAccountDetails.bankName"
                                    )}
                                    error={
                                        errors.financialInformation
                                            ?.bankAccountDetails?.bankName
                                            ?.message
                                    }
                                />
                                <Input
                                    type="text"
                                    label="Account Number"
                                    placeholder="Account Number"
                                    labelClassName="!font-semibold lg:text-base"
                                    {...register(
                                        "financialInformation.bankAccountDetails.accountNumber"
                                    )}
                                    error={
                                        errors.financialInformation
                                            ?.bankAccountDetails?.accountNumber
                                            ?.message
                                    }
                                />
                            </div>
                            <div className="grid grid-cols-1 gap-x-3 gap-y-4 md:grid-cols-2">
                                <Input
                                    type="text"
                                    label="Account Holder Name"
                                    placeholder="Account Holder Name"
                                    labelClassName="!font-semibold lg:text-base"
                                    {...register(
                                        "financialInformation.bankAccountDetails.accountHolderName"
                                    )}
                                    error={
                                        errors.financialInformation
                                            ?.bankAccountDetails
                                            ?.accountHolderName?.message
                                    }
                                />
                                <Input
                                    type="text"
                                    label="Swift/BIC Code"
                                    placeholder="Swift/BIC Code"
                                    labelClassName="!font-semibold lg:text-base"
                                    {...register(
                                        "financialInformation.bankAccountDetails.swiftBicCode"
                                    )}
                                    error={
                                        errors.financialInformation
                                            ?.bankAccountDetails?.swiftBicCode
                                            ?.message
                                    }
                                />
                            </div>
                            <div className="grid grid-cols-1 gap-3">
                                <Input
                                    type="text"
                                    label="IBAN"
                                    placeholder="IBAN"
                                    labelClassName="!font-semibold lg:text-base"
                                    {...register(
                                        "financialInformation.bankAccountDetails.iban"
                                    )}
                                    error={
                                        errors.financialInformation
                                            ?.bankAccountDetails?.iban?.message
                                    }
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-3">
                                <Input
                                    type="text"
                                    label="Crypto Wallet Address"
                                    placeholder="Crypto Wallet Address"
                                    labelClassName="!font-semibold lg:text-base"
                                    {...register(
                                        "financialInformation.cryptoWalletAddress"
                                    )}
                                    error={
                                        errors.financialInformation
                                            ?.cryptoWalletAddress?.message
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <CreateListingFooter onBack={() => setStep(4)} />
            </form>
        </div>
    );
}
