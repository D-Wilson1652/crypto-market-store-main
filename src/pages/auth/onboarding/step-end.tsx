// Jotai Import
import { useSetAtom } from "jotai";
import { onboardingStepAtom } from "@/components/auth/onboarding/context";

// Components Import
import Success from "@/components/ui/success";

// JSX Component
export default function StepsEnd() {
    const setStep = useSetAtom(onboardingStepAtom);

    return (
        <>
            <Success
                setStep={setStep}
                text="You have successfully completed the onboarding process"
            />
        </>
    );
}
