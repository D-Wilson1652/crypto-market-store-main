import { cn } from "@/lib/utils";

type PopularLinkGroupProps = {
    children: React.ReactNode;
    header: string;
    className?: string;
};

const PopularLinkGroup = ({
    children,
    header,
    className,
}: PopularLinkGroupProps) => {
    return (
        <>
            <div className={cn("w-full", className)}>
                <h4 className="mb-2 font-bold text-base">{header}</h4>

                <ul className="space-y-2">{children}</ul>
            </div>
        </>
    );
};

export default PopularLinkGroup;
