import { Link, useNavigate } from "react-router-dom";

// Components Import
import SigninForm from "@/components/auth/signin-form";
import Button from "@/components/ui/button";
// import SocialLogin from "@/components/auth/social-login";

// Config Import
import { Routes } from "@/config/routes";

// Lib Import
import { cn } from "@/lib/utils";

// Styles
const styles = {
    textContainer: "text-center leading-6 text-gray",
    link: "text-primary underline font-semibold",
};
const { textContainer, link } = styles;

export default function SignIn({ className }: { className?: string }) {
    const navigate = useNavigate();

    return (
        <div
            className={cn(
                "flex lg:justify-center lg:items-center lg:px-2",
                className
            )}
        >
            <div className="m-auto w-full max-w-[496px] sm:w-[505px] bg-white pt-9 sm:py-12 max-lg:p-6">
                <div className="mb-8">
                    <h2 className="mb-1 lg:mb-3 text-2xl lg:text-3xl font-semibold lg:font-bold tracking-wide text-primary">
                        Welcome back!
                    </h2>

                    <p className="text-xs sm:text-sm lg:text-base leading-6 text-gray">
                        Login to access all your data
                    </p>
                </div>

                <SigninForm />

                {/* <div className="relative my-6 text-center before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-full before:bg-gray-200">
                    <span className="relative z-10 m-auto inline-flex bg-white text-[#686677] px-5">
                        Continue with
                    </span>
                </div>

                <SocialLogin /> */}

                <p className={cn(textContainer, "mt-6")}>
                    Don't have an account?{" "}
                    <Link to={Routes.auth.signUp} className={link}>
                        Register
                    </Link>
                </p>

                <div className={textContainer}>
                    <Button
                        variant="text"
                        className={link}
                        onClick={() => navigate(-1)}
                    >
                        Go Back
                    </Button>
                </div>
            </div>
        </div>
    );
}
