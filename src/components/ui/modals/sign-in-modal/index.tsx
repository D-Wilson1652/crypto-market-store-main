import { Link } from "react-router-dom";

// Components Import
import SigninForm from "@/components/auth/signin-form";
import clsx from "clsx";

// Config Import
import { Routes } from "@/config/routes";

export default function SignInModal({ className }: { className?: string }) {
    return (
        <div className={clsx("container mb-12 mt-8 px-4 lg:mb-16", className)}>
            <div className="m-auto w-full max-w-[496px] sm:w-[496px] rounded-lg border border-gray-200 bg-white p-6 pt-9 sm:p-12">
                <div className="mb-8">
                    <h2 className="mb-3 text-3xl font-bold uppercase leading-[48px] text-primary">
                        Sign In
                    </h2>

                    <p className="text-base leading-5 text-gray">
                        You need to sign in to access listings
                    </p>
                </div>

                <SigninForm />

                <div className="mt-2 text-center">
                    <p className="text-sm font-semibold leading-6 text-gray">
                        Not member yet?{" "}
                        <Link
                            to={Routes.auth.signUp}
                            className="text-primary underline"
                        >
                            Create an account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
