import { useRef } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { Link, useNavigate } from "react-router-dom";

// Components Import
import {
    stepAtom,
    storeAtom,
} from "@/components/add-listing/add-real-estate/context";
import Button from "@/components/ui/button";

// Utils Import
import { addScrollingClass } from "@/utils/add-scrolling-class";

// Config Import
import { Routes } from "@/config/routes";

// Defining Styles
const styles = {
    buttonClasses:
        "!px-3 !py-[6px] text-xs !font-semibold capitalize text-gray md:!px-4 md:!py-2 md:text-sm 2xl:!px-6 2xl:!py-[10px] 2xl:text-base",
};
const { buttonClasses } = styles;

// JSX Component
export default function AddListingHeader() {
    const navigate = useNavigate();
    const headerRef = useRef(null);
    addScrollingClass(headerRef);
    const store = useAtomValue(storeAtom);
    const setStep = useSetAtom(stepAtom);

    function handleSaveExit() {
        console.log(store);
        setStep(1);
        navigate(Routes.public.home);
    }

    return (
        <header
            ref={headerRef}
            className="addlisting-header sticky top-0 z-50 flex h-16 w-full bg-white md:flex md:items-center lg:h-[72px] 2xl:h-20 4xl:h-24"
        >
            <div className="container-fluid flex w-full items-center justify-between">
                <Link to={Routes.public.home} className="w-fit">
                    <img
                        src="/images/common/logo.png"
                        alt="logo"
                        className="w-[15rem] lg:w-[20rem] 3xl:[23rem] h-auto"
                    />
                </Link>

                <div className="flex items-center justify-end">
                    <Button
                        size="sm"
                        variant="outline"
                        className={buttonClasses}
                        onClick={handleSaveExit}
                    >
                        Exit
                    </Button>
                </div>
            </div>
        </header>
    );
}
