import { useState, useEffect, useRef, forwardRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import InputIconOnClear from "@/components/ui/form-fields/field-clear-btn";
import { cn } from "@/lib/utils";
import Input from "./form-fields/input";

const arrowIconClasses = {
    outline: "right-5",
    text: "right-0",
};

export type OptionsType = {
    label: string;
    icon?: React.ReactNode;
    disabled?: boolean;
};

interface SelectFilterBoxPropsType {
    options: OptionsType[];
    className?: string;
    optionIcon?: boolean;
    label?: string;
    value: { label: string; [key: string]: unknown };
    labelClassName?: string;
    buttonClassName?: string;
    inputClassName?: string;
    arrowIconClassName?: string;
    optionsContainerClassName?: string;
    ClearableClassName?: string;
    onChange: (value: unknown) => void;
    onClearClick?: (event: React.MouseEvent) => void;
    variant?: "outline";
    clearable?: boolean;
}

const SelectFilterBox: React.FC<SelectFilterBoxPropsType> = forwardRef<
    HTMLDivElement,
    SelectFilterBoxPropsType
>(
    (
        {
            label,
            value,
            options,
            onChange,
            clearable,
            className,
            onClearClick,
            labelClassName,
            buttonClassName,
            inputClassName,
            arrowIconClassName,
            optionIcon = false,
            variant = "outline",
            ClearableClassName,
            optionsContainerClassName,
        },
        ref
    ) => {
        const [searchTerm, setSearchTerm] = useState("");
        const [filteredOptions, setFilteredOptions] = useState(options);
        const [dropdownOpen, setDropdownOpen] = useState(false);
        const inputRef = useRef<HTMLInputElement>(null);
        const dropdownRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            if (searchTerm === "") {
                setFilteredOptions(options);
            } else {
                setFilteredOptions(
                    options.filter((option) =>
                        option.label
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                    )
                );
            }
        }, [searchTerm, options]);

        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (
                    dropdownRef.current &&
                    !dropdownRef.current.contains(event.target as Node) &&
                    inputRef.current !== event.target
                ) {
                    setDropdownOpen(false);
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, []);

        const handleOptionSelect = (option: OptionsType) => {
            setSearchTerm(option.label);
            onChange(option);
            setDropdownOpen(false);
        };

        const handleInputClick = () => {
            setDropdownOpen(true);
        };

        const handleClearClick = (event: React.MouseEvent) => {
            setSearchTerm("");
            onChange({ label: "", value: "" });
            if (onClearClick) {
                onClearClick(event);
            }
        };

        return (
            <div ref={ref}>
                <div className={cn("relative", className)} ref={dropdownRef}>
                    {label && (
                        <label
                            htmlFor="selectFilterbox"
                            className={cn(
                                "block text-base font-bold text-gray-dark",
                                labelClassName
                            )}
                        >
                            {label}
                        </label>
                    )}
                    <div className="relative cursor-pointer">
                        <Input
                            type="text"
                            ref={inputRef}
                            value={searchTerm}
                            variant={variant}
                            inputClassName={cn(
                                "cursor-pointer",
                                inputClassName
                            )}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onClick={handleInputClick}
                            placeholder={value ? value.label : "Select..."}
                            className={cn("w-full", buttonClassName)}
                        />
                        <span
                            className={cn(
                                "absolute inset-y-0 flex items-center transition-transform duration-200",
                                arrowIconClasses[variant],
                                dropdownOpen && "rotate-180",
                                arrowIconClassName
                            )}
                        >
                            <ChevronDownIcon
                                className="h-5 w-5 text-gray"
                                aria-hidden="true"
                            />
                        </span>
                        {clearable && value && (
                            <InputIconOnClear
                                size="xl"
                                onClick={handleClearClick}
                                className={cn(
                                    "absolute right-12 top-1/2 -translate-y-1/2 bg-transparent",
                                    ClearableClassName
                                )}
                            />
                        )}
                    </div>

                    {dropdownOpen && filteredOptions.length > 0 && (
                        <div
                            className={cn(
                                "absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
                                optionsContainerClassName
                            )}
                        >
                            {filteredOptions.map((item, index) => (
                                <div
                                    key={index}
                                    className={cn(
                                        "cursor-pointer select-none py-2 px-4",
                                        item.disabled
                                            ? "opacity-50 cursor-not-allowed"
                                            : "hover:bg-gray-lightest"
                                    )}
                                    onClick={() =>
                                        !item.disabled &&
                                        handleOptionSelect(item)
                                    }
                                >
                                    {optionIcon && (
                                        <span className="pr-3">
                                            {item.icon}
                                        </span>
                                    )}
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    }
);

export default SelectFilterBox;
