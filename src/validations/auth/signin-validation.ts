import { z } from "zod";

// import { EmailSchema } from "../common/email-validation";
import { EmailSchema } from "@/validations/common/email-validation";
import { PasswordSchema } from "@/validations/common/password-validation";

export const SignInSchema = z.object({
    email: EmailSchema.shape.email,
    password: PasswordSchema.shape.password,
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;
