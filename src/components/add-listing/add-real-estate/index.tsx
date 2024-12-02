import { lazy, Suspense, useCallback } from "react";
import { db } from "./model/db";

// Jotai Imports
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { RESET } from "jotai/utils";
import {
    stepAtom,
    storeAtom,
} from "@/components/add-listing/add-real-estate/context";

// Data Import
import { createListingGuideData } from "@/data/create-listing";
import Success from "@/components/ui/success";

// Components Import
const CreateListing = lazy(
    () => import("@/components/add-listing/common/create-listing")
);
const ContinueListing = lazy(
    () => import("@/components/add-listing/common/continue-listing")
);
const ListingInfo = lazy(
    () => import("@/components/add-listing/add-real-estate/steps/listing-info")
);
const AddLocation = lazy(
    () => import("@/components/add-listing/add-real-estate/steps/add-location")
);
const AddFeatures = lazy(
    () => import("@/components/add-listing/add-real-estate/steps/add-features")
);
const AddListingPhotos = lazy(
    () => import("@/components/add-listing/add-real-estate/steps/upload-photos")
);

// JSX Component
export default function AddRealEstateListing() {
    let stepComponent;

    // Jotai
    const step = useAtomValue(stepAtom);
    const setStep = useSetAtom(stepAtom);
    const setStore = useSetAtom(storeAtom);
    const [store] = useAtom(storeAtom);

    // funcitons
    const handleResetStore = () => {
        setStore(RESET);
    };

    // functions
    const handleCreateNewListing = useCallback(() => {
        setStore(RESET);
        setStep(2);
        db.listingImages.clear();
    }, [setStore, setStep]);

    switch (step) {
        case 1:
            if (store.title === "") {
                stepComponent = (
                    <CreateListing
                        setStep={setStep}
                        handleResetStore={handleResetStore}
                        data={createListingGuideData}
                    />
                );
            } else {
                stepComponent = (
                    <ContinueListing
                        setStep={setStep}
                        handleCreateNewListing={handleCreateNewListing}
                    />
                );
            }
            break;
        case 2:
            stepComponent = <ListingInfo />;
            break;
        case 3:
            stepComponent = <AddLocation />;
            break;
        case 4:
            stepComponent = <AddFeatures />;
            break;
        case 5:
            stepComponent = <AddListingPhotos />;
            break;
        case 6:
            stepComponent = (
                <Success setStep={setStep} text="Real Estate Listing Created" />
            );
            break;
    }

    return (
        <Suspense fallback={null}>
            <div className="flex flex-grow items-center justify-center px-4 pb-24 pt-10">
                {stepComponent}
            </div>
        </Suspense>
    );
}
