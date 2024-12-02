import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import clsx from "clsx";

// Config Import
import { Routes } from "@/config/routes";

const menuData = [
    {
        text: "overview",
        path: Routes.private.dashboard.overview,
    },
    {
        text: "All Listings",
        path: Routes.private.dashboard.allListings,
    },
    {
        text: "Membership",
        path: Routes.private.dashboard.membership,
    },
];

export default function DashboardMenu() {
    const { pathname } = useLocation();

    return (
        <div className="hidden md:block">
            <ul className="flex items-center gap-6 lg:gap-8 xl:gap-12 3xl:gap-12">
                {menuData.map((item) => (
                    <li key={item.text} className="relative">
                        <Link
                            to={item.path}
                            className={clsx(
                                "inline-block text-base font-normal capitalize text-gray-dark",
                                pathname === item.path && "!font-semibold"
                            )}
                        >
                            {item.text}
                        </Link>
                        {pathname === item.path && (
                            <motion.div
                                layoutId="linkUnderline"
                                className="absolute -bottom-5 left-0 h-[2px] w-full rounded-md bg-gray-dark lg:-bottom-6 xl:h-1 2xl:-bottom-7 4xl:-bottom-9"
                            />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
