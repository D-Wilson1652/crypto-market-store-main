import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Reducer Imports
import { userReducer } from "@/redux/reducer/user-reducer";

// RTK Query Imports
import { authAPI } from "@/redux/api/auth-api";
import { userAPI } from "@/redux/api/user-api";
import { addListingCarAPI } from "@/redux/api/add-listing/car-api";
import { addListingRealEstateAPI } from "@/redux/api/add-listing/real-estate-api";
import { paymentAPI } from "@/redux/api/payment-api";

// Config Imports
import { SERVER_BASE_URL } from "@/config/backend-routes";

// Persist Configurations for userReducer
const userPersistConfig = {
    key: "user-cms-keerh833cvg",
    storage,
    whitelist: ["user", "isAuthenticated", "loading"],
};

const persistedUserReducer = persistReducer(
    userPersistConfig,
    userReducer.reducer
);

export const server = SERVER_BASE_URL;

const store = configureStore({
    reducer: {
        [authAPI.reducerPath]: authAPI.reducer,
        [userAPI.reducerPath]: userAPI.reducer,
        [addListingCarAPI.reducerPath]: addListingCarAPI.reducer,
        [addListingRealEstateAPI.reducerPath]: addListingRealEstateAPI.reducer,
        [paymentAPI.reducerPath]: paymentAPI.reducer,
        [userReducer.name]: persistedUserReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(
            authAPI.middleware,
            userAPI.middleware,
            addListingCarAPI.middleware,
            addListingRealEstateAPI.middleware,
            paymentAPI.middleware
        ),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export { store, persistor };
