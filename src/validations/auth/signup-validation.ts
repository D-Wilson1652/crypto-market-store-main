import { z } from "zod";

import { EmailSchema } from "@/validations/common/email-validation";
import { PhoneSchema } from "@/validations/common/phone-validation";
import { PasswordSchema } from "@/validations/common/password-validation";
import { NameSchema } from "@/validations/common/name-validation";

export const SignUpSchema = z.object({
    name: NameSchema.shape.name,
    phoneNumber: PhoneSchema.shape.phone,
    email: EmailSchema.shape.email,
    password: PasswordSchema.shape.password,
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
