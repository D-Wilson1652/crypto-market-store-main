import { Skeleton } from "@/components/ui/skeleton";

const ActiveMembershipSkeleton = () => {
    return (
        <div className="mb-6 lg:pb-8 mt-12">
            <div className="px-4 lg:px-12 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
                {/* Image Skeleton */}
                <Skeleton className="w-full h-56 max-w-[24rem] max-h-[20rem]" />

                <div className="max-w-lg lg:w-[30rem]">
                {/* Title Skeleton */}
                    <Skeleton className="h-8 w-56 mt-4" />

                    {/* Price Skeleton */}
                    <Skeleton className="h-6 w-32 mt-4" />

                    {/* Description Skeleton */}
                    <Skeleton className="h-4 w-full mt-6" />
                    <Skeleton className="h-4 w-5/6 mt-2" />
                    <Skeleton className="h-4 w-4/6 mt-2" />

                    {/* Button Skeleton */}
                    <Skeleton className="h-10 w-full mt-6" />
                    <Skeleton className="h-10 w-full mt-4" />

                    {/* Renewal Date Skeleton */}
                    <Skeleton className="h-4 w-64 mt-2" />
                </div>
            </div>
        </div>
    );
};

export default ActiveMembershipSkeleton;
