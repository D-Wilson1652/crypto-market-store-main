import AddListingHeader from "@/components/header/add-listing";
import AddRealEstateListing from "@/components/add-listing/add-real-estate";
import ProgressBar from "@/components/ui/progress-bar";

// Jotai Imports
import { useAtomValue } from "jotai";
import { stepAtom } from "@/components/add-listing/add-real-estate/context";

const AddListing = () => {
    const step = useAtomValue(stepAtom);

    return (
        <>
            <AddListingHeader />
            <main className="flex flex-grow flex-col">
                <div className="flex flex-grow flex-col">
                    <AddRealEstateListing />
                    <ProgressBar totalSteps={6} currentStep={step} />
                </div>
            </main>
        </>
    );
};
export default AddListing;
