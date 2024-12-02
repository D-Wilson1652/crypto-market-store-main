import { atom, useSetAtom, useAtomValue } from "jotai";

export type MODAL_VIEW = "SCHEDULE_DEMO" | "SIGN_IN";

export const modalAtom = atom<{
    open: boolean;
    view: MODAL_VIEW;
    data: unknown;
}>({
    open: false,
    view: "SCHEDULE_DEMO",
    data: null,
});

export function useModal() {
    const modal = useAtomValue(modalAtom);
    const setModal = useSetAtom(modalAtom);

    function openModal(view: MODAL_VIEW) {
        setModal((prev) => ({
            ...prev,
            view,
            open: true,
        }));
    }

    function closeModal() {
        setModal((prev) => ({
            ...prev,
            open: false,
        }));
    }

    function setModalData<T>(newData: T) {
        setModal((prev) => ({
            ...prev,
            data: newData,
        }));
    }

    return {
        ...modal,
        openModal,
        closeModal,
        setModalData,
    };
}
