import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types Import
import { UserReducerInitialState } from "@/types/reducer-types";
import { User } from "@/types/api-types/user";

const initialState: UserReducerInitialState = {
    user: null,
    isAuthenticated: false,
    loading: true,
};

export const userReducer = createSlice({
    name: "userReducer",
    initialState,
    reducers: {
        signInUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.loading = false;
        },
        signUpUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.loading = false;
        },
        logoutUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.loading = false;
        },
        updateUserOnboardingStatus: (state) => {
            if (state.user) {
                state.user.onboardingStatus = true;
            }
        },
    },
});

export const {
    logoutUser,
    signInUser,
    signUpUser,
    updateUserOnboardingStatus,
} = userReducer.actions;
