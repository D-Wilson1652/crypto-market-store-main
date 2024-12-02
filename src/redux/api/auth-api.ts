import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Config Imports
import { BackendRoutes, SERVER_BASE_URL } from "@/config/backend-routes";

// Types Imports
import { User } from "@/types/api-types/user";
import { SignInRequest, SignUpRequest } from "@/types/api-types/auth";
import { SuccessAPIResponse } from "@/types/api-types";

// Base URL
const baseUrl = `${SERVER_BASE_URL}${BackendRoutes.auth.base}`;

export const authAPI = createApi({
    reducerPath: "authAPI",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        // 1. Signup - New User - POST
        signUp: builder.mutation<SuccessAPIResponse<User>, SignUpRequest>({
            query: (newUser) => ({
                url: BackendRoutes.auth.endpoints.signUp,
                method: "POST",
                body: newUser,
            }),
        }),

        // 2. Login - Existing User - POST
        signIn: builder.mutation<SuccessAPIResponse<User>, SignInRequest>({
            query: (userData) => ({
                url: BackendRoutes.auth.endpoints.signIn,
                method: "POST",
                body: userData,
            }),
        }),
    }),
});

export const { useSignUpMutation, useSignInMutation } = authAPI;
