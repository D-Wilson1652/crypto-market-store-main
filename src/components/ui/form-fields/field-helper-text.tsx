import { cn } from "@/lib/utils";

// Define Styles
const helperTextClasses = {
    size: {
        sm: "text-[10px] mt-0.5",
        DEFAULT: "text-xs mt-0.5",
        lg: "text-xs mt-1",
        xl: "text-sm mt-1",
    },
};

// Types
export interface FieldHelperTextProps
    extends React.HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
    tag?: "div" | "span";
    size?: keyof typeof helperTextClasses.size;
    className?: string;
}

// Component
export default function FieldHelperText({
    size,
    tag = "div",
    children,
    className,
}: React.PropsWithChildren<FieldHelperTextProps>) {
    const Component = tag;

    return (
        <Component
            role="alert"
            className={cn(size && helperTextClasses.size[size], className)}
        >
            {children}
        </Component>
    );
}
