import clsx from "clsx";
import Text from "@/components/ui/typography/text";

type TextCardProps = {
    title?: string;
    titleTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    id?: string;
    text?: string;
    text2?: string;
    titleClassName?: string;
    textClassName?: string;
};

const TextCard = ({
    title,
    titleTag = "h2",
    id,
    text,
    text2,
    titleClassName,
    textClassName,
}: TextCardProps) => {
    return (
        <>
            {title && (
                <div id={id}>
                    <Text
                        tag={titleTag}
                        className={clsx("mt-8 font-medium", titleClassName)}
                    >
                        {title}
                    </Text>
                </div>
            )}

            {text && (
                <Text className={clsx("mt-4 text-gray-light", textClassName)}>
                    {text}
                </Text>
            )}

            {text2 && (
                <Text className={clsx("mt-4 text-gray-light", textClassName)}>
                    {text2}
                </Text>
            )}
        </>
    );
};
export default TextCard;
