import Header from "@/components/header";
import Footer from "@/components/footer/footer";

type SharedLayoutProps = {
    children: React.ReactNode;
};

const SharedLayout = ({ children }: SharedLayoutProps) => {
    return (
        <>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </>
    );
};

export default SharedLayout;
