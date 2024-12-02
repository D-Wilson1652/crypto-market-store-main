import { z } from "zod";

export const PhoneSchema = z.object({
    phone: z
        .string({ message: "Phone number is required" })
        .regex(/^[0-9]+$/, { message: "Only numbers are allowed" }),
});

export type PhoneSchemaType = z.infer<typeof PhoneSchema>;
