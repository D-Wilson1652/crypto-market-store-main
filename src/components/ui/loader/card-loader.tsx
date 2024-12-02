import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type CardLoaderProps = {
    num?: number;
    containerClassName?: string;
    className?: string;
};

const styles = {
    container:
        "mb-12 mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:mb-16 lg:mt-12 2xl:mt-16 2xl:gap-6",
    card: "w-[21rem] h-64",
};
const { container, card } = styles;

export default function CardLoader({
    num = 0,
    containerClassName,
    className,
}: CardLoaderProps) {
    return (
        <div className={cn(container, containerClassName)}>
            {num && num > 0 ? (
                Array(num)
                    .fill(0)
                    .map((_, index) => (
                        <Skeleton key={index} className={cn(card, className)} />
                    ))
            ) : (
                <>
                    <Skeleton className={cn("w-[21rem] h-64", className)} />
                    <Skeleton
                        className={cn(card, "hidden sm:block", className)}
                    />
                    <Skeleton
                        className={cn(card, "hidden md:block", className)}
                    />
                    <Skeleton
                        className={cn(card, "hidden lg:block", className)}
                    />
                    <Skeleton
                        className={cn(card, "hidden sm:block", className)}
                    />
                    <Skeleton
                        className={cn(card, "hidden md:block", className)}
                    />
                    <Skeleton
                        className={cn(card, "hidden lg:block", className)}
                    />
                    <Skeleton
                        className={cn(card, "hidden lg:block", className)}
                    />
                </>
            )}
        </div>
    );
}
