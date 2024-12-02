// Component Imports
import ActiveMembership from "@/components/dashboard/membership/active-membership";
import DashboardLayout from "@/components/layout/dashboard-layout";
import Text from "@/components/ui/typography/text";

// JSX Component
export default function Membership() {
    return (
        <DashboardLayout>
            <div className="container-fluid mb-12 lg:mb-16">
                <div className="mt-8 flex items-center justify-between lg:mt-12 2xl:mt-16">
                    <Text tag="h3" className="text-xl">
                        Membership
                    </Text>
                </div>
                
                <ActiveMembership />
            </div>
        </DashboardLayout>
    );
}
