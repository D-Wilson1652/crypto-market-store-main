import OnboardingComponent from "@/components/auth/onboarding";
import ProgressBar from "@/components/ui/progress-bar";

// Jotai Imports
import { useAtomValue } from "jotai";
import { onboardingStepAtom } from "@/components/auth/onboarding/context";

const Onboarding = () => {
    const step = useAtomValue(onboardingStepAtom);

    return (
        <>
            <main className="flex flex-grow flex-col">
                <div className="flex flex-grow flex-col">
                    <OnboardingComponent />
                    <ProgressBar currentStep={step} totalSteps={8} />
                </div>
            </main>
        </>
    );
};
export default Onboarding;
