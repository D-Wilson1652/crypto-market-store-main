import { useEffect } from "react";

// Component Imports
import DashboardHero from "@/components/dashboard/overview/dashboard-hero";
import DashboardLayout from "@/components/layout/dashboard-layout";
import StatCard from "@/components/ui/cards/stat-card";
import CardLoader from "@/components/ui/loader/card-loader";
import { toast } from "sonner";

// Redux Imports
import { useGetListingStatsQuery } from "@/redux/api/user-api";

// Types Imports
import { ErrorAPIResponse } from "@/types/api-types";

// JSX Component
export default function Dashboard() {
    const {
        data: cardData,
        error,
        isError,
        isLoading,
    } = useGetListingStatsQuery();

    useEffect(() => {
        if (isError) {
            const err = error as ErrorAPIResponse;
            toast.error(err.message);
        }
    }, [isError, error]);

    return (
        <DashboardLayout>
            <div className="container-fluid mb-12 lg:mb-16">
                <DashboardHero />

                {isLoading ? (
                    <CardLoader />
                ) : (
                    <div className="mb-12 mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:mb-16 lg:mt-12 2xl:mt-16 2xl:gap-6">
                        {cardData?.data.map((item, index) => (
                            <StatCard key={`stat-card-${index}`} data={item} />
                        ))}
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
}
