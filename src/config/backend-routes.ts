export const SERVER_BASE_URL = "https://backend.cryptomarketstore.com";

export const BackendRoutes = {
    auth: {
        base: "/api/v1/auth/",
        endpoints: {
            signIn: "signin",
            signUp: "signup",
        },
    },
    user: {
        base: "/api/v1/users/",
        endpoints: {
            getOnboardingStatus: "onboarding/status",
            createOnboarding: "onboarding",
            getListingStats: "listing/stats",
        },
    },
    addListing: {
        realEstate: {
            base: "/api/v1/real-estates/",
            endpoints: {
                create: "create",
                uploadMedia: "upload-media",
            },
        },
        car: {
            base: "/api/v1/cars/",
            endpoints: {
                create: "create",
                uploadMedia: "upload-media",
            },
        },
    },
    payment: {
        base: "/api/v1/membership/",
        endpoints: {
            create: "subscriptions/new",
            cancel: "cancel",
            userMembershipDetails: "user/details",
        },
    },
};
