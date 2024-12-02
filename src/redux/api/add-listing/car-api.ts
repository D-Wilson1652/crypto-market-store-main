import { createApi } from "@reduxjs/toolkit/query/react";

// Config Imports
import { BackendRoutes, SERVER_BASE_URL } from "@/config/backend-routes";

// Utils Imports
import { baseQuery } from "@/utils/base-query";

// Types Imports
import { SuccessAPIResponse } from "@/types/api-types";
import {
    AddListingCarRequest,
    AddListingCarResponse,
} from "@/types/api-types/add-listing/car";

// Base URL
const baseUrl = `${SERVER_BASE_URL}${BackendRoutes.addListing.car.base}`;

export const addListingCarAPI = createApi({
    reducerPath: "addListingCarAPI",
    baseQuery: baseQuery(baseUrl),
    tagTypes: ["AddListingCar"],
    endpoints: (builder) => ({
        // 1. Create Car Listing - POST
        createCarListing: builder.mutation<
            SuccessAPIResponse<AddListingCarResponse>,
            AddListingCarRequest
        >({
            query: (addListingCar) => ({
                url: BackendRoutes.addListing.car.endpoints.create,
                method: "POST",
                body: addListingCar,
            }),
        }),

        // 2. Upload Car Media - POST
        uploadCarMedia: builder.mutation<SuccessAPIResponse<null>, FormData>({
            query: (carMedia) => ({
                url: BackendRoutes.addListing.car.endpoints.uploadMedia,
                method: "POST",
                body: carMedia,
            }),
        }),
    }),
});

export const { useCreateCarListingMutation, useUploadCarMediaMutation } =
    addListingCarAPI;
