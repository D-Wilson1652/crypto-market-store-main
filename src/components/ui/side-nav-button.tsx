import clsx from "clsx";
import { useAtom } from "jotai";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/solid";
import { drawerStateAtom } from "@/components/drawers/drawer-state-atom";
import ActionIcon from "@/components/ui/action-icon";

export default function SideNavButton({ className }: { className?: string }) {
    const [, setDrawerState] = useAtom(drawerStateAtom);

    return (
        <ActionIcon
            variant="text"
            size="sm"
            className={clsx(
                "!w-6 -translate-x-1 !p-0 focus:!ring-0 md:!w-7 2xl:-mt-1 2xl:!w-8",
                className
            )}
            onClick={() =>
                setDrawerState({
                    isOpen: true,
                    placement: "left",
                    view: "SIDE_MENU",
                })
            }
        >
            <Bars3CenterLeftIcon className="h-auto w-full" />
        </ActionIcon>
    );
}
