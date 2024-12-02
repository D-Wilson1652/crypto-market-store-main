// Components Import
import DashboardHeader from "@/components/header/dashboard";
import Footer from "@/components/footer/footer";

// Defining Types
type DashboardLayoutProps = {
    children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <>
            <DashboardHeader />
            <main className="flex-grow">{children}</main>
            <Footer />
        </>
    );
};
export default DashboardLayout;
