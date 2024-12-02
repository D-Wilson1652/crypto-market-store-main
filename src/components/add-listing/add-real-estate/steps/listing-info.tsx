import { useState, useEffect } from "react";

// Jotai Import
import { useAtom, useSetAtom } from "jotai";
import {
    stepAtom,
    storeAtom,
} from "@/components/add-listing/add-real-estate/context";

// Zod Import
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ListingInfoSchema } from "@/validations/add-listing/listing-info-validation";
import type { ListingInfoSchemaType } from "@/validations/add-listing/listing-info-validation";

// Components Import
import FieldHelperText from "@/components/ui/form-fields/field-helper-text";
import CreateListingFooter from "@/components/footer/create-listing-footer";
import Textarea from "@/components/ui/form-fields/textarea";
import Text from "@/components/ui/typography/text";
import Counter from "@/components/ui/counter";
import Input from "@/components/ui/form-fields/input";
import SelectFilterBox from "@/components/ui/select-filter-box";

// Lib Imports
import { cn } from "@/lib/utils";

// Data Imports
import {
    propertyTypeOptions,
    propertySubTypeOptions,
} from "../data/real-estate-data";

// JSX Component
export default function ListingInfo() {
    // Jotai
    const setStep = useSetAtom(stepAtom);
    const [store, setStore] = useAtom(storeAtom);

    // State
    const propertyType = store.propertyType;
    const [selectedPropertyType, setSelectedPropertyType] = useState(
        propertyType
            ? {
                  label: propertyType,
                  value: propertyType,
                  disabled: false,
              }
            : propertyTypeOptions[0]
    );

    const propertySubType = store.propertySubType;
    const [selectedPropertySubTypeOptions, setSelectedPropertySubTypeOptions] =
        useState([
            {
                label: "Select Property First",
                value: "",
                disabled: true,
            },
        ]);
    const [selectedPropertySubType, setSelectedPropertySubType] = useState(
        propertySubType
            ? {
                  label: propertySubType,
                  value: propertySubType,
                  disabled: false,
              }
            : {
                  label: "Select Property First",
                  value: "",
                  disabled: true,
              }
    );

    useEffect(() => {
        if (selectedPropertyType.value) {
            const data = propertySubTypeOptions[selectedPropertyType.value];

            if (data) {
                const transformedData = data.map((item) => {
                    return {
                        label: item,
                        value: item,
                        disabled: false,
                    };
                });

                setSelectedPropertySubTypeOptions(transformedData);
            }
        }

        if (selectedPropertyType.disabled) {
            setSelectedPropertySubTypeOptions([
                {
                    label: "Select Property First",
                    value: "",
                    disabled: true,
                },
            ]);
        }
    }, [selectedPropertyType]);

    // Zod Form
    const {
        handleSubmit,
        register,
        watch,
        control,
        formState: { errors },
    } = useForm<ListingInfoSchemaType>({
        defaultValues: {
            title: store.title,
            description: store.description,
            price: store.price === 0 ? undefined : store.price,
            specifications: {
                ...store.specifications,
                pricePerSqft:
                    store.specifications.pricePerSqft === 0
                        ? undefined
                        : store.specifications.pricePerSqft,
                areaInSqft:
                    store.specifications.areaInSqft === 0
                        ? undefined
                        : store.specifications.areaInSqft,
            },
            propertyType: store.propertyType,
            propertySubType: store.propertySubType,
        },
        resolver: zodResolver(ListingInfoSchema),
    });

    function handleListingDetails(data: ListingInfoSchemaType) {
        // Extracting data from the form
        const { title, description, price, specifications } = data;

        setStore({
            ...store,
            title,
            description,
            // 2 decimal places
            price: parseFloat(price.toFixed(2)),
            specifications: {
                ...specifications,
                pricePerSqft: parseFloat(
                    specifications.pricePerSqft.toFixed(2)
                ),
                areaInSqft: parseFloat(specifications.areaInSqft.toFixed(2)),
            },
            propertyType: data.propertyType,
            propertySubType: data.propertySubType,
        });
        console.log(data);
        setStep(3);
    }

    return (
        <div className="w-full md:w-[648px] xl:w-[748px] 2xl:w-[848px]">
            <form
                noValidate
                onSubmit={handleSubmit((data) => handleListingDetails(data))}
                className="grid grid-cols-1 gap-8 xl:gap-12"
            >
                <div>
                    <Text
                        tag="h3"
                        className="mb-4 border-b border-b-gray-lighter pb-4 text-xl lg:mb-6"
                    >
                        Real Estate Information
                    </Text>
                    <div className="grid grid-cols-1">
                        <Textarea
                            variant="outline"
                            label={"What's the title of your real estate?"}
                            labelClassName="!font-semibold lg:text-base"
                            textareaClassName="h-[72px] lg:h-20 w-full resize-none lg:rounded-xl"
                            maxLength={50}
                            {...register("title")}
                            error={errors.title?.message}
                        />
                        <p className="mt-1 text-sm font-normal lg:mt-2 lg:text-base">
                            {watch("title")?.length ?? 0}
                            /50
                        </p>
                    </div>

                    <div className="grid grid-cols-1">
                        <Textarea
                            variant="outline"
                            className="mt-6"
                            label={"Describe your real estate"}
                            maxLength={700}
                            labelClassName="!font-semibold lg:text-base"
                            textareaClassName="h-[72px] lg:h-32 xl:h-40 w-full resize-none lg:rounded-xl"
                            {...register("description")}
                            error={errors.description?.message}
                        />
                        <p className="mt-1 text-sm font-normal lg:mt-2 lg:text-base">
                            {watch("description")?.length ?? 0}
                            /700
                        </p>
                    </div>

                    <div className="grid grid-cols-1">
                        <Input
                            variant="outline"
                            placeholder="Enter the price"
                            label="Enter the price of your real estate"
                            className="mt-6"
                            type="number"
                            labelClassName="!font-semibold lg:text-base"
                            {...register("price", {
                                valueAsNumber: true,
                            })}
                            error={errors.price?.message}
                            startIcon={<span className="text-gray">$</span>}
                        />
                    </div>
                </div>

                <div>
                    <Text
                        tag="h3"
                        className="mb-4 border-b border-b-gray-lighter pb-4 text-xl lg:mb-6"
                    >
                        Specifications
                    </Text>

                    <div className="grid grid-cols-1">
                        <Input
                            variant="outline"
                            placeholder="Enter the price per sqft"
                            label="Price per sqft"
                            type="number"
                            labelClassName="!font-semibold lg:text-base"
                            {...register("specifications.pricePerSqft", {
                                valueAsNumber: true,
                            })}
                            error={errors.specifications?.pricePerSqft?.message}
                            startIcon={<span className="text-gray">$</span>}
                        />

                        <Input
                            variant="outline"
                            placeholder="Enter the area in sqft"
                            label="Area in sqft"
                            className="mt-6"
                            type="number"
                            labelClassName="!font-semibold lg:text-base"
                            {...register("specifications.areaInSqft", {
                                valueAsNumber: true,
                            })}
                            error={errors.specifications?.areaInSqft?.message}
                        />

                        <Controller
                            name="specifications.numOfBeds"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <div className="card-gradient flex items-center justify-between rounded-lg border border-gray-lighter p-6 lg:rounded-xl lg:p-8 mt-6">
                                    <Text className="text-base !font-semibold">
                                        Bedrooms
                                    </Text>
                                    <Counter
                                        count={value ? value : 0}
                                        onCount={onChange}
                                        countBy={1}
                                        buttonClassName="rounded-lg !h-6 !w-6 !p-1 sm:!h-9 sm:!w-9"
                                    />
                                </div>
                            )}
                        />
                        <FieldHelperText className="text-xs font-normal text-red">
                            {errors.specifications?.numOfBeds?.message}
                        </FieldHelperText>

                        <Controller
                            name="specifications.numOfBaths"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <div className="card-gradient flex items-center justify-between rounded-lg border border-gray-lighter p-6 lg:rounded-xl lg:p-8 mt-6">
                                    <Text className="text-base !font-semibold">
                                        Bathrooms
                                    </Text>
                                    <Counter
                                        count={value ? value : 0}
                                        onCount={onChange}
                                        countBy={1}
                                        buttonClassName="rounded-lg !h-6 !w-6 !p-1 sm:!h-9 sm:!w-9"
                                    />
                                </div>
                            )}
                        />
                        <FieldHelperText className="text-xs font-normal text-red">
                            {errors.specifications?.numOfBaths?.message}
                        </FieldHelperText>
                    </div>
                </div>

                <div className="pb-32">
                    <Text
                        tag="h3"
                        className="mb-4 border-b border-b-gray-lighter pb-4 text-xl lg:mb-6"
                    >
                        Property Type
                    </Text>

                    <div className="grid grid-cols-1 mb-6">
                        <Controller
                            name="propertyType"
                            control={control}
                            render={({ field }) => (
                                <SelectFilterBox
                                    {...field}
                                    value={selectedPropertyType}
                                    options={propertyTypeOptions}
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    onChange={(data: any) => {
                                        setSelectedPropertyType(data);
                                        field.onChange(data.value);
                                    }}
                                    labelClassName="mb-1.5 !text-sm lg:!text-base !font-semibold"
                                    inputClassName={cn(
                                        errors.propertyType?.message &&
                                            "!border-red"
                                    )}
                                    clearable={
                                        selectedPropertyType.disabled
                                            ? false
                                            : true
                                    }
                                    onClearClick={() => {
                                        setSelectedPropertyType(
                                            propertyTypeOptions[0]
                                        );
                                        field.onChange("");
                                    }}
                                />
                            )}
                        />

                        <FieldHelperText className="text-xs font-normal text-red mt-px">
                            {errors.propertyType?.message}
                        </FieldHelperText>
                    </div>

                    <div className="grid grid-cols-1">
                        <Controller
                            name="propertySubType"
                            control={control}
                            render={({ field }) => (
                                <SelectFilterBox
                                    {...field}
                                    value={selectedPropertySubType}
                                    options={selectedPropertySubTypeOptions}
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    onChange={(data: any) => {
                                        setSelectedPropertySubType(data);
                                        field.onChange(data.value);
                                    }}
                                    labelClassName="mb-1.5 !text-sm lg:!text-base !font-semibold"
                                    inputClassName={cn(
                                        errors.propertySubType?.message &&
                                            "border-red"
                                    )}
                                    clearable={
                                        selectedPropertySubType.disabled
                                            ? false
                                            : true
                                    }
                                    onClearClick={() => {
                                        setSelectedPropertySubType(
                                            selectedPropertySubTypeOptions[0]
                                        );
                                        field.onChange("");
                                    }}
                                />
                            )}
                        />

                        <FieldHelperText className="text-xs font-normal text-red mt-px">
                            {errors.propertySubType?.message}
                        </FieldHelperText>
                    </div>
                </div>

                <CreateListingFooter onBack={() => setStep(1)} />
            </form>
        </div>
    );
}
