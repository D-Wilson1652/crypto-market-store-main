import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/24/solid";

// Components Import
import Text from "@/components/ui/typography/text";
import Button from "@/components/ui/button";

// Config Import
import { Routes } from "@/config/routes";

// Redux Import
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// JSX Component
export default function DashboardHero() {
    const navigate = useNavigate();
    const { user } = useSelector((state: RootState) => state.userReducer);

    const handleAddListing = useCallback(() => {
        navigate(Routes.public.sellWithUs);
    }, [navigate]);

    return (
        <div className="mt-8 flex items-center justify-between lg:mt-12 2xl:mt-16">
            <div>
                <Text tag="h3" className="text-xl">
                    Hello, {user?.fullName}
                </Text>

                <Text className="mt-2 text-sm text-gray lg:mt-3">
                    Welcome back to your dashboard.
                </Text>
            </div>

            <div>
                <Button
                    size="xl"
                    rounded="pill"
                    className="!p-2 capitalize text-white sm:rounded-md sm:!px-8 sm:!py-[10px]"
                    onClick={handleAddListing}
                >
                    <PlusIcon className="h-auto w-5 sm:mr-3" />

                    <span className="hidden sm:block">Add Listing</span>
                </Button>
            </div>
        </div>
    );
}
