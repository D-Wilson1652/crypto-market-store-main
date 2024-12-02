import { useNavigate } from "react-router-dom";

// Jotai Import
import { SetStateAction } from "jotai";

// Components Import
import CreateListingFooter from "@/components/footer/create-listing-footer";
import TextCard from "@/components/ui/typography/text-card";

// Icons Import
import { DefaultListingIcon } from "@/components/icons/listing/default-listing";

// Types Import
import type { SetAtom } from "@/types";

// Defining Styles
const styles = {
    secondaryTitle: "text-lg md:!text-xl 2xl:!text-2xl",
    text: "!mt-2 text-gray-dark text-sm md:!text-base",
};
const { secondaryTitle, text } = styles;

type Data = {
    title: string;
    text: string;
};

type CreateListingProps = {
    setStep: SetAtom<[SetStateAction<number>], void>;
    handleResetStore: () => void;
    data: Data[];
};

// JSX Component
export default function CreateListing({
    setStep,
    handleResetStore,
    data,
}: CreateListingProps) {
    const navigate = useNavigate();

    return (
        <>
            <div className="w-full md:w-[548px] xl:w-[648px]">
                <TextCard
                    titleTag="h1"
                    title="Before you start"
                    titleClassName="text-xl md:!text-2xl 2xl:!text-3xl !mt-0"
                    textClassName={text}
                    text={
                        "Please read the following guidelines before you start creating your listing."
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

                <div>
                    <div
                        onClick={() => {
                            handleResetStore();
                            setStep(2);
                        }}
                        className="card-gradient mt-4 flex cursor-pointer items-center gap-5 rounded-md border border-gray-lighter p-6 font-bold text-gray-dark transition duration-200 hover:shadow-card md:p-8 lg:mt-6 lg:p-10 lg:text-xl 2xl:rounded-lg 2xl:p-12"
                    >
                        <DefaultListingIcon className="h-auto w-8" />
                        Create a new listing
                    </div>
                </div>
            </div>

            <CreateListingFooter
                onBack={() => navigate(-1)}
                hideNext
            />
        </>
    );
}
