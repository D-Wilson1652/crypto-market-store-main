import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { SetStateAction } from "jotai";

// Components Import
import Confetti from "react-confetti";
import Text from "@/components/ui/typography/text";
import Button from "@/components/ui/button";

// Hooks Import
import { useIsMounted } from "@/hooks/use-is-mounted";
import { useWindowsize } from "@/hooks/use-window-size";

// Config Import
import { Routes } from "@/config/routes";

// Types Import
import type { SetAtom } from "@/types";

// Defining Types
type SuccessProps = {
    text: string;
    setStep?: SetAtom<[SetStateAction<number>], void>;
    navigateUrl?: string;
};

export default function Success({
    setStep,
    text,
    navigateUrl = Routes.public.home,
}: SuccessProps) {
    const navigate = useNavigate();
    const mounted = useIsMounted();
    const { width, height } = useWindowsize();

    const handleNavigate = useCallback(() => {
        navigate(navigateUrl);
        if (setStep) setStep(1);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigate]);

    return (
        <>
            <div className="flex w-full max-w-[648px] flex-col items-center justify-center gap-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <CheckCircleIcon className="h-auto w-24 text-green/80" />
                <Text tag="h5" className="text-gray-dark">
                    {text}
                </Text>
                <Button
                    size="lg"
                    className="tracking-wider"
                    onClick={handleNavigate}
                >
                    View
                </Button>
            </div>
            {mounted && (
                <Confetti
                    width={width - 20}
                    height={height - 10}
                    className="mx-auto"
                />
            )}
        </>
    );
}
