// Component Imports
import DashboardLayout from "@/components/layout/dashboard-layout";
import AllListingsTable from "@/components/tables/all-listings";

// JSX Component
export default function allListings() {
    return (
        <DashboardLayout>
            <div className="container-fluid mb-12 lg:mb-16">
                <AllListingsTable />
            </div>
        </DashboardLayout>
    );
}
