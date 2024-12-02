import { createApi } from "@reduxjs/toolkit/query/react";

// Config Imports
import { BackendRoutes, SERVER_BASE_URL } from "@/config/backend-routes";

// Utils Imports
import { baseQuery } from "@/utils/base-query";

// Types Imports
import { SuccessAPIResponse } from "@/types/api-types";
import {
    AddListingRealEstateRequest,
    AddListingRealEstateResponse,
} from "@/types/api-types/add-listing/real-estate";

// Base URL
const baseUrl = `${SERVER_BASE_URL}${BackendRoutes.addListing.realEstate.base}`;

export const addListingRealEstateAPI = createApi({
    reducerPath: "addListingRealEstateAPI",
    baseQuery: baseQuery(baseUrl),
    tagTypes: ["AddListingRealEstate"],
    endpoints: (builder) => ({
        // 1. Create Real Estate Listing - POST
        createRealEstateListing: builder.mutation<
            SuccessAPIResponse<AddListingRealEstateResponse>,
            AddListingRealEstateRequest
        >({
            query: (addListingRealEstate) => ({
                url: BackendRoutes.addListing.realEstate.endpoints.create,
                method: "POST",
                body: addListingRealEstate,
            }),
        }),

        // 2. Upload Real Estate Media - POST
        uploadRealEstateMedia: builder.mutation<
            SuccessAPIResponse<null>,
            FormData
        >({
            query: (realEstateMedia) => ({
                url: BackendRoutes.addListing.realEstate.endpoints.uploadMedia,
                method: "POST",
                body: realEstateMedia,
            }),
        }),
    }),
});

export const {
    useCreateRealEstateListingMutation,
    useUploadRealEstateMediaMutation,
} = addListingRealEstateAPI;
