import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components Import
import SignupForm from "@/components/auth/signup-form";
import Button from "@/components/ui/button";

// Lib Import
import { cn } from "@/lib/utils";

const SignUp = ({ className }: { className?: string }) => {
    const navigate = useNavigate();

    const [userType, setUserType] = useState<"buyer" | "seller">("seller");
    return (
        <div
            className={cn(
                "flex lg:justify-center lg:items-center lg:px-2",
                className
            )}
        >
            <div className="mx-auto w-full max-w-[496px] sm:max-w-[505px] lg:max-w-[630px] bg-white pt-9 sm:pt-8 sm:pb-2 max-lg:p-6">
                <div>
                    <Button
                        variant="text"
                        className="text-primary underline font-semibold !px-0 !py-0"
                        onClick={() => navigate(-1)}
                    >
                        Go Back
                    </Button>

                    <h2 className="mt-2 text-2xl lg:text-3xl font-bold  tracking-wide text-primary">
                        Create your account with us
                    </h2>

                    <p className="mt-2 lg:mt-5 xl:mt-7 text-xs sm:text-sm lg:text-base leading-6 text-gray">
                        You are creating an account as?
                    </p>

                    {/*
                     * // ? Seller and Buyer might have different forms or fields so
                     * // ? we can use the userType state to conditionally render the form fields based on the selected user type.
                     * // ? else we can just pass with the form submission the userType to the backend to differentiate the user type.
                     */}
                    <div className="flex items-center w-full gap-3 mt-2 md:mt-5">
                        <div
                            className={cn(
                                styles.inputContainer,
                                userType === "seller" && "border-primary"
                            )}
                            onClick={() => setUserType("seller")}
                        >
                            <input
                                defaultChecked
                                id="bordered-radio-1"
                                type="radio"
                                name="bordered-radio"
                                className={styles.input}
                            />
                            <label
                                htmlFor="bordered-radio-1"
                                className={styles.inputLabel}
                            >
                                As a Seller
                            </label>
                        </div>

                        <div
                            className={cn(
                                styles.inputContainer,
                                userType === "buyer" && "border-primary"
                            )}
                            onClick={() => setUserType("buyer")}
                        >
                            <input
                                id="bordered-radio-2"
                                type="radio"
                                name="bordered-radio"
                                className={styles.input}
                            />
                            <label
                                htmlFor="bordered-radio-2"
                                className={styles.inputLabel}
                            >
                                As a Buyer
                            </label>
                        </div>
                    </div>

                    <SignupForm />
                </div>
            </div>
        </div>
    );
};

const styles = {
    inputContainer:
        "flex items-center ps-4 gap-1 border border-gray-200 rounded-lg w-full",
    input: "w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-0",
    inputLabel: "w-full py-2 md:py-3 xl:py-4 ms-2 text-sm font-medium",
};

export default SignUp;
