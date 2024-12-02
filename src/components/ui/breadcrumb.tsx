import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface BreadcrumbItemProps {
    name: string;
    link?: string;
    isLast: boolean;
}

export function BreadcrumbItem({ name, link, isLast }: BreadcrumbItemProps) {
    const navigate = useNavigate();

    return (
        <li className="flex items-center">
            {!isLast ? (
                <div
                    className={cn(
                        "text-gray-600 hover:text-black font-medium text-sm",
                        link && "cursor-pointer"
                    )}
                    onClick={() => link && navigate(link)}
                >
                    {name}
                </div>
            ) : (
                <span className="text-black font-medium text-sm">{name}</span>
            )}
            {!isLast && (
                <span className="mx-2 text-gray-400 font-medium">/</span>
            )}
        </li>
    );
}

interface BreadcrumbProps {
    items: Array<{ name: string; link?: string }>;
    className?: string;
    handleClearBreadcrumb?: () => void;
}

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
    const itemsCount = items.length;

    let displayedItems;

    if (itemsCount > 3) {
        displayedItems = [
            items[0],
            { name: "...", link: undefined },
            items[itemsCount - 2],
            items[itemsCount - 1],
        ];
    } else {
        displayedItems = items;
    }

    return (
        <nav className={cn("flex", className)} aria-label="Breadcrumb">
            <ol className="flex items-center">
                {displayedItems.map((item, idx) => (
                    <BreadcrumbItem
                        key={idx}
                        name={item.name}
                        link={item.link}
                        isLast={idx === displayedItems.length - 1}
                    />
                ))}
            </ol>
        </nav>
    );
}
