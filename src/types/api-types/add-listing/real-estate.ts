import type { AddListingRealEstate } from "@/types/add-listing/real-estate";

export type AddListingRealEstateRequest = AddListingRealEstate & {
    listingDate: string;
};

export type AddListingRealEstateResponse = AddListingRealEstate & {
    id: string;
};
