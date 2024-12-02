export const Routes = {
    auth: {
        signIn: "/sign-in",
        signUp: "/sign-up",
    },
    public: {
        home: "/",
        realEstate: "/real-estate",
        helicopter: "/helicopter",
        motorcycle: "/motorcycle",
        jet: "/jet",
        watch: "/watch",
        car: "/car",
        sellWithUs: "/sell-with-us",
        termsAndConditions: "/terms-and-conditions",
        comingSoon: "/coming-soon",
        pricing: "/pricing",
        userId: (id: string) => `/user/${id}`,
    },
    private: {
        onboarding: "/onboarding",
        onboardingStepEnd: "/onboarding/step-end",
        payment: {
            success: "/payment/success",
            cancel: "/payment/cancel",
        },
        addListing: {
            realEstate: "/add-listing/real-estate",
            watch: "/add-listing/watch",
            car: "/add-listing/car",
        },
        subCategories: {
            realEstate: (id: string) => `/real-estate/${id}`,
            car: (id: string) => `/car/${id}`,
            watch: (id: string) => `/watch/${id}`,
        },
        dashboard: {
            overview: "/dashboard",
            allListings: "/dashboard/listings",
            editListing: (id: string) => `/dashboard/listings/${id}`,
            membership: "/dashboard/membership",
        },
        admin: {
            dashboard: "/admin/dashboard",
        },
    },
};
