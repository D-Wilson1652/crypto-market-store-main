import { atom } from "jotai";

type DrawerPropsType = {
    isOpen: boolean;
    placement?: "top" | "right" | "bottom" | "left";
    view: string;
    customSize?: string;
    data?: unknown;
};

export const drawerStateAtom = atom<DrawerPropsType>({
    isOpen: false,
    placement: "left",
    view: "SIDE_MENU",
});
