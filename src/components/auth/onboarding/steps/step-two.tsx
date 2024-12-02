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
import clsx from "clsx";
import CreateListingFooter from "@/components/footer/create-listing-footer";
import Text from "@/components/ui/typography/text";
import Input from "@/components/ui/form-fields/input";
import Radio from "@/components/ui/form-fields/radio";
import DateTime from "@/components/ui/form-fields/date-time-picker";
import FieldHelperText from "@/components/ui/form-fields/field-helper-text";

// Zod
const StepTwoSchema = z.object({
    birthDate: z
        .date({
            required_error: "Date of birth is required",
            message: "Date of birth is required",
        })
        .min(new Date(1900, 0, 1), {
            message: "Date of birth must be after 1900",
        })
        .max(new Date(), { message: "Date of birth is invalid" }),
    gender: z.string(),
    nationality: z
        .string()
        .min(1, { message: "Nationality is required" })
        .max(100, { message: "Nationality is too long" }),

    residentialAddress: z.object({
        streetAddress: z
            .string()
            .min(1, { message: "Street address is required" })
            .max(100, { message: "Street address is too long" }),
        city: z
            .string()
            .min(1, { message: "City is required" })
            .max(100, { message: "City is too long" }),
        state: z
            .string()
            .min(1, { message: "State is required" })
            .max(100, { message: "State is too long" }),
        country: z
            .string()
            .min(1, { message: "Country is required" })
            .max(100, { message: "Country is too long" }),
        postalCode: z
            .string()
            .min(1, { message: "Postal code is required" })
            .max(20, { message: "Postal code is too long" }),
    }),
});

type StepTwoSchemaType = z.infer<typeof StepTwoSchema>;

