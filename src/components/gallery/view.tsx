import { Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components Import
import { GALLERY_VIEW, useGallery } from "@/components/gallery/context";

// Config Import
import { fadeInBottom } from "@/config/constants";

// Lazy Imports
const GalleryCarousel = lazy(
    () => import("@/components/gallery/gallery-carousel")
);

// render gallery contents
function renderGalleryContent(
    view: GALLERY_VIEW | string,
    initialSlide: number,
    data: string[]
) {
    switch (view) {
        case "MODAL_GALLERY":
            return <GalleryCarousel initialSlide={initialSlide} data={data} />;
        default:
            return null;
    }
}

// JSX
export default function GalleryCarouselView() {
    const { open, view, initialSlide, data } = useGallery();

    return (
        // TODO: UPDATE LOADER IF NEEDED
        <Suspense fallback={<div>Loading...</div>}>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={fadeInBottom().from}
                        animate={fadeInBottom(0.4).to}
                        exit={fadeInBottom().from}
                        variants={fadeInBottom()}
                        className="fixed inset-0 z-[999] overflow-hidden bg-white"
                    >
                        {view && renderGalleryContent(view, initialSlide, data)}
                    </motion.div>
                )}
            </AnimatePresence>
        </Suspense>
    );
}
