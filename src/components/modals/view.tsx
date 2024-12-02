import { lazy, Suspense, Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";

// Context Imports
import { useModal, MODAL_VIEW } from "@/components/modals/context";

// Component Imports
import Button from "@/components/ui/button";

// Lazy Imports
const SignInModal = lazy(() => import("@/components/ui/modals/sign-in-modal"));
const ScheduleDemoModal = lazy(
    () => import("@/components/ui/modals/schedule-demo-modal")
);

function renderModalContent(view: MODAL_VIEW | string) {
    switch (view) {
        case "SIGN_IN":
            return <SignInModal className="!m-0 !p-0" />;
        case "SCHEDULE_DEMO":
            return <ScheduleDemoModal />;
        default:
            return null;
    }
}

export default function ModalContainer() {
    const { open, view, closeModal } = useModal();
    const { pathname: pathName } = useLocation();

    useEffect(() => {
        closeModal();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathName]);

    return (
        // TODO: ADD LOADER IF NEEDED
        <Suspense fallback={null}>
            <Transition appear show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className={clsx(
                        "fixed inset-0 z-[9999] h-full w-full overflow-y-auto overflow-x-hidden bg-gray-dark bg-opacity-40 p-4 text-center"
                    )}
                    onClose={closeModal}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 z-[9999] cursor-pointer" />
                    </Transition.Child>

                    {view && (
                        <span
                            className="inline-block h-full align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                    )}

                    <div className="sr-only">
                        <Button
                            size="sm"
                            onClick={closeModal}
                            className="opacity-50 hover:opacity-80 "
                        >
                            <span></span>
                        </Button>
                    </div>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-105"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-105"
                    >
                        <div className="relative z-[9999] inline-block w-full text-left align-middle sm:w-auto">
                            {view && renderModalContent(view)}
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </Suspense>
    );
}
