import AuthCarousel from "@/components/auth/auth-carousel";

type DefaultLayoutProps = {
    children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-56 lg:h-screen">
                <AuthCarousel />
            </div>

            <div className="lg:hidden w-fit -translate-y-10 !z-10 mx-auto bg-[#07384FB8] border-2 border-[#07384F] p-2 rounded-xl">
                <img
                    src="images/common/logo-icon-white.png"
                    alt="Auth Carousel"
                    draggable={false}
                />
            </div>

            <main className="flex-grow -mt-8 lg:-mt-0">{children}</main>
        </div>
    );
};

export default DefaultLayout;
