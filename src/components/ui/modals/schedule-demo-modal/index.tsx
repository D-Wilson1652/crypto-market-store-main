import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { addMinutes, setHours, setMinutes } from "date-fns";
// Zod Import
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { EmailSchema } from "@/validations/common/email-validation";
import { PhoneSchema } from "@/validations/common/phone-validation";

// Components Import
import Text from "@/components/ui/typography/text";
import ActionIcon from "@/components/ui/action-icon";
import Button from "@/components/ui/button";
import Input from "@/components/ui/form-fields/input";
import PhoneNumber from "@/components/ui/form-fields/phone-number";
import DateTime from "@/components/ui/form-fields/date-time-picker";
import FieldHelperText from "@/components/ui/form-fields/field-helper-text";
import SelectBox from "@/components/ui/select-box";
import { useModal } from "@/components/modals/context";

// Styles
const styles = {
    gapBetween: "mb-4",
    labelClassName: "!font-normal !text-xs !text-gray-400",
};
const { gapBetween, labelClassName } = styles;

// Define Schema
const scheduleDemoSchema = z.object({
    email: EmailSchema.shape.email,
    phoneNumber: PhoneSchema.shape.phone,
    meetinDate: z
        .date({
            required_error: "Meeting date is required",
            message: "Meeting date is required",
        })
        .min(new Date(), "Meeting date should be in the future"),
    category: z
        .string({
            required_error: "Category is required",
            message: "Category is required",
        })
        .min(1, "Category is required"),
});

type ScheduleDemoSchemaType = z.infer<typeof scheduleDemoSchema>;

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

export default function ScheduleDemoListing() {
    const { closeModal } = useModal();

    // State
    const [state, setState] = useState(false);
    const [selected, setSelected] = useState(categoryOptions[0]);
    const [step, setStep] = useState(1);

    // Form
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<ScheduleDemoSchemaType>({
        resolver: zodResolver(scheduleDemoSchema),
    });

    // Handle Feedback
    async function handleFeedback(data: ScheduleDemoSchemaType) {
        console.log(data);

        setStep(2);
    }

    return (
        <div className="mx-auto w-full max-w-full overflow-hidden rounded-xl bg-white p-12 xs:w-[480px] sm:w-[520px]">
            {step === 1 && (
                <>
                    <div className="flex items-center justify-between">
                        <Text
                            tag="h3"
                            className="text-xl leading-8 md:!text-xl"
                        >
                            Schedule a demo
                        </Text>

                        <ActionIcon
                            size="sm"
                            variant="outline"
                            className="border-none !p-0 focus:!ring-0"
                            onClick={closeModal}
                        >
                            <XMarkIcon className="h-6 w-6" />
                        </ActionIcon>
                    </div>

                    <Text className="mt-2 !text-sm !text-gray">
                        Fill out the form below to schedule a demo.
                    </Text>

                    <form
                        noValidate
                        onSubmit={handleSubmit((data) => handleFeedback(data))}
                        className="mt-6"
                    >
                        <div className="mb-4">
                            <Controller
                                name="category"
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
                                        labelClassName={clsx(
                                            labelClassName,
                                            "mb-2"
                                        )}
                                        buttonClassName={clsx(
                                            "h-10 lg:h-11 2xl:h-12",
                                            errors.category?.message &&
                                                "border-red"
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
                                {errors.category?.message}
                            </FieldHelperText>
                        </div>

                        <Input
                            type="text"
                            label="Email Address"
                            labelClassName={labelClassName}
                            placeholder="Enter your email address"
                            className={gapBetween}
                            error={errors?.email?.message}
                            required
                            {...register("email")}
                        />

                        <Controller
                            name="phoneNumber"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <PhoneNumber
                                    country="gb"
                                    value={value}
                                    onChange={onChange}
                                    label="Phone Number"
                                    error={errors?.phoneNumber?.message}
                                    buttonClassName="vendor-contact-phone-input"
                                    labelClassName={labelClassName}
                                    inputClassName="!pl-14"
                                    dropdownClassName="!z-10"
                                    className={gapBetween}
                                />
                            )}
                        />

                        <div>
                            <Controller
                                name="meetinDate"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <DateTime
                                        onFocus={(e) => e.target.blur()}
                                        label="Meeting Date"
                                        selected={value}
                                        onChange={onChange}
                                        showMonthDropdown
                                        showYearDropdown
                                        yearDropdownItemNumber={30}
                                        scrollableYearDropdown
                                        showTimeSelect
                                        selectsRange={false}
                                        timeIntervals={60}
                                        minDate={new Date()}
                                        minTime={
                                            value &&
                                            value.getDate() ===
                                                new Date().getDate()
                                                ? addMinutes(new Date(), 1)
                                                : setHours(
                                                      setMinutes(new Date(), 0),
                                                      0
                                                  )
                                        }
                                        maxTime={setHours(
                                            setMinutes(new Date(), 59),
                                            23
                                        )}
                                        dateFormat="dd/MM/yyyy h:mm aa"
                                        labelClassName={labelClassName}
                                        placeholderText="Select a date and time"
                                        inputClassName={clsx(
                                            state &&
                                                "!border !border-gray-dark !ring-[1px] !ring-gray-900/20",
                                            errors.meetinDate
                                                ? "!border-red"
                                                : "!border-gray-lighter"
                                        )}
                                        onCalendarOpen={() => setState(true)}
                                        onCalendarClose={() => setState(false)}
                                    />
                                )}
                            />

                            <FieldHelperText className="text-xs font-normal text-red">
                                {errors.meetinDate?.message}
                            </FieldHelperText>
                        </div>

                        <div className="mt-12 flex">
                            <Button
                                type="submit"
                                size="lg"
                                variant="solid"
                                className="ml-auto !w-24 !font-bold"
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </>
            )}

            {step === 2 && (
                <div className="flex flex-col items-center justify-center">
                    <Text tag="h3" className="text-xl">
                        Thank you for scheduling a demo!
                    </Text>

                    <Text className="mt-4 !text-sm !text-gray text-center">
                        You scheduled a demo for {selected.label} category on{" "}
                        {new Date().toLocaleString()}.
                    </Text>

                    <Button
                        size="lg"
                        variant="solid"
                        className="mt-6 !w-36 !font-bold"
                        onClick={closeModal}
                    >
                        Close
                    </Button>
                </div>
            )}
        </div>
    );
}
