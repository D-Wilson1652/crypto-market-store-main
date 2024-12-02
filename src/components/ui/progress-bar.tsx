import clsx from "clsx";

type ProgressBarProps = {
    totalSteps: number;
    currentStep: number;
};

export default function ProgressBar({
    totalSteps,
    currentStep,
}: ProgressBarProps) {
    return (
        <div
            className={clsx(
                "fixed inset-x-0 bottom-[60px] z-20 w-full bg-gray-lighter lg:bottom-[72px]",
                currentStep === totalSteps && "hidden"
            )}
        >
            <span
                className="block h-[3px] bg-gray-dark transition-all duration-200"
                style={{ width: `${(100 / totalSteps) * currentStep}%` }}
            ></span>
        </div>
    );
}
