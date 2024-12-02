// Components Import
import ActionIcon from "@/components/ui/action-icon";

// Jotai Import
import { useAtom } from "jotai";
import { drawerStateAtom } from "@/components/drawers/drawer-state-atom";

// Heroicons Import
import { Bars3Icon } from "@heroicons/react/24/outline";

// Data Import
import { categoryData } from "./data";
import CountriesMenu from "./countries-menu";

// JSX
export default function RealEstateHeaderBottomSection() {
    const [, setDrawerState] = useAtom(drawerStateAtom);
    return (
        <div className="container w-full px-4 py-3.5 sm:px-6 lg:py-4 lg:px-14 3xl:px-18 4xl:py-7 !z-50 relative">
            <div className="flex items-center gap-8">
                <ActionIcon
                    variant="outline"
                    size="lg"
                    className="cursor-pointer bg-white w-48 gap-3 hidden sm:flex"
                    onClick={() =>
                        setDrawerState({
                            isOpen: true,
                            placement: "left",
                            view: "SIDE_MENU",
                        })
                    }
                >
                    <Bars3Icon className="h-6 w-6" />

                    <p className="text-[#272343] font-medium text-xs">
                        All Countires
                    </p>
                </ActionIcon>

                <CountriesMenu data={categoryData} />
            </div>
        </div>
    );
}
