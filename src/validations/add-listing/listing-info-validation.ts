import { z } from "zod";

export const ListingInfoSchema = z.object({
    title: z
        .string()
        .min(1, { message: "Title is required" })
        .max(50, { message: "Reached your letter limit." }),
    description: z
        .string()
        .min(1, { message: "Description is required" })
        .max(700, { message: "Reached your letter limit." }),
    price: z
        .number({
            required_error: "Price is required",
            invalid_type_error: "Price is required",
        })
        .min(1, { message: "Price is required" }),
    specifications: z.object({
        numOfBeds: z.number().min(1, { message: "Number of beds is required" }),
        numOfBaths: z
            .number()
            .min(1, { message: "Number of baths is required" }),
        areaInSqft: z
            .number({
                required_error: "Area in sqft is required",
                invalid_type_error: "Area in sqft is required",
            })
            .min(1, { message: "Area in sqft is required" }),
        pricePerSqft: z
            .number({
                required_error: "Price per sqft is required",
                invalid_type_error: "Price per sqft is required",
            })
            .min(1, { message: "Price per sqft is required" }),
    }),
    propertyType: z
        .string()
        .min(1, { message: "Property type is required" })
        .max(255, { message: "Property type is too long" }),
    propertySubType: z
        .string()
        .min(1, { message: "Property sub type is required" })
        .max(255, { message: "Property sub type is too long" }),
});

export type ListingInfoSchemaType = z.infer<typeof ListingInfoSchema>;
