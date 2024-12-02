import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Routes as AppRoutes } from "@/config/routes";

// Components Import
import SpinnerLoader from "@/components/ui/loader/spinner-loader";
import ProtectedRoute from "@/components/routes/protected-route";

// Redux Import
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// Pages Import
const Home = lazy(() => import("@/pages/home"));
const SellWithUs = lazy(() => import("@/pages/sell-with-us"));
const TermsAndConditions = lazy(() => import("@/pages/terms-and-conditions"));
const ComingSoon = lazy(() => import("@/pages/coming-soon"));
const Pricing = lazy(() => import("@/pages/pricing"));
const NotFound = lazy(() => import("@/pages/not-found"));
const PaymentSuccess = lazy(() => import("@/pages/payment/payment-success"));
const PaymentCancel = lazy(() => import("@/pages/payment/payment-cancel"));
const User = lazy(() => import("@/pages/user"));

// Categories Pages Import
const RealEstate = lazy(() => import("@/pages/categories/real-estate"));
const Helicopter = lazy(() => import("@/pages/categories/helicopter"));
const Motorcycle = lazy(() => import("@/pages/categories/motorcycle"));
const Jet = lazy(() => import("@/pages/categories/jet"));
const Watch = lazy(() => import("@/pages/categories/watch"));
const Car = lazy(() => import("@/pages/categories/car"));

// Sub Categories Pages Import
const RealEstateSubCategory = lazy(
    () => import("@/pages/sub-categories/real-estate")
);
const CarSubCategory = lazy(() => import("@/pages/sub-categories/car"));
const WatchSubCategory = lazy(() => import("@/pages/sub-categories/watch"));

// Auth Pages Import
const SignIn = lazy(() => import("@/pages/auth/sign-in"));
const SignUp = lazy(() => import("@/pages/auth/sign-up"));

// Add Listing Pages Import - Private Route
const AddRealEstateListing = lazy(
    () => import("@/pages/add-listing/add-real-estate")
);
const AddCarListing = lazy(() => import("@/pages/add-listing/add-car"));

// Private Routes
const Onboarding = lazy(() => import("@/pages/auth/onboarding"));
const OnboardingStepEnd = lazy(
    () => import("@/pages/auth/onboarding/step-end")
);

// Dashboard Pages - Private Route
const Dashboard = lazy(() => import("@/pages/dashboard/overview"));
const AllListings = lazy(() => import("@/pages/dashboard/all-listings"));
const Membership = lazy(() => import("@/pages/dashboard/membership"));

function AppRoutesConfig() {
    const { isAuthenticated, user } = useSelector(
        (state: RootState) => state.userReducer
    );

    return (
        <Suspense fallback={<SpinnerLoader />}>
            <Routes>
                {/* Public Routes */}
                <Route path={AppRoutes.public.home} element={<Home />} />
                <Route
                    path={AppRoutes.public.sellWithUs}
                    element={<SellWithUs />}
                />
                <Route
                    path={AppRoutes.public.termsAndConditions}
                    element={<TermsAndConditions />}
                />
                <Route
                    path={AppRoutes.public.comingSoon}
                    element={<ComingSoon />}
                />
                <Route path={AppRoutes.public.pricing} element={<Pricing />} />
                <Route
                    path={AppRoutes.public.userId(":id")}
                    element={<User />}
                />
                {/* Public Routes End */}

                {/* Auth Routes */}
                <Route
                    path={AppRoutes.auth.signIn}
                    element={
                        <>
                            <SignIn />
                        </>
                    }
                />
                <Route
                    path={AppRoutes.auth.signUp}
                    element={
                        <ProtectedRoute isAuthenticated={!isAuthenticated}>
                            <SignUp />
                        </ProtectedRoute>
                    }
                />
                {/* Auth Routes - End */}

                {/* Private - logged In  */}
                <Route
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated} />
                    }
                >
                    <Route
                        path={AppRoutes.private.onboardingStepEnd}
                        element={<OnboardingStepEnd />}
                    />

                    {/* Categories */}
                    <Route
                        path={AppRoutes.public.realEstate}
                        element={<RealEstate />}
                    />
                    <Route
                        path={AppRoutes.public.helicopter}
                        element={<Helicopter />}
                    />
                    <Route
                        path={AppRoutes.public.motorcycle}
                        element={<Motorcycle />}
                    />
                    <Route path={AppRoutes.public.jet} element={<Jet />} />
                    <Route path={AppRoutes.public.watch} element={<Watch />} />
                    <Route path={AppRoutes.public.car} element={<Car />} />
                    {/* Categories END */}

                    {/* Sub Categories */}
                    <Route
                        path={AppRoutes.private.subCategories.realEstate(":id")}
                        element={<RealEstateSubCategory />}
                    />
                    <Route
                        path={AppRoutes.private.subCategories.car(":id")}
                        element={<CarSubCategory />}
                    />
                    <Route
                        path={AppRoutes.private.subCategories.watch(":id")}
                        element={<WatchSubCategory />}
                    />
                    {/* Sub Categories END */}

                    {/* Add Listings */}
                    <Route
                        path={AppRoutes.private.addListing.realEstate}
                        element={<AddRealEstateListing />}
                    />
                    <Route
                        path={AppRoutes.private.addListing.car}
                        element={<AddCarListing />}
                    />
                    {/* Add Listings End */}

                    {/* Payment Status */}
                    <Route
                        path={AppRoutes.private.payment.success}
                        element={<PaymentSuccess />}
                    />
                    <Route
                        path={AppRoutes.private.payment.cancel}
                        element={<PaymentCancel />}
                    />
                    {/* Payment Status End */}

                    {/* Dashboard */}
                    <Route
                        path={AppRoutes.private.dashboard.overview}
                        element={<Dashboard />}
                    />
                    <Route
                        path={AppRoutes.private.dashboard.allListings}
                        element={<AllListings />}
                    />
                    <Route
                        path={AppRoutes.private.dashboard.membership}
                        element={<Membership />}
                    />
                    {/* Dashboard End */}
                </Route>

                {/* Onboarding ==> isAuthenticated but !isOnboarded */}
                <Route
                    path={AppRoutes.private.onboarding}
                    element={
                        <ProtectedRoute
                            isAuthenticated={isAuthenticated}
                            isOnboarded={user?.onboardingStatus}
                        >
                            <Onboarding />
                        </ProtectedRoute>
                    }
                />

                {/* Private - logged In End */}

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
                {/* 404 End */}
            </Routes>
        </Suspense>
    );
}

export default AppRoutesConfig;
