import { Bars3Icon } from "@heroicons/react/24/outline";

import ActionIcon from "@/components/ui/action-icon";
import HeaderBottom from "@/components/common/header-bottom";

import { useAtom } from "jotai";
import { drawerStateAtom } from "@/components/drawers/drawer-state-atom";

import { categoryData } from "./data";

export default function HelicopterHeaderBottomSection() {
    const [, setDrawerState] = useAtom(drawerStateAtom);
    return (
        <div className="container w-full bg-white px-4 py-3.5 sm:px-6 lg:py-4 lg:px-14 3xl:px-18 4xl:py-7">
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
                        All Brands
                    </p>
                </ActionIcon>

                <HeaderBottom data={categoryData} />
            </div>
        </div>
    );
}
