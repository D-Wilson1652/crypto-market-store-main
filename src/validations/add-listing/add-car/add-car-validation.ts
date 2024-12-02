import { z } from "zod";

export const DetailsSchema = z.object({
    model: z
        .string()
        .min(1, "Model is required!")
        .max(255, "Model is too long"),
    make: z.string().min(1, "Make is required!").max(255, "Make is too long"),
    carDetails: z.object({
        year: z
            .string()
            .min(4, "Year is required!")
            .max(4, "Year is too long")
            .trim()
            .refine((val) => parseInt(val) >= 1600 && parseInt(val) <= 2100, {
                message: "Year must be between 1600 and 2100",
            }),
        gearBox: z
            .string()
            .min(1, "Gear box is required!")
            .max(50, "Gear box is too long"),
        fuelType: z
            .string()
            .min(1, "Fuel type is required!")
            .max(50, "Fuel type is too long"),
        carType: z
            .string()
            .min(1, "Car type is required!")
            .max(50, "Car type is too long"),
        carCondition: z
            .string()
            .min(1, "Car condition is required!")
            .max(20, "Car condition is too long"),
        color: z
            .string({
                required_error: "Color is required!",
                message: "Color is required!",
            })
            .min(1, "Color is required!")
            .max(20, "Color is too long"),
        drive: z
            .string()
            .min(1, "Drive is required!")
            .max(50, "Drive is too long"),
        engine: z
            .string()
            .min(1, "Engine is required!")
            .max(50, "Engine is too long"),
        driveTrain: z
            .string()
            .min(1, "Drive train is required!")
            .max(50, "Drive train is too long"),
        interiorColor: z
            .string()
            .min(1, "Interior color is required!")
            .max(20, "Interior color is too long"),
        carPower: z.object({
            power: z
                .number({
                    required_error: "Power is required!",
                    invalid_type_error: "Power is required!",
                })
                .refine((val) => val > -1, {
                    message: "Power must be 0 or greater",
                }),
            powerType: z
                .string()
                .min(1, "type is required!")
                .max(255, "type is too long"),
        }),
        mileage: z.object({
            mileage: z
                .number({
                    required_error: "Mileage is required!",
                    invalid_type_error: "Mileage is required!",
                })
                .refine((val) => val > -1, {
                    message: "Mileage must be 0 or greater",
                }),
            mileageType: z
                .string()
                .min(1, "type is required!")
                .max(255, "type is too long"),
        }),
    }),
});

export type DetailsSchemaType = z.infer<typeof DetailsSchema>;
