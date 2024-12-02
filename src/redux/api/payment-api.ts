import { createApi } from "@reduxjs/toolkit/query/react";

// Config Imports
import { BackendRoutes, SERVER_BASE_URL } from "@/config/backend-routes";

// Utils Imports
import { baseQuery } from "@/utils/base-query";

// Types Imports
import { SuccessAPIResponse } from "@/types/api-types";
import { UserMembershipDetailsResponse } from "@/types/api-types/payment";

// Base URL
const baseUrl = `${SERVER_BASE_URL}${BackendRoutes.payment.base}`;

export const paymentAPI = createApi({
    reducerPath: "paymentAPI",
    baseQuery: baseQuery(baseUrl),
    tagTypes: ["Payment"],
    endpoints: (builder) => ({
        // 1. Create a Subscription Session - POST
        createSubscriptionSession: builder.mutation<
            SuccessAPIResponse<string>,
            { productId: string }
        >({
            query: (subscriptionData) => ({
                url: BackendRoutes.payment.endpoints.create,
                method: "POST",
                body: subscriptionData,
            }),
        }),

        // 2. Cancel a Membership Subscription - POST
        cancelSubscription: builder.mutation<SuccessAPIResponse<null>, void>({
            query: () => ({
                url: BackendRoutes.payment.endpoints.cancel,
                method: "POST",
            }),
        }),

        // 3. Get User Membership Details - GET
        getUserMembershipDetails: builder.query<
            SuccessAPIResponse<UserMembershipDetailsResponse>,
            void
        >({
            query: () => ({
                url: BackendRoutes.payment.endpoints.userMembershipDetails,
                method: "GET",
            }),
        }),
    }),
});

export const {
    useCreateSubscriptionSessionMutation,
    useCancelSubscriptionMutation,
    useGetUserMembershipDetailsQuery,
} = paymentAPI;
