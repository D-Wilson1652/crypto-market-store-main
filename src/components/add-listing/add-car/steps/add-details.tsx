import { useState, useEffect } from "react";

// Zod Imports
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DetailsSchema } from "@/validations/add-listing/add-car/add-car-validation";
import { DetailsSchemaType } from "@/validations/add-listing/add-car/add-car-validation";

// Jotai Imports
import { useAtom, useSetAtom } from "jotai";
import { storeAtom, stepAtom } from "@/components/add-listing/add-car/context";

// Components Imports
import CreateListingFooter from "@/components/footer/create-listing-footer";
import Input from "@/components/ui/form-fields/input";
import Text from "@/components/ui/typography/text";
import SelectBox from "@/components/ui/select-box";
import SelectFilterBox from "@/components/ui/select-filter-box";
import FieldHelperText from "@/components/ui/form-fields/field-helper-text";

// Data Imports
import {
    carConditionOptions,
    carColorOptions,
    carTypeOptions,
    carDriveOptions,
    carDriveTrainOptions,
    carEngineOptions,
    carFuelTypeOptions,
    carGearBoxOptions,
    carInteriorColorOptions,
    carMileageTypeOptions,
    carPowerTypeOptions,
    carMakeOptions,
    carModelOptions,
} from "../data/car-details-data";

// Lib Imports
import { cn } from "@/lib/utils";

