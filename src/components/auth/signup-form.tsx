import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

// Redux Imports
import { useDispatch } from "react-redux";
import { useSignUpMutation } from "@/redux/api/auth-api";

// Zod Import
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "@/validations/auth/signup-validation";
import type { SignUpSchemaType } from "@/validations/auth/signup-validation";

// Components Import
import Input from "@/components/ui/form-fields/input";
import PhoneNumber from "@/components/ui/form-fields/phone-number";
import Button from "@/components/ui/button";
import { toast } from "sonner";

// Hooks Import
import { useShowHidePassword } from "@/hooks/use-show-hide-password";

// Config Imports
import { Routes } from "@/config/routes";

// Utils Import
import { responseToast } from "@/utils/response-toast";
import { signUpUser } from "@/redux/reducer/user-reducer";
import { User } from "@/types/api-types/user";

// Styles
const styles = {
    gapBetween: "mb-5",
};
const { gapBetween } = styles;

// JSX Component
export default function SignupForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [signUp, { isLoading }] = useSignUpMutation();

    const { showPassword, handleShowPassword } = useShowHidePassword();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<SignUpSchemaType>({
        resolver: zodResolver(SignUpSchema),
    });

    async function handleFormSubmit(data: SignUpSchemaType) {
        try {
            const response = await signUp({
                fullName: data.name,
                email: data.email,
                password: data.password,
                phoneNumber: data.phoneNumber,
            });

            responseToast(
                response,
                navigate,
                Routes.private.onboarding,
                dispatch,
                signUpUser(response?.data?.data as User),
                true
            );
        } catch (error) {
            console.log("error", error);
            toast.error("Sign up failed");
        }
    }

    return (
        <form noValidate onSubmit={handleSubmit((d) => handleFormSubmit(d))}>
            <Input
                type="text"
                label="Full Name"
                labelClassName="text-gray-400 font-normal"
                placeholder="Enter your full name"
                className="mt-4 lg:mt-5 mb-5"
                error={errors?.name?.message}
                required
                {...register("name")}
            />

            <Controller
                name="phoneNumber"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <PhoneNumber
                        country="gb"
                        value={value}
                        onChange={onChange}
                        label="Phone Number"
                        error={errors?.phoneNumber?.message}
                        buttonClassName="vendor-contact-phone-input"
                        labelClassName="font-normal lg:text-base text-gray-400"
                        inputClassName="!pl-14"
                        dropdownClassName="!z-10"
                        className={gapBetween}
                    />
                )}
            />

            <Input
                type="text"
                label="Email Address"
                labelClassName="text-gray-400 font-normal"
                placeholder="Enter your email address"
                className={gapBetween}
                error={errors?.email?.message}
                required
                {...register("email")}
            />

            <Input
                type={showPassword.password ? "text" : "password"}
                label="Password"
                labelClassName="text-gray-400 font-normal"
                placeholder="Enter your password"
                required
                className={"mb-2"}
                endIcon={
                    showPassword.password ? (
                        <EyeIcon className="w-5 h-5 text-gray-light !z-0" />
                    ) : (
                        <EyeSlashIcon className="w-5 h-5 text-gray-light" />
                    )
                }
                endIconClickable
                endIconOnClick={() => handleShowPassword("password")}
                {...register("password")}
                error={errors?.password?.message}
            />

            <div className={gapBetween}>
                <p className="leading-6 text-gray">
                    Already have an account?{" "}
                    <Link
                        to={Routes.auth.signIn}
                        className="text-primary underline font-semibold"
                    >
                        Login
                    </Link>
                </p>
            </div>

            <Button
                type="submit"
                className="w-fit py-2 px-6 xl:py-2.5 2xl:py-3 xl:px-8 lg:text-base"
                isLoading={isLoading}
                disabled={isLoading}
            >
                Create Account
            </Button>
        </form>
    );
}
