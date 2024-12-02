import { Fragment } from "react";
import { Link } from "react-router-dom";

// Components Import
import { Menu, Transition } from "@headlessui/react";
import { toast } from "sonner";

// Redux Import
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "@/redux/reducer/user-reducer";
import { RootState } from "@/redux/store";

// Icons Imports
import { UserProfileOutline } from "@/components/icons/user-profile-outline";

// Config Import
import { Routes } from "@/config/routes";

// Lib Utils Import
import { cn } from "@/lib/utils";

interface MenuItemProps {
    text: string;
    link?: string;
}

const userMenu = {
    top: [
        {
            path: Routes.public.home,
            text: "Home",
        },
        {
            path: Routes.private.dashboard.overview,
            text: "Dashboard",
        },
        {
            path: Routes.public.sellWithUs,
            text: "Sell With Us",
        },
    ],
    bottom: [
        {
            path: Routes.public.termsAndConditions,
            text: "Terms & Conditions",
        },
    ],
};

function MenuItem({ text, link }: MenuItemProps) {
    return (
        <Menu.Item>
            {({ active }) => (
                <Link
                    to={`${link}`}
                    className={cn(
                        "block rounded-sm px-5 py-2   text-base font-normal capitalize text-gray-dark",
                        active && "bg-gray-lightest"
                    )}
                >
                    {text}
                </Link>
            )}
        </Menu.Item>
    );
}

type ProfileMenuProps = {
    className?: string;
    buttonClassName?: string;
};

export default function ProfileMenu({
    className,
    buttonClassName,
}: ProfileMenuProps) {
    const dispatch = useDispatch();

    const { user } = useSelector((state: RootState) => state.userReducer);

    const menu = userMenu;

    const handleLogout = () => {
        dispatch(logoutUser());

        toast.success("Logged out successfully");
    };

    return (
        <>
            <Menu as="div" className={cn("relative !z-50", className)}>
                <Menu.Button
                    className={cn(
                        "bg-white !text-black hover:!bg-white hover!:text-black flex items-center gap-2 !font-normal !text-sm !py-[11px] px-4 rounded-md",
                        buttonClassName
                    )}
                >
                    <UserProfileOutline />

                    {user?.fullName && user?.fullName.split(" ")[0]}
                </Menu.Button>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-lighter rounded-md bg-white py-2 shadow-card focus:outline-none">
                        <div className="pb-1">
                            {menu.top.map((item) => (
                                <MenuItem
                                    key={item.text}
                                    text={item.text}
                                    link={item.path}
                                />
                            ))}
                        </div>
                        <div className="pt-1">
                            {menu.bottom.map((item) => (
                                <MenuItem
                                    key={item.text}
                                    text={item.text}
                                    link={item.path}
                                />
                            ))}
                            <Menu.Item
                                className="block w-full rounded-sm px-5 py-2 text-left   text-base font-normal text-gray-dark hover:bg-gray-lightest"
                                as="button"
                                onClick={handleLogout}
                            >
                                Log out
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </>
    );
}
