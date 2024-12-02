import { toast } from "sonner";

// Types Import
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import {
    Action,
    Dispatch,
    SerializedError,
    UnknownAction,
} from "@reduxjs/toolkit";
import { SuccessAPIResponse, ErrorAPIResponse } from "@/types/api-types";
import { NavigateFunction } from "react-router-dom";

type ErrorToastType =
    | FetchBaseQueryError
    | (SerializedError & { data?: ErrorAPIResponse | null });

type ResponseType<T> =
    | {
          data: SuccessAPIResponse<T>;
      }
    | {
          error: ErrorToastType;
      };

export const responseToast = <T>(
    response: ResponseType<T>,
    navigate?: NavigateFunction | null,
    url?: string | null,
    dispatch?: Dispatch<UnknownAction>,
    action?: Action,
    navPrioritize?: boolean
) => {
    if ("data" in response) {
        toast.success(response.data.message);

        if (dispatch && action && navigate && url && navPrioritize) {
            dispatch(action as Action);

            setTimeout(() => {
                navigate(url);
            }, 0);

            return;
        }

        if (dispatch && action) {
            dispatch(action as Action);
        }

        if (navigate && url) navigate(url);
    } else {
        const error = response.error as FetchBaseQueryError;
        const errorData = error.data as ErrorAPIResponse | null;

        if (errorData) {
            toast.error(errorData.message);
        } else {
            toast.error("An unexpected error occurred.");
        }
    }
};