export default function AddDetails() {
    // Jotai
    const setStep = useSetAtom(stepAtom);
    const [store, setStore] = useAtom(storeAtom);

    // State
    const carCondition = store.carDetails.carCondition;
    const [selectedCarCondition, setSelectedCarCondition] = useState(
        carCondition
            ? {
                  label: carCondition,
                  value: carCondition,
                  disabled: false,
              }
            : carConditionOptions[0]
    );

    const carColor = store.carDetails.color;
    const [selectedCarColor, setSelectedCarColor] = useState(
        carColor
            ? {
                  label: carColor,
                  value: carColor,
                  disabled: false,
              }
            : carColorOptions[0]
    );

    const carType = store.carDetails.carType;
    const [selectedCarType, setSelectedCarType] = useState(
        carType
            ? {
                  label: carType,
                  value: carType,
                  disabled: false,
              }
            : carTypeOptions[0]
    );

    const carDrive = store.carDetails.drive;
    const [selectedCarDrive, setSelectedCarDrive] = useState(
        carDrive
            ? {
                  label: carDrive,
                  value: carDrive,
                  disabled: false,
              }
            : carDriveOptions[0]
    );

    const carDriveTrain = store.carDetails.driveTrain;
    const [selectedCarDriveTrain, setSelectedCarDriveTrain] = useState(
        carDriveTrain
            ? {
                  label: carDriveTrain,
                  value: carDriveTrain,
                  disabled: false,
              }
            : carDriveTrainOptions[0]
    );

    const carEngine = store.carDetails.engine;
    const [selectedCarEngine, setSelectedCarEngine] = useState(
        carEngine
            ? {
                  label: carEngine,
                  value: carEngine,
                  disabled: false,
              }
            : carEngineOptions[0]
    );

    const carFuelType = store.carDetails.fuelType;
    const [selectedCarFuelType, setSelectedCarFuelType] = useState(
        carFuelType
            ? {
                  label: carFuelType,
                  value: carFuelType,
                  disabled: false,
              }
            : carFuelTypeOptions[0]
    );

    const carGearBox = store.carDetails.gearBox;
    const [selectedCarGearBox, setSelectedCarGearBox] = useState(
        carGearBox
            ? {
                  label: carGearBox,
                  value: carGearBox,
                  disabled: false,
              }
            : carGearBoxOptions[0]
    );

    const carInteriorColor = store.carDetails.interiorColor;
    const [selectedCarInteriorColor, setSelectedCarInteriorColor] = useState(
        carInteriorColor
            ? {
                  label: carInteriorColor,
                  value: carInteriorColor,
                  disabled: false,
              }
            : carInteriorColorOptions[0]
    );

    const carMileageType = store.carDetails.mileage.mileageType;
    const [selectedCarMileageType, setSelectedCarMileageType] = useState(
        carMileageType
            ? {
                  label: carMileageType,
                  value: carMileageType,
                  disabled: false,
              }
            : carMileageTypeOptions[0]
    );

    const carPowerType = store.carDetails.carPower.powerType;
    const [selectedCarPowerType, setSelectedCarPowerType] = useState(
        carPowerType
            ? {
                  label: carPowerType,
                  value: carPowerType,
                  disabled: false,
              }
            : carPowerTypeOptions[0]
    );

    const carMake = store.make;
    const [selectedCarMake, setSelectedCarMake] = useState(
        carMake
            ? {
                  label: carMake,
                  value: carMake,
                  disabled: false,
              }
            : carMakeOptions[0]
    );

    const carModel = store.model;
    const [selectedCarModelOptions, setSelectedCarModelOptions] = useState([
        {
            label: "Select Make First",
            value: "",
            disabled: true,
        },
    ]);
    const [selectedCarModel, setSelectedCarModel] = useState(
        carModel
            ? {
                  label: carModel,
                  value: carModel,
                  disabled: false,
              }
            : {
                  label: "Select Model",
                  value: "",
                  disabled: true,
              }
    );

    // Effects
    useEffect(() => {
        if (selectedCarMake.value) {
            const data = carModelOptions[selectedCarMake.value];

            if (data) {
                const transformedData = data.map((item) => {
                    return {
                        label: item,
                        value: item,
                        disabled: false,
                    };
                });

                setSelectedCarModelOptions(transformedData);
            }
        }

        if (selectedCarMake.disabled) {
            setSelectedCarModelOptions([
                {
                    label: "Select Make First",
                    value: "",
                    disabled: true,
                },
            ]);
        }
    }, [selectedCarMake]);

    // Form
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = useForm<DetailsSchemaType>({
        defaultValues: {
            model: store.model,
            make: store.make,
            carDetails: {
                ...store.carDetails,
                carPower: {
                    power:
                        store.carDetails.carPower.power === 0
                            ? undefined
                            : store.carDetails.carPower.power,
                    powerType: store.carDetails.carPower.powerType,
                },
                mileage: {
                    mileage:
                        store.carDetails.mileage.mileage === 0
                            ? undefined
                            : store.carDetails.mileage.mileage,
                    mileageType: store.carDetails.mileage.mileageType,
                },
            },
        },
        resolver: zodResolver(DetailsSchema),
    });

    // Functions
    function handleDetails(data: DetailsSchemaType) {
        // Extracting data from the form
        const { model, make, carDetails } = data;

        setStore({
            ...store,
            model,
            make,
            carDetails: {
                ...carDetails,
                carPower: carDetails.carPower,
                mileage: carDetails.mileage,
            },
        });

        console.log(data);

        setStep(5);
    }

    return (
        <div className="w-full md:w-[648px] xl:w-[748px] 2xl:w-[848px]">
            <Text
                tag="h3"
                className="mb-4 border-b border-b-gray-lighter pb-4 text-xl lg:mb-6"
            >
                Car Details
            </Text>
            <form
                noValidate
                onSubmit={handleSubmit((data) => handleDetails(data))}
            >
                <div className="grid grid-cols-1 gap-4 pb-24">
                    <div className="gap-2 lg:grid lg:items-center xl:grid-cols-3">
                        <Text className="mb-2 font-semibold lg:mb-0">
                            Model
                        </Text>

                        <div className="col-span-2">
                            <Controller
                                name="model"
                                control={control}
                                render={({ field }) => (
                                    <SelectFilterBox
                                        {...field}
                                        value={selectedCarMake}
                                        options={carMakeOptions}
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        onChange={(data: any) => {
                                            setSelectedCarMake(data);
                                            field.onChange(data.value);
                                        }}
                                        labelClassName="mb-1.5 !text-sm lg:!text-base !font-semibold"
                                        inputClassName={cn(
                                            errors.model?.message &&
                                                "border-red"
                                        )}
                                        clearable={
                                            selectedCarMake.disabled
                                                ? false
                                                : true
                                        }
                                        onClearClick={() => {
                                            setSelectedCarMake(
                                                carMakeOptions[0]
                                            );
                                            field.onChange("");
                                        }}
                                    />
                                )}
                            />

                            <FieldHelperText className="text-xs font-normal text-red mt-px">
                                {errors.model?.message}
                            </FieldHelperText>
                        </div>
                    </div>
                    <div className="gap-2 lg:grid lg:items-center xl:grid-cols-3">
                        <Text className="mb-2 font-semibold lg:mb-0">Make</Text>

                        <div className="col-span-2">
                            <Controller
                                name="make"
                                control={control}
                                render={({ field }) => (
                                    <SelectFilterBox
                                        {...field}
                                        value={selectedCarModel}
                                        options={selectedCarModelOptions}
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        onChange={(data: any) => {
                                            setSelectedCarModel(data);
                                            field.onChange(data.value);
                                        }}
                                        labelClassName="mb-1.5 !text-sm lg:!text-base !font-semibold"
                                        inputClassName={cn(
                                            errors.make?.message && "border-red"
                                        )}
                                        clearable={
                                            selectedCarModel.disabled
                                                ? false
                                                : true
                                        }
                                        onClearClick={() => {
                                            setSelectedCarModel(
                                                selectedCarModelOptions[0]
                                            );
                                            field.onChange("");
                                        }}
                                    />
                                )}
                            />

                            <FieldHelperText className="text-xs font-normal text-red mt-px">
                                {errors.make?.message}
                            </FieldHelperText>
                        </div>
                    </div>
                    <div className="gap-2 lg:grid lg:items-center xl:grid-cols-3">
                        <Text className="mb-2 font-semibold lg:mb-0">Year</Text>

                        <div className="col-span-2">
                            <Input
                                type="text"
                                placeholder="e.g. 2021"
                                inputClassName="!h-10 lg:!h-12"
                                maxLength={4}
                                {...register("carDetails.year")}
                                error={errors.carDetails?.year?.message}
                            />
                        </div>
                    </div>
                    <div className="gap-2 lg:grid lg:items-center xl:grid-cols-3">
                        <Text className="mb-2 font-semibold lg:mb-0">
                            Gearbox
                        </Text>

                        <div className="col-span-2">
                            <Controller
                                name="carDetails.gearBox"
                                control={control}
                                render={({ field }) => (
                                    <SelectFilterBox
                                        {...field}
                                        value={selectedCarGearBox}
                                        options={carGearBoxOptions}
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        onChange={(data: any) => {
                                            setSelectedCarGearBox(data);
                                            field.onChange(data.value);
                                        }}
                                        labelClassName="mb-1.5 !text-sm lg:!text-base !font-semibold"
                                        inputClassName={cn(
                                            errors.carDetails?.gearBox
                                                ?.message && "border-red"
                                        )}
                                        clearable={
                                            selectedCarGearBox.disabled
                                                ? false
                                                : true
                                        }
                                        onClearClick={() => {
                                            setSelectedCarGearBox(
                                                carGearBoxOptions[0]
                                            );
                                            field.onChange("");
                                        }}
                                    />
                                )}
                            />

                            <FieldHelperText className="text-xs font-normal text-red mt-px">
                                {errors.carDetails?.gearBox?.message}
                            </FieldHelperText>
                        </div>
                    </div>
                    <div className="gap-2 lg:grid lg:items-center xl:grid-cols-3">
                        <Text className="mb-2 font-semibold lg:mb-0">
                            Fuel Type
                        </Text>

                        <div className="col-span-2">
                            <Controller
                                name="carDetails.fuelType"
                                control={control}
                                render={({ field }) => (
                                    <SelectBox
                                        {...field}
                                        value={selectedCarFuelType}
                                        options={carFuelTypeOptions}
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        onChange={(data: any) => {
                                            setSelectedCarFuelType(data);
                                            field.onChange(data.value);
                                        }}
                                        labelClassName="mb-1.5 !text-sm lg:!text-base !font-semibold"
                                        buttonClassName={cn(
                                            "h-10 lg:h-11 2xl:h-12",
                                            errors.carDetails?.fuelType
                                                ?.message && "border-red"
                                        )}
                                        clearable={
                                            selectedCarFuelType.disabled
                                                ? false
                                                : true
                                        }
                                        onClearClick={() => {
                                            setSelectedCarFuelType(
                                                carFuelTypeOptions[0]
                                            );
                                            field.onChange("");
                                        }}
                                    />
                                )}
                            />

                            <FieldHelperText className="text-xs font-normal text-red mt-px">
                                {errors.carDetails?.fuelType?.message}
                            </FieldHelperText>
                        </div>
                    </div>
                    <div className="gap-2 lg:grid lg:items-center xl:grid-cols-3">
                        <Text className="mb-2 font-semibold lg:mb-0">
                            Car Type
                        </Text>

                        <div className="col-span-2">
                            <Controller
                                name="carDetails.carType"
                                control={control}
                                render={({ field }) => (
                                    <SelectBox
                                        {...field}
                                        value={selectedCarType}
                                        options={carTypeOptions}
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        onChange={(data: any) => {
                                            setSelectedCarType(data);
                                            field.onChange(data.value);
                                        }}
                                        labelClassName="mb-1.5 !text-sm lg:!text-base !font-semibold"
                                        buttonClassName={cn(
                                            "h-10 lg:h-11 2xl:h-12",
                                            errors.carDetails?.carType
                                                ?.message && "border-red"
                                        )}
                                        clearable={
                                            selectedCarType.disabled
                                                ? false
                                                : true
                                        }
                                        onClearClick={() => {
                                            setSelectedCarType(
                                                carTypeOptions[0]
                                            );
                                            field.onChange("");
                                        }}
                                    />
                                )}
                            />

                            <FieldHelperText className="text-xs font-normal text-red mt-px">
                                {errors.carDetails?.carType?.message}
                            </FieldHelperText>
                        </div>
                    </div>
                    <div className="gap-2 lg:grid lg:items-center xl:grid-cols-3">
                        <Text className="mb-2 font-semibold lg:mb-0">
                            Car Condition
                        </Text>
                        <div className="col-span-2">
                            <Controller
                                name="carDetails.carCondition"
                                control={control}
                                render={({ field }) => (
                                    <SelectBox
                                        {...field}
                                        value={selectedCarCondition}
                                        options={carConditionOptions}
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        onChange={(data: any) => {
                                            setSelectedCarCondition(data);
                                            field.onChange(data.value);
                                        }}
                                        labelClassName="mb-1.5 !text-sm lg:!text-base !font-semibold"
                                        buttonClassName={cn(
                                            "h-10 lg:h-11 2xl:h-12",
                                            errors.carDetails?.carCondition
                                                ?.message && "border-red"
                                        )}
                                        clearable={
                                            selectedCarCondition.disabled
                                                ? false
                                                : true
                                        }
                                        onClearClick={() => {
                                            setSelectedCarCondition(
                                                carConditionOptions[0]
                                            );
                                            field.onChange("");
                                        }}
                                    />
                                )}
                            />

                            <FieldHelperText className="text-xs font-normal text-red mt-px">
                                {errors.carDetails?.carCondition?.message}
                            </FieldHelperText>
                        </div>
                    </div>
                    <div className="gap-2 lg:grid lg:items-center xl:grid-cols-3">
                        <Text className="mb-2 font-semibold lg:mb-0">
                            Color
                        </Text>

                        <div className="col-span-2">
                            <Controller
                                name="carDetails.color"
                                control={control}
                                render={({ field }) => (
                                    <SelectFilterBox
                                        {...field}
                                        value={selectedCarColor}
                                        options={carColorOptions}
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        onChange={(data: any) => {
                                            setSelectedCarColor(data);
                                            field.onChange(data.value);
                                        }}
                                        labelClassName="mb-1.5 !text-sm lg:!text-base !font-semibold"
                                        inputClassName={cn(
                                            errors.carDetails?.color?.message &&
                                                "border-red"
                                        )}
                                        clearable={
                                            selectedCarColor.disabled
                                                ? false
                                                : true
                                        }
                                        onClearClick={() => {
                                            setSelectedCarColor(
                                                carColorOptions[0]
                                            );
                                            field.onChange("");
                                        }}
                                    />
                                )}
                            />

                            <FieldHelperText className="text-xs font-normal text-red mt-px">
                                {errors.carDetails?.color?.message}
                            </FieldHelperText>
                        </div>
                    </div>
                    <div className="gap-2 lg:grid lg:items-center xl:grid-cols-3">
                        <Text className="mb-2 font-semibold lg:mb-0">
                            Drive
                        </Text>

                        <div className="col-span-2">
                            <Controller
                                name="carDetails.drive"
                                control={control}
                                render={({ field }) => (
                                    <SelectBox
                                        {...field}
                                        value={selectedCarDrive}
                                        options={carDriveOptions}
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        onChange={(data: any) => {
                                            setSelectedCarDrive(data);
                                            field.onChange(data.value);
                                        }}
                                        labelClassName="mb-1.5 !text-sm lg:!text-base !font-semibold"
                                        buttonClassName={cn(
                                            "h-10 lg:h-11 2xl:h-12",
                                            errors.carDetails?.drive?.message &&
                                                "border-red"
                                        )}
                                        clearable={
                                            selectedCarDrive.disabled
                                                ? false
                                                : true
                                        }
                                        onClearClick={() => {
                                            setSelectedCarDrive(
                                                carDriveOptions[0]
                                            );
                                            field.onChange("");
                                        }}
                                    />
                                )}
                            />

                            <FieldHelperText className="text-xs font-normal text-red mt-px">
                                {errors.carDetails?.drive?.message}
                            </FieldHelperText>
                        </div>
                    </div>
                    <div className="gap-2 lg:grid lg:items-center xl:grid-cols-3">
                        <Text className="mb-2 font-semibold lg:mb-0">
                            Engine
                        </Text>

                        <div className="col-span-2">
                            <Controller
                                name="carDetails.engine"
                                control={control}
                                render={({ field }) => (
                                    <SelectFilterBox
                                        {...field}
                                        value={selectedCarEngine}
                                        options={carEngineOptions}
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        onChange={(data: any) => {
                                            setSelectedCarEngine(data);
                                            field.onChange(data.value);
                                        }}
                                        labelClassName="mb-1.5 !text-sm lg:!text-base !font-semibold"
                                        inputClassName={cn(
                                            errors.carDetails?.engine
                                                ?.message && "border-red"
                                        )}
                                        clearable={
                                            selectedCarEngine.disabled
                                                ? false
                                                : true
                                        }
                                        onClearClick={() => {
                                            setSelectedCarEngine(
                                                carEngineOptions[0]
                                            );
                                            field.onChange("");
                                        }}
                                    />
                                )}
                            />

                            <FieldHelperText className="text-xs font-normal text-red mt-px">
                                {errors.carDetails?.engine?.message}
                            </FieldHelperText>
                        </div>
                    </div>
                    <div className="gap-2 lg:grid lg:items-center xl:grid-cols-3">
                        <Text className="mb-2 font-semibold lg:mb-0">
                            Drive Train
                        </Text>

                        <div className="col-span-2">
                            <Controller
                                name="carDetails.driveTrain"
                                control={control}
                                render={({ field }) => (
                                    <SelectFilterBox
                                        {...field}
                                        value={selectedCarDriveTrain}
                                        options={carDriveTrainOptions}
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        onChange={(data: any) => {
                                            setSelectedCarDriveTrain(data);
                                            field.onChange(data.value);
                                        }}
                                        labelClassName="mb-1.5 !text-sm lg:!text-base !font-semibold"
                                        inputClassName={cn(
                                            errors.carDetails?.driveTrain
                                                ?.message && "border-red"
                                        )}
                                        clearable={
                                            selectedCarDriveTrain.disabled
                                                ? false
                                                : true
                                        }
                                        onClearClick={() => {
                                            setSelectedCarDriveTrain(
                                                carDriveTrainOptions[0]
                                            );
                                            field.onChange("");
                                        }}
                                    />
                                )}
                            />

                            <FieldHelperText className="text-xs font-normal text-red mt-px">
                                {errors.carDetails?.driveTrain?.message}
                            </FieldHelperText>
                        </div>
                    </div>
                    <div className="gap-2 lg:grid lg:items-center xl:grid-cols-3">
                        <Text className="mb-2 font-semibold lg:mb-0">
                            Interior Color
                        </Text>

                        <div className="col-span-2">
                            <Controller
                                name="carDetails.interiorColor"
                                control={control}
                                render={({ field }) => (
                                    <SelectFilterBox
                                        {...field}
                                        value={selectedCarInteriorColor}
                                        options={carInteriorColorOptions}
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        onChange={(data: any) => {
                                            setSelectedCarInteriorColor(data);
                                            field.onChange(data.value);
                                        }}
                                        labelClassName="mb-1.5 !text-sm lg:!text-base !font-semibold"
                                        inputClassName={cn(
                                            errors.carDetails?.interiorColor
                                                ?.message && "border-red"
                                        )}
                                        clearable={
                                            selectedCarInteriorColor.disabled
                                                ? false
                                                : true
                                        }
                                        onClearClick={() => {
                                            setSelectedCarInteriorColor(
                                                carInteriorColorOptions[0]
                                            );
                                            field.onChange("");
                                        }}
                                    />
                                )}
                            />

                            <FieldHelperText className="text-xs font-normal text-red mt-px">
                                {errors.carDetails?.interiorColor?.message}
                            </FieldHelperText>
                        </div>
                    </div>
                    <div className="gap-2 lg:grid lg:items-center xl:grid-cols-3">
                        <Text className="mb-2 font-semibold lg:mb-0">
                            Power
                        </Text>

                        <div className="flex items-center col-span-2">
                            <Input
                                type="number"
                                placeholder="Power"
                                className="w-full"
                                inputClassName="!h-10 lg:!h-12 !rounded-tr-none !rounded-br-none"
                                {...register("carDetails.carPower.power", {
                                    valueAsNumber: true,
                                })}
                                error={
                                    errors.carDetails?.carPower?.power?.message
                                }
                            />

                            <div>
                                <Controller
                                    name="carDetails.carPower.powerType"
                                    control={control}
                                    render={({ field }) => (
                                        <SelectBox
                                            {...field}
                                            value={selectedCarPowerType}
                                            options={carPowerTypeOptions}
                                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                            onChange={(data: any) => {
                                                setSelectedCarPowerType(data);
                                                field.onChange(data.value);
                                            }}
                                            labelClassName="ml-2 !text-sm lg:!text-base !font-semibold"
                                            buttonClassName={cn(
                                                "h-10 lg:h-11 2xl:h-12 min-w-40 !rounded-tl-none !rounded-bl-none",
                                                errors.carDetails?.carPower
                                                    ?.powerType?.message &&
                                                    "border-red"
                                            )}
                                            clearable={
                                                selectedCarPowerType.disabled
                                                    ? false
                                                    : true
                                            }
                                            onClearClick={() => {
                                                setSelectedCarPowerType(
                                                    carPowerTypeOptions[0]
                                                );
                                                field.onChange("");
                                            }}
                                        />
                                    )}
                                />

                                <FieldHelperText className="text-xs font-normal text-red mt-px">
                                    {
                                        errors.carDetails?.carPower?.powerType
                                            ?.message
                                    }
                                </FieldHelperText>
                            </div>
                        </div>
                    </div>
                    <div className="gap-2 lg:grid lg:items-center xl:grid-cols-3">
                        <Text className="mb-2 font-semibold lg:mb-0">
                            Mileage
                        </Text>

                        <div className="flex items-center col-span-2">
                            <Input
                                type="number"
                                placeholder="Mileage"
                                className="w-full"
                                inputClassName="!h-10 lg:!h-12 !rounded-tr-none !rounded-br-none"
                                {...register("carDetails.mileage.mileage", {
                                    valueAsNumber: true,
                                })}
                                error={
                                    errors.carDetails?.mileage?.mileage?.message
                                }
                            />

                            <div>
                                <Controller
                                    name="carDetails.mileage.mileageType"
                                    control={control}
                                    render={({ field }) => (
                                        <SelectBox
                                            {...field}
                                            value={selectedCarMileageType}
                                            options={carMileageTypeOptions}
                                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                            onChange={(data: any) => {
                                                setSelectedCarMileageType(data);
                                                field.onChange(data.value);
                                            }}
                                            labelClassName="ml-2 !text-sm lg:!text-base !font-semibold"
                                            buttonClassName={cn(
                                                "h-10 lg:h-11 2xl:h-12 min-w-40 !rounded-tl-none !rounded-bl-none",
                                                errors.carDetails?.mileage
                                                    ?.mileageType?.message &&
                                                    "border-red"
                                            )}
                                            clearable={
                                                selectedCarMileageType.disabled
                                                    ? false
                                                    : true
                                            }
                                            onClearClick={() => {
                                                setSelectedCarMileageType(
                                                    carMileageTypeOptions[0]
                                                );
                                                field.onChange("");
                                            }}
                                        />
                                    )}
                                />

                                <FieldHelperText className="text-xs font-normal text-red mt-px">
                                    {
                                        errors.carDetails?.mileage?.mileageType
                                            ?.message
                                    }
                                </FieldHelperText>
                            </div>
                        </div>
                    </div>
                </div>
                <CreateListingFooter onBack={() => setStep(3)} />
            </form>
        </div>
    );
}
