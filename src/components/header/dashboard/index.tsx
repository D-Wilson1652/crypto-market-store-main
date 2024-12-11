import { useRef, memo } from "react";
import { Link } from "react-router-dom";

// Components Import
import DashboardMenu from "@/components/header/dashboard/dashboard-menu";
import ProfileMenu from "@/components/header/profile-menu";

// Utils Import
import { addScrollingClass } from "@/utils/add-scrolling-class";

// Config Import
import { Routes } from "@/config/routes";
import SideNavButton from "@/components/ui/side-nav-button";

export default memo(function DashboardHeader() {
    const headerRef = useRef(null);
    addScrollingClass(headerRef);
    return (
        <header
            ref={headerRef}
            className="dashboard-header sticky top-0 z-50 flex h-16 w-full border-b border-b-gray-lighter bg-white md:flex md:items-center lg:h-[72px] 2xl:h-20 4xl:h-24"
        >
            <div className="container-fluid flex w-full items-center justify-between">
                <Link to={Routes.public.home} className="w-fit">
                    <img
                        src="/images/common/logo.png"
                        alt="logo"
                        className="w-[12rem] lg:w-[16rem] 3xl:[19rem] h-auto"
                    />
                </Link>

                <div className="md:hidden flex items-center justify-end">
                    <SideNavButton />
                </div>

                <DashboardMenu />
                <ProfileMenu
                    className="hidden md:block"
                    buttonClassName="
                    border border-gray-lighter shadow-sm rounded-full px-6
                "
                />
            </div>
        </header>
    );
});
