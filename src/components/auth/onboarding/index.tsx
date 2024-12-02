import { lazy, Suspense } from "react";

// Jotai Imports
import { useAtomValue } from "jotai";
import { onboardingStepAtom } from "@/components/auth/onboarding/context";

// Components Imports
const StepOne = lazy(
    () => import("@/components/auth/onboarding/steps/step-one")
);
const StepTwo = lazy(
    () => import("@/components/auth/onboarding/steps/step-two")
);
const StepThree = lazy(
    () => import("@/components/auth/onboarding/steps/step-three")
);
const StepFour = lazy(
    () => import("@/components/auth/onboarding/steps/step-four")
);
const StepFive = lazy(
    () => import("@/components/auth/onboarding/steps/step-five")
);
const StepSix = lazy(
    () => import("@/components/auth/onboarding/steps/step-six")
);
const StepSeven = lazy(
    () => import("@/components/auth/onboarding/steps/step-seven")
);

export default function Onboarding() {
    let stepComponent;
    const step = useAtomValue(onboardingStepAtom);
    switch (step) {
        case 1:
            stepComponent = <StepOne />;
            break;
        case 2:
            stepComponent = <StepTwo />;
            break;
        case 3:
            stepComponent = <StepThree />;
            break;
        case 4:
            stepComponent = <StepFour />;
            break;
        case 5:
            stepComponent = <StepFive />;
            break;
        case 6:
            stepComponent = <StepSix />;
            break;
        case 7:
            stepComponent = <StepSeven />;
            break;
    }

    return (
        <Suspense fallback={null}>
            <div className="flex flex-grow items-center justify-center px-4 py-24">
                {stepComponent}
            </div>
        </Suspense>
    );
}
