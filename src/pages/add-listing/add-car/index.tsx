import AddListingHeader from "@/components/header/add-listing";
import AddCarListing from "@/components/add-listing/add-car";
import ProgressBar from "@/components/ui/progress-bar";

// Jotai Imports
import { useAtomValue } from "jotai";
import { stepAtom } from "@/components/add-listing/add-car/context";

const AddListing = () => {
    const step = useAtomValue(stepAtom);

    return (
        <>
            <AddListingHeader />
            <main className="flex flex-grow flex-col">
                <div className="flex flex-grow flex-col">
                    <AddCarListing />
                    <ProgressBar totalSteps={7} currentStep={step} />
                </div>
            </main>
        </>
    );
};
export default AddListing;
