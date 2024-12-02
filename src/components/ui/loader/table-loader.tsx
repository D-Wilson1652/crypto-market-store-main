import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type TableLoaderProps = {
    num?: number;
    containerClassName?: string;
    className?: string;
};

export default function TableLoader({
    num = 8,
    containerClassName,
    className,
}: TableLoaderProps) {
    return (
        <div className={cn("grid grid-cols-1 h-[60vh]", containerClassName)}>
            {Array(num)
                .fill(0)
                .map((_, index) => (
                    <Skeleton key={index} className={cn("h-10", className)} />
                ))}
        </div>
    );
}
