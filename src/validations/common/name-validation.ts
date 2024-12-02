import { z } from "zod";

export const NameSchema = z.object({
    name: z
        .string()
        .min(2, { message: "Name must be atleast 2 characters long" })
        .max(50, { message: "Name must be at most 50 characters long" })
        .trim(),
});

export type NameSchemaType = z.infer<typeof NameSchema>;
