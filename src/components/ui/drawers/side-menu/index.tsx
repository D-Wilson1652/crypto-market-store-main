import { useNavigate } from "react-router-dom";

// Redux Import
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// Icons Import
import { XMarkIcon } from "@heroicons/react/24/outline";

// Jotai Imports
import { drawerStateAtom } from "@/components/drawers/drawer-state-atom";
import { useAtom } from "jotai";

// Components Import
import ActionIcon from "@/components/ui/action-icon";
import List from "@/components/ui/drawers/side-menu/list";

// Config Import
import { Routes } from "@/config/routes";

// Data Import
import {
    menu,
    account,
    auth,
} from "@/components/ui/drawers/side-menu/data/side-menu-data";

// JSX Component
export default function SideMenu() {
    const navigate = useNavigate();

    // Jotai
    const [drawerSate, setDrawerState] = useAtom(drawerStateAtom);

    // Redux
    const { isAuthenticated } = useSelector(
        (state: RootState) => state.userReducer
    );

    // Functions
    const handleNaviation = () => {
        navigate(Routes.public.home);
        setDrawerState({ ...drawerSate, isOpen: false });
    };

    return (
        <div className="ml-auto h-full bg-[#F4F4F6] md:ml-0 pb-6 overflow-auto">
            <div className="flex h-14 items-center justify-between px-10 pt-6 md:h-20 xl:h-24">
                <img
                    src="/images/common/logo.png"
                    alt="logo"
                    className="w-[15rem] lg:w-[20rem] 3xl:[23rem] h-auto -ml-4"
                    onClick={handleNaviation}
                />
                <ActionIcon
                    size="sm"
                    variant="outline"
                    className="border-none !p-0 focus:!ring-0"
                    onClick={() =>
                        setDrawerState({ ...drawerSate, isOpen: false })
                    }
                >
                    <XMarkIcon className="h-6 w-6" />
                </ActionIcon>
            </div>

            <div className="py-6 md:py-4" />

            <List navListItem={menu} title="Menu" />

            {/* horizontal Line */}
            <div className="border-t border-[#E2E1E7] my-6" />

            <List
                navListItem={isAuthenticated ? account : auth}
                title="Account"
            />
        </div>
    );
}
