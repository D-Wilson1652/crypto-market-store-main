import { z } from "zod";

export const PasswordSchema = z.object({
    password: z
        .string()
        .regex(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            {
                message:
                    "Password must contain at least 8 characters, one letter, one number and one special character",
            }
        ),
});

export type PasswordSchemaType = z.infer<typeof PasswordSchema>;
