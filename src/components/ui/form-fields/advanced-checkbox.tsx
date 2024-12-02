import clsx from "clsx";
import { forwardRef } from "react";
import FieldError from "@/components/ui/form-fields/field-error";
import FieldHelperText from "@/components/ui/form-fields/field-helper-text";

export interface AdvancedCheckboxProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    inputClassName?: string;
    labelClassName?: string;
    children: React.ReactNode;
    helperText?: React.ReactNode;
    error?: string;
    errorClassName?: string;
    helperClassName?: string;
}

const AdvancedCheckbox = forwardRef<HTMLInputElement, AdvancedCheckboxProps>(
    (
        {
            children,
            className,
            inputClassName,
            labelClassName,
            error,
            helperText,
            helperClassName,
            errorClassName,
            ...props
        },
        ref
    ) => (
        <div className="aegon-advanced-checkbox">
            <label
                className={clsx("relative flex items-center", labelClassName)}
            >
                <input
                    type="checkbox"
                    ref={ref}
                    className={clsx(
                        "peer absolute -z-[1] opacity-0",
                        inputClassName
                    )}
                    {...props}
                />
                <span className={clsx("block", className)}>{children}</span>
            </label>
            {!error && helperText && (
                <FieldHelperText
                    tag="div"
                    size={"DEFAULT"}
                    className={helperClassName}
                >
                    {helperText}
                </FieldHelperText>
            )}
            {error && (
                <FieldError
                    size={"DEFAULT"}
                    error={error}
                    className={errorClassName}
                />
            )}
        </div>
    )
);

AdvancedCheckbox.displayName = "AdvancedCheckbox";
export default AdvancedCheckbox;
