import { createApi } from "@reduxjs/toolkit/query/react";

// Config Imports
import { BackendRoutes, SERVER_BASE_URL } from "@/config/backend-routes";

// Utils Imports
import { baseQuery } from "@/utils/base-query";

// Types Imports
import { SuccessAPIResponse } from "@/types/api-types";
import { Onboarding } from "@/components/auth/onboarding/type";
import { StatsType } from "@/types/api-types/user";

// Base URL
const baseUrl = `${SERVER_BASE_URL}${BackendRoutes.user.base}`;

export const userAPI = createApi({
    reducerPath: "userAPI",
    baseQuery: baseQuery(baseUrl),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        // 1. Get User Onboarding Status - GET
        getOnboardingStatus: builder.query<
            SuccessAPIResponse<{ onboardingStatus: boolean }>,
            void
        >({
            query: () => ({
                url: BackendRoutes.user.endpoints.getOnboardingStatus,
                method: "GET",
            }),
        }),

        // 2. Create User Onboarding - POST
        createOnboarding: builder.mutation<
            SuccessAPIResponse<null>,
            Onboarding
        >({
            query: (onboarding) => ({
                url: BackendRoutes.user.endpoints.createOnboarding,
                method: "POST",
                body: onboarding,
            }),
        }),

        // 3. User Listing Stats - GET
        getListingStats: builder.query<SuccessAPIResponse<StatsType[]>, void>({
            query: () => ({
                url: BackendRoutes.user.endpoints.getListingStats,
                method: "GET",
            }),
        }),
    }),
});

export const {
    useGetOnboardingStatusQuery,
    useCreateOnboardingMutation,
    useGetListingStatsQuery,
} = userAPI;
