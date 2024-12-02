import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

// Zod Import
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "@/validations/auth/signin-validation";
import type { SignInSchemaType } from "@/validations/auth/signin-validation";

// Redux Import
import { useDispatch } from "react-redux";
import { useSignInMutation } from "@/redux/api/auth-api";
import { signInUser } from "@/redux/reducer/user-reducer";

// Components Import
import Input from "@/components/ui/form-fields/input";
import Button from "@/components/ui/button";
import { useModal } from "@/components/modals/context";
import { toast } from "sonner";

// Config Import
import { Routes } from "@/config/routes";

// Hooks Import
import { useShowHidePassword } from "@/hooks/use-show-hide-password";

// Types Import
import { User } from "@/types/api-types/user";

// Utils Import
import { responseToast } from "@/utils/response-toast";

// JSX Component
export default function SigninForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { closeModal } = useModal();

    const [signIn, { isLoading }] = useSignInMutation();

    const { showPassword, handleShowPassword } = useShowHidePassword();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInSchemaType>({
        resolver: zodResolver(SignInSchema),
    });

    async function handleFormSubmit(data: SignInSchemaType) {
        try {
            const response = await signIn(data);

            responseToast(
                response,
                navigate,
                Routes.public.home,
                dispatch,
                signInUser(response?.data?.data as User)
            );

            closeModal();
        } catch (error) {
            console.log("error", error);
            toast.error("Sign in failed");
        }
    }

    return (
        <form noValidate onSubmit={handleSubmit((d) => handleFormSubmit(d))}>
            <Input
                type="text"
                label="Email Address"
                labelClassName="text-gray-400 font-normal"
                placeholder="Enter your email address"
                className="mb-5"
                error={errors?.email?.message}
                required
                {...register("email")}
            />

            <Input
                type={showPassword.password ? "text" : "password"}
                label="Password"
                labelClassName="text-gray-400 font-normal"
                placeholder="Enter your password"
                className="mb-6"
                required
                endIcon={
                    showPassword.password ? (
                        <EyeIcon className="w-5 h-5 text-gray-light" />
                    ) : (
                        <EyeSlashIcon className="w-5 h-5 text-gray-light" />
                    )
                }
                endIconClickable
                endIconOnClick={() => handleShowPassword("password")}
                {...register("password")}
                error={errors?.password?.message}
            />

            <Button
                type="submit"
                className="w-full"
                size="xl"
                rounded="pill"
                isLoading={isLoading}
                disabled={isLoading}
            >
                Login
            </Button>
        </form>
    );
}
