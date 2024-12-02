import { useNavigate } from "react-router-dom";

// Redux Import
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// Jotai Import
import { SetStateAction } from "jotai";

// Components Import
import CreateListingFooter from "@/components/footer/create-listing-footer";
import Text from "@/components/ui/typography/text";

// Icons Import
import { DefaultListingIcon } from "@/components/icons/listing/default-listing";
import { DuplicateIcon } from "@/components/icons/duplicate-icon";

// Types Import
import type { SetAtom } from "@/types";

// Defining Styles
const styles = {
    cardContainer:
        "card-gradient mt-4 flex cursor-pointer items-center gap-5 rounded-md border border-gray-lighter p-6 font-bold text-gray-dark transition duration-200 hover:shadow-card md:p-8 lg:mt-6 lg:p-10 lg:text-xl 2xl:rounded-lg 2xl:p-12",
};

type ContinueListingProps = {
    setStep: SetAtom<[SetStateAction<number>], void>;
    handleCreateNewListing: () => void;
};

// JSX Component
export default function ContinueListing({
    setStep,
    handleCreateNewListing,
}: ContinueListingProps) {
    const navigate = useNavigate();

    // Redux
    const { user } = useSelector((state: RootState) => state.userReducer);

    return (
        <>
            <div className="w-full md:w-[548px] xl:w-[648px]">
                <Text tag="h2" className="text-xl md:!text-2xl 2xl:!text-3xl">
                    Welcome back, {user?.fullName}
                </Text>

                <Text
                    tag="p"
                    className="!mt-2 text-gray-dark text-sm md:!text-base"
                >
                    Continue your listing or create a new one.
                </Text>

                <div
                    onClick={() => {
                        setStep(2);
                    }}
                    className={styles.cardContainer}
                >
                    <DuplicateIcon className="h-auto w-8" />
                    Continue your listing
                </div>

                <div
                    onClick={handleCreateNewListing}
                    className={styles.cardContainer}
                >
                    <DefaultListingIcon className="h-auto w-8" />
                    Create a new listing
                </div>
            </div>
            <CreateListingFooter
                onBack={() => navigate(-1)}
                onNext={() => setStep(2)}
            />
        </>
    );
}
