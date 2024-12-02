import clsx from "clsx";
import { forwardRef } from "react";
import Loader from "@/components/ui/loader/loader";

const classes = {
    base: "inline-flex font-medium items-center justify-center focus:outline-none transition duration-200 active:scale-90",
    size: {
        sm: "px-2.5 py-1 text-xs",
        DEFAULT: "px-4 py-2 text-sm",
        lg: "px-5 py-2 text-base",
        xl: "px-8 py-2.5 text-base",
    },
    rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        DEFAULT: "rounded-md",
        lg: "rounded-lg",
        pill: "rounded-full",
    },
    variant: {
        solid: {
            base: "border border-transparent",
            color: {
                DEFAULT:
                    "bg-gray-900 text-white hover:enabled:bg-gray-1000 focus:ring-gray-900/30 text-gray-0",
                success:
                    "bg-green-600 text-white hover:enabled:bg-green-700 focus:ring-green-700/30",
                danger: "bg-red-600 text-white hover:enabled:bg-red-700 focus:ring-red-700/30",
                warning:
                    "bg-yellow-600 text-white hover:enabled:bg-yellow-700 focus:ring-yellow-700/30",
                info: "bg-blue-600 text-white hover:enabled:bg-blue-700 focus:ring-blue-700/30",
            },
        },
        flat: {
            base: "border-transparent",
            color: {
                DEFAULT:
                    "bg-gray-200 hover:enabled:bg-gray-300/70 focus:ring-gray-900/30 text-gray-1000",
            },
        },
        outline: {
            base: "bg-transparent border",
            color: {
                DEFAULT:
                    "border-gray-300 hover:enabled:border-gray-1000 focus:enabled:border-gray-1000 focus:ring-gray-900/30",
                success:
                    "border-green-300 hover:enabled:border-green-700 focus:enabled:border-green-700 focus:ring-green-700/30 text-green-700 hover:text-green-800",
                danger: "border-red-300 hover:enabled:border-red-700 focus:enabled:border-red-700 focus:ring-red-700/30 text-red-700 hover:text-red-800 hover:border-red-800",
                warning:
                    "border-yellow-300 hover:enabled:border-yellow-700 focus:enabled:border-yellow-700 focus:ring-yellow-700/30 text-yellow-700 hover:text-yellow-800",
                info: "border-blue-300 hover:enabled:border-blue-700 focus:enabled:border-blue-700 focus:ring-blue-700/30 text-blue-700 hover:text-blue-800",
            },
        },
        text: {
            base: "",
            color: {
                DEFAULT: "hover:text-gray-1000 focus:ring-gray-900/30",
            },
        },
    },
};

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Set the loading status of button */
    isLoading?: boolean;
    /** Set the original html type of button */
    type?: "button" | "submit" | "reset";
    /** The variants of the component are: */
    variant?: keyof typeof classes.variant;
    /** The size of the component. `"sm"` is equivalent to the dense button styling. */
    size?: keyof typeof classes.size;
    /** The rounded variants are: */
    rounded?: keyof typeof classes.rounded;
    /** Change button color */
    color?: keyof (typeof classes.variant)["solid"]["color"];
    /** Add custom classes for extra style */
    className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            className,
            isLoading,
            type = "button",
            variant = "solid",
            size = "DEFAULT",
            rounded = "DEFAULT",
            color = "DEFAULT",
            disabled,
            ...buttonProps
        },
        ref
    ) => {
        const variantStyle = classes.variant[variant];
        return (
            <button
                ref={ref}
                type={type}
                disabled={disabled}
                className={clsx(
                    classes.base,
                    classes.size[size],
                    classes.rounded[rounded],
                    variantStyle.base,
                    variantStyle.color[
                        color as keyof typeof variantStyle.color
                    ],
                    isLoading && "pointer-events-none relative",
                    disabled &&
                        "cursor-not-allowed !border-gray-200 !bg-gray-100 !text-gray-400",
                    className
                )}
                {...buttonProps}
            >
                {isLoading ? (
                    <>
                        {/* trick to have exact button width when button is loading */}
                        <span className="invisible opacity-0">{children}</span>
                        <span className="absolute inset-0 flex h-full w-full items-center justify-center">
                            <Loader
                                tag="span"
                                color="current"
                                size={size}
                                animation="scaleUp"
                            />
                        </span>
                    </>
                ) : (
                    <>{children}</>
                )}
            </button>
        );
    }
);

Button.displayName = "Button";
export default Button;
