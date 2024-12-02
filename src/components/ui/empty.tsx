import clsx from "clsx";
import Text from "@/components/ui/typography/text";
import { EmptyIcon } from "@/components/icons";

const classes = {
    base: "flex flex-col",
    alignment: {
        inlineStart: "",
        center: "items-center text-center",
        inlineEnd: "",
    },
};

type EmptyTextTagProps = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

export interface EmptyProps {
    image?: React.ReactNode;
    imageClassName?: string;
    defaultImageWidth?: string | number;
    defaultImageHeight?: string | number;
    defaultImageClassName?: string;
    text?: string;
    textTag?: EmptyTextTagProps;
    textClassName?: string;
    alignment?: keyof typeof classes.alignment;
    className?: string;
}

export default function Empty({
    image,
    className,
    text,
    textTag = "p",
    imageClassName,
    textClassName,
    alignment = "center",
    defaultImageWidth = 184,
    defaultImageHeight = 152,
    defaultImageClassName,
    children,
}: React.PropsWithChildren<EmptyProps>) {
    return (
        <div
            className={clsx(
                classes.base,
                classes.alignment[alignment],
                className
            )}
        >
            <div className={clsx(imageClassName)}>
                {image ? (
                    image
                ) : (
                    <EmptyIcon
                        width={defaultImageWidth}
                        height={defaultImageHeight}
                        className={defaultImageClassName}
                    />
                )}
            </div>
            {text ? (
                <Text tag={textTag} className={clsx(textClassName)}>
                    {text}
                </Text>
            ) : null}
            {children}
        </div>
    );
}

Empty.displayName = "Empty";
