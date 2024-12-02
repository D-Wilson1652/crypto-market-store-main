import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

// Redux Import
import { useDispatch } from "react-redux";
import { logoutUser } from "@/redux/reducer/user-reducer";

// Components Import
import Button from "@/components/ui/button";
import ExpandableMenu from "@/components/ui/drawers/side-menu/expandable-menu";
import { toast } from "sonner";

interface navListTypes {
    navListItem: {
        name: string;
        icon?: React.ReactNode;
        path?: string;
        subMenu?: { name: string; path: string }[][];
    }[];
    title: string;
}

function List({ navListItem, title }: navListTypes) {
    const location = useLocation();

    // Redux
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());

        toast.success("Logged out successfully");
    };

    return (
        <div>
            <h3 className="text-xs text-gray-400 px-10 pt-2">{title}</h3>

            <ul className="pt-4">
                {navListItem.map((item) => {
                    if (item.subMenu) {
                        return (
                            <ExpandableMenu
                                key={item.name}
                                title={item.name}
                                icon={item.icon}
                                subMenu={item.subMenu[0]}
                            />
                        );
                    }

                    return (
                        <li
                            key={item.name}
                            className="border-b border-gray-lightest last:border-b-0 px-10"
                        >
                            {item.name === "Sign Out" ? (
                                <Button
                                    variant="text"
                                    className="w-full text-left gap-3 mt-3"
                                    onClick={handleLogout}
                                >
                                    {item.icon}
                                    {item.name}
                                </Button>
                            ) : (
                                <Link
                                    to={item.path!}
                                    className={clsx(
                                        "flex items-center py-4 px-4 gap-3 text-sm capitalize text-gray-dark hover:bg-gray-lightest",
                                        {
                                            "bg-[#E4E3E8]":
                                                location.pathname === item.path,
                                        }
                                    )}
                                >
                                    {item.icon}
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default List;
