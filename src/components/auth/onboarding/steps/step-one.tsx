import { useNavigate } from "react-router-dom";

// Jotai Import
import { useSetAtom } from "jotai";
import { onboardingStepAtom } from "@/components/auth/onboarding/context";

// Components Import
import CreateListingFooter from "@/components/footer/create-listing-footer";
import TextCard from "@/components/ui/typography/text-card";

// Config Import
import { Routes } from "@/config/routes";

// Data Import
import { onboardingData } from "@/data/onboarding.";
import {
    ClipboardDocumentCheckIcon,
    PlayIcon,
} from "@heroicons/react/24/outline";

// Defining Styles
const styles = {
    secondaryTitle: "text-lg md:!text-xl 2xl:!text-2xl",
    text: "!mt-2 text-gray-dark text-sm md:!text-base",
    bottomCard:
        "card-gradient mt-4 flex cursor-pointer items-center gap-5 rounded-md border border-gray-lighter p-6 font-bold text-gray-dark transition duration-200 hover:shadow-card md:p-8 lg:mt-6 lg:p-10 lg:text-lg 2xl:rounded-lg 2xl:p-12",
};
const { secondaryTitle, text, bottomCard } = styles;

// JSX Component
export default function StepOne() {
    const navigate = useNavigate();

    // Jotai
    const setStep = useSetAtom(onboardingStepAtom);

    const data = onboardingData;

    return (
        <>
            <div className="w-full md:w-[548px] xl:w-[648px]">
                <TextCard
                    titleTag="h1"
                    title="Before you start"
                    titleClassName="text-xl md:!text-2xl 2xl:!text-3xl !mt-0"
                    textClassName={text}
                    text={
                        "Please read the following guidelines before you start. By proceeding, you agree to the following terms and conditions."
                    }
                />

                {data.map((item, index) => (
                    <TextCard
                        key={index}
                        title={item.title}
                        text={item.text}
                        titleClassName={secondaryTitle}
                        textClassName={text}
                    />
                ))}

                <div
                    onClick={() => {
                        setStep(2);
                    }}
                    className={bottomCard}
                >
                    <ClipboardDocumentCheckIcon className="h-auto w-8" />
                    Start the onboarding process
                </div>

                <div
                    onClick={() => {
                        navigate(Routes.public.home);
                    }}
                    className={bottomCard}
                >
                    <PlayIcon className="h-auto w-8" />
                    Skip the onboarding process for now
                </div>
            </div>

            <CreateListingFooter onBack={() => navigate(-1)} hideNext />
        </>
    );
}
