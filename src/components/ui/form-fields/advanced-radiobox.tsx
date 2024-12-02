import React, { forwardRef } from "react";
import clsx from "clsx";

export interface AdvancedRadioProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    inputClassName?: string;
    children: React.ReactNode;
}

const AdvancedRadio = forwardRef<HTMLInputElement, AdvancedRadioProps>(
    ({ children, className, inputClassName, ...props }, ref) => (
        <label>
            <input
                type="radio"
                ref={ref}
                className={clsx("peer hidden", inputClassName)}
                {...props}
            />
            <span className={clsx("block", className)}>{children}</span>
        </label>
    )
);

AdvancedRadio.displayName = "AdvancedRadio";
export default AdvancedRadio;