// JSX Component
export default function StepTwo() {
    const [state, setState] = useState(false);

    // Jotai
    const setStep = useSetAtom(onboardingStepAtom);
    const [store, setStore] = useAtom(onboardingAtom);

    // Zod Form
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = useForm<StepTwoSchemaType>({
        defaultValues: {
            birthDate: store.dateOfBirth
                ? new Date(`${store.dateOfBirth}T00:00:00.000Z`)
                : undefined,
            gender: store.gender || "male",
            nationality: store.nationality || "",
            residentialAddress: {
                streetAddress: store.residentialAddress.streetAddress || "",
                city: store.residentialAddress.city || "",
                state: store.residentialAddress.state || "",
                country: store.residentialAddress.country || "",
                postalCode: store.residentialAddress.postalCode || "",
            },
        },
        resolver: zodResolver(StepTwoSchema),
    });

    function handleStepTwo(data: StepTwoSchemaType) {
        setStore((prev) => ({
            ...prev,
            gender: data.gender,
            dateOfBirth: new Date(data.birthDate).toISOString().split("T")[0],
            nationality: data.nationality,
            residentialAddress: data.residentialAddress,
        }));

        setStep(3);
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
                onSubmit={handleSubmit((data) => handleStepTwo(data))}
                className="grid grid-cols-1 gap-8 xl:gap-12"
            >
                <div>
                    <div className="mb-4 grid grid-cols-1 gap-3 md:mb-6 xl:gap-4">
                        <div className="grid grid-cols-1 gap-3">
                            <Controller
                                name="birthDate"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <DateTime
                                        onFocus={(e) => e.target.blur()}
                                        label="Date of birth"
                                        selected={value}
                                        onChange={onChange}
                                        showMonthDropdown
                                        showYearDropdown
                                        yearDropdownItemNumber={30}
                                        scrollableYearDropdown
                                        maxDate={new Date()}
                                        dateFormat="dd / LL / yy"
                                        labelClassName="!font-semibold !text-sm lg:!text-base -mb-px"
                                        placeholderText="dd/mm/yyyy"
                                        inputClassName={clsx(
                                            state &&
                                                "!border !border-gray-dark !ring-[1px] !ring-gray-900/20",
                                            errors.birthDate
                                                ? "!border-red"
                                                : "!border-gray-lighter"
                                        )}
                                        onCalendarOpen={() => setState(true)}
                                        onCalendarClose={() => setState(false)}
                                    />
                                )}
                            />

                            <FieldHelperText className="text-xs font-normal text-red -mt-2.5">
                                {errors.birthDate?.message}
                            </FieldHelperText>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            {/* Nationality */}
                            <Input
                                type="text"
                                label="Nationality"
                                placeholder="Nationality"
                                labelClassName="!font-semibold lg:text-base"
                                {...register("nationality")}
                                error={errors.nationality?.message}
                            />
                        </div>
                    </div>
                    <Text tag="h6" className="mb-4">
                        Gender
                    </Text>
                    <div className="grid grid-cols-2 xl:grid-cols-4 gap-8">
                        <Radio
                            label="Male"
                            labelClassName="!ml-3 !text-gray-dark font-semibold"
                            inputClassName="!border-gray-lighter focus:!ring-1 focus:!ring-offset-0 focus:!ring-gray-dark ring-1 !ring-gray-dark !text-gray-dark"
                            value="male"
                            {...register("gender")}
                        />
                        <Radio
                            label="Female"
                            value="female"
                            labelClassName="!ml-3 text-gray font-semibold"
                            inputClassName="!border-gray-lighter focus:!ring-1 focus:!ring-offset-0 focus:!ring-gray-dark ring-1 !ring-gray-dark !text-gray-dark"
                            {...register("gender")}
                        />
                        <Radio
                            label="Other"
                            value="other"
                            labelClassName="!ml-3 text-gray font-semibold"
                            inputClassName="!border-gray-lighter focus:!ring-1 focus:!ring-offset-0 focus:!ring-gray-dark ring-1 !ring-gray-dark !text-gray-dark"
                        />
                        <Radio
                            label="Prefer not to say"
                            value="preferNotToSay"
                            labelClassName="!ml-3 text-gray font-semibold"
                            inputClassName="!border-gray-lighter focus:!ring-1 focus:!ring-offset-0 focus:!ring-gray-dark ring-1 !ring-gray-dark !text-gray-dark"
                        />
                    </div>
                </div>
                <div>
                    <Text
                        tag="h3"
                        className="mb-4 border-b border-b-gray-lighter pb-4 text-xl lg:mb-6"
                    >
                        Residential Address
                    </Text>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="grid grid-cols-1 gap-x-3 gap-y-4 md:grid-cols-2">
                            <Input
                                type="text"
                                label="Country"
                                placeholder="Country"
                                labelClassName="!font-semibold lg:text-base"
                                {...register("residentialAddress.country")}
                                error={
                                    errors.residentialAddress?.country?.message
                                }
                            />
                            <Input
                                type="text"
                                label="City"
                                placeholder="City"
                                labelClassName="!font-semibold lg:text-base"
                                {...register("residentialAddress.city")}
                                error={errors.residentialAddress?.city?.message}
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-x-3 gap-y-4 md:grid-cols-2">
                            <Input
                                type="text"
                                label="Street Address"
                                placeholder="Street address"
                                labelClassName="!font-semibold lg:text-base"
                                {...register(
                                    "residentialAddress.streetAddress"
                                )}
                                error={
                                    errors.residentialAddress?.streetAddress
                                        ?.message
                                }
                            />
                            <Input
                                type="text"
                                label="State"
                                placeholder="State"
                                labelClassName="!font-semibold lg:text-base"
                                {...register("residentialAddress.state")}
                                error={
                                    errors.residentialAddress?.state?.message
                                }
                            />
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                            <Input
                                type="text"
                                label="Postal Code"
                                placeholder="Postal code"
                                labelClassName="!font-semibold lg:text-base"
                                {...register("residentialAddress.postalCode")}
                                error={
                                    errors.residentialAddress?.postalCode
                                        ?.message
                                }
                            />
                        </div>
                    </div>
                </div>

                <CreateListingFooter onBack={() => setStep(1)} />
            </form>
        </div>
    );
}
