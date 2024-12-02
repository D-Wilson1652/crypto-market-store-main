import { atom, useSetAtom, useAtomValue } from "jotai";

export type GALLERY_VIEW = "MODAL_GALLERY";

const galleryAtom = atom({
    open: false,
    view: "MODAL_GALLERY",
    initialSlide: 1,
    data: [] as string[],
});

export function useGallery() {
    const gallery = useAtomValue(galleryAtom);
    const setGallery = useSetAtom(galleryAtom);

    function openGallery(
        view: GALLERY_VIEW,
        initialSlide?: number,
        data?: string[]
    ) {
        setGallery({
            ...gallery,
            view,
            open: true,
            initialSlide: initialSlide ?? 1,
            data: data ?? [],
        });
    }

    function closeGallery() {
        setGallery({
            ...gallery,
            open: false,
            data: [],
        });
    }

    return {
        ...gallery,
        openGallery,
        closeGallery,
    };
}
