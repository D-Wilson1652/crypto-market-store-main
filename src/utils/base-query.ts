import {
    fetchBaseQuery,
    FetchArgs,
    BaseQueryFn,
    FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "@/redux/store";
import { logoutUser } from "@/redux/reducer/user-reducer";
import { toast } from "sonner";

// Base query function
export const baseQuery = (
    baseUrl: string
): BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> => {
    const baseFetch = fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).userReducer.user?.token;

            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }

            return headers;
        },
    });

    return async (args, api, extraOptions) => {
        const result = await baseFetch(args, api, extraOptions);

        if (result.error && result.error.status === 403) {
            api.dispatch(logoutUser());
            toast.error("Session expired. Please login again.");
        }

        return result;
    };
};
