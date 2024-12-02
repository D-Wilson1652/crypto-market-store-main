import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAtom } from "jotai";
import clsx from "clsx";

//  Components Import
import Drawer from "@/components/ui/drawer";
import { drawerStateAtom } from "@/components/drawers/drawer-state-atom";

// Hooks Import
import { useIsMounted } from "@/hooks/use-is-mounted";

// Lazy Imports
const PhotoGallery = lazy(
    () => import("@/components/ui/drawers/photo-gallery")
);
const SideMenu = lazy(() => import("@/components/ui/drawers/side-menu"));

export type DRAWER_VIEW = "PHOTO_GALLERY" | "SIDE_MENU";

// render drawer contents
function renderDrawerContent(view: DRAWER_VIEW | string) {
    switch (view) {
        case "PHOTO_GALLERY":
            return <PhotoGallery />;
        case "SIDE_MENU":
            return <SideMenu />;
        default:
            return null;
    }
}

export default function DrawerContainer() {
    const [drawerSate, setDrawerState] = useAtom(drawerStateAtom);
    const { pathname: pathName } = useLocation();

    const mounted = useIsMounted();

    useEffect(() => {
        setDrawerState({ ...drawerSate, isOpen: false });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathName]);

    return (
        // TODO: ADD LOADER IF NEEDED
        <Suspense fallback={null}>
            {mounted && (
                <Drawer
                    isOpen={drawerSate.isOpen}
                    placement={drawerSate.placement}
                    customSize={drawerSate.customSize}
                    containerClassName={clsx(
                        drawerSate.view === "PHOTO_GALLERY" &&
                            "bg-white overflow-y-auto"
                    )}
                    onClose={() =>
                        setDrawerState({ ...drawerSate, isOpen: false })
                    }
                >
                    {renderDrawerContent(drawerSate.view)}
                </Drawer>
            )}
        </Suspense>
    );
}
