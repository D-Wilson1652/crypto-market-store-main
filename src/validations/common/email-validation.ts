import { z } from "zod";

export const EmailSchema = z.object({
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .email("Invalid email address")
        .trim(),
});

export type EmailSchemaType = z.infer<typeof EmailSchema>;
