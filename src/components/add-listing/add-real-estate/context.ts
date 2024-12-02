import { atomWithStorage } from "jotai/utils";
import { atom } from "jotai";

import type { AddListingRealEstate } from "@/types/add-listing/real-estate";

export const stepAtom = atom(1);
export const storeAtom = atomWithStorage<AddListingRealEstate>(
    "add-listing-real-estate-3n2hbt1g0ho",
    {
        title: "",
        description: "",
        price: 0,
        specifications: {
            numOfBeds: 0,
            numOfBaths: 0,
            areaInSqft: 0,
            pricePerSqft: 0,
        },
        country: "",
        city: "",
        region: "",
        location: {
            latitude: 0,
            longitude: 0,
        },
        featureIds: [],
        propertyType: "",
        propertySubType: "",
    }
);
