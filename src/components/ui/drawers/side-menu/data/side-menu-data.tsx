{
    /*
     * // ! The file extension is .tsx, but it is not a React Component, it is just a data file.
     * // ! Since we are using Icons as components in the objects we have to use .tsx extension.
     */
}

// Icons Import
import {
    ArrowLeftStartOnRectangleIcon,
    RectangleGroupIcon,
} from "@heroicons/react/24/outline";
import {
    // Menu
    RealEstateOutline,
    CarOutline,
    YachtOutline,
    WatchOutline,
    JetOutline,
    MotorcycleOutline,
    HelicopterOutline,
    JewelryOutline,
    // Account
    UserProfile2Outline,
    EnvelopeOutline,
    SettingWheelOutline,
    CloudBarsOutline,
} from "@/components/icons";

// Config Import
import { Routes } from "@/config/routes";

export const menu = [
    {
        name: "Real Estate",
        icon: <RealEstateOutline className="h-auto w-5" />,
        path: Routes.public.realEstate,
    },
    {
        name: "Cars",
        icon: <CarOutline className="h-auto w-5" />,
        path: Routes.public.car,
    },
    {
        name: "Yachts",
        icon: <YachtOutline className="h-auto w-5" />,
        path: Routes.public.comingSoon,
    },
    {
        name: "Watches",
        icon: <WatchOutline className="h-auto w-5" />,
        path: Routes.public.watch,
    },
    {
        name: "Jets",
        icon: <JetOutline className="h-auto w-5" />,
        path: Routes.public.comingSoon,
    },
    {
        name: "Motorcycles",
        icon: <MotorcycleOutline className="h-auto w-5" />,
        path: Routes.public.comingSoon,
    },
    {
        name: "Helicopters",
        icon: <HelicopterOutline className="h-auto w-5" />,
        path: Routes.public.comingSoon,
    },
    {
        name: "Jewelry",
        icon: <JewelryOutline className="h-auto w-5" />,
        path: Routes.public.comingSoon,
    },
];

export const account = [
    {
        name: "Profile",
        icon: <UserProfile2Outline className="h-auto w-5" />,
        path: "#",
    },
    {
        name: "Messages",
        icon: <EnvelopeOutline className="h-auto w-5" />,
        path: "#",
    },
    {
        name: "Settings",
        icon: <SettingWheelOutline className="h-auto w-5" />,
        path: "#",
    },
    {
        name: "Sell With Us",
        icon: <CloudBarsOutline />,
        path: Routes.public.sellWithUs,
    },
    {
        name: "dashboard",
        icon: <RectangleGroupIcon className="h-auto w-5" />,
        path: "#",
        subMenu: [
            [
                {
                    name: "overview",
                    path: Routes.private.dashboard.overview,
                },
                {
                    name: "All Listings",
                    path: Routes.private.dashboard.allListings,
                },
                {
                    name: "Membership",
                    path: Routes.private.dashboard.membership,
                },
            ],
        ],
    },
    {
        name: "Sign Out",
        icon: <ArrowLeftStartOnRectangleIcon className="h-auto w-5" />,
    },
];

export const auth = [
    {
        name: "Sign In",
        icon: <UserProfile2Outline className="h-auto w-5" />,
        path: Routes.auth.signIn,
    },
    {
        name: "Sign Up",
        icon: <UserProfile2Outline className="h-auto w-5" />,
        path: Routes.auth.signUp,
    },
];
