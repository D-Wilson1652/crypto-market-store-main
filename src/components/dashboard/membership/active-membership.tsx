// TODO: ADD DATA TYPES LATER

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Component Imports
import Button from "@/components/ui/button";
import Tilt from "react-parallax-tilt";
import Empty from "@/components/ui/empty";
import ActiveMembershipSkeleton from "@/components/dashboard/membership/active-membership-skeleton";
import { toast } from "sonner";

// Redux Import
import { useDispatch } from "react-redux";
import {
    useCancelSubscriptionMutation,
    useGetUserMembershipDetailsQuery,
} from "@/redux/api/payment-api";

// Cofig Imports
import { Routes } from "@/config/routes";

// Utils Imports
import { responseToast } from "@/utils/response-toast";

// Data Imports
import { pricingDataAnnualy } from "@/data/pricing-card";

// Utils Functions
const isSubscriptionExpired = (endDate: string): boolean => {
    const currentDateTime = new Date();
    const subscriptionEndDate = new Date(endDate);
    return subscriptionEndDate < currentDateTime;
};

// JSX
const ActiveMembership = () => {
    const navigate = useNavigate();

    // Redux
    const dispatch = useDispatch();
    const [cancelSubscription, { isLoading: isCancelingSubscription }] =
        useCancelSubscriptionMutation();
    const { data, refetch } = useGetUserMembershipDetailsQuery();

    // State
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [membershipData, setMembershipData] = useState<any>({});

    // Effects
    useEffect(() => {
        if (data) {
            setMembershipData(
                pricingDataAnnualy[
                    `${data?.data.membershipName.toLowerCase()}Plan` as keyof typeof pricingDataAnnualy
                ]
            );
        }
    }, [data]);

    // Function
    const handleCancelSubscription = async () => {
        try {
            const response = await cancelSubscription();

            responseToast(response, null, null, dispatch);

            if (response.data) {
                refetch();
            }
        } catch (error) {
            toast.error("Failed to cancel subscription");
            console.error("Failed to cancel subscription", error);
        }
    };

    if (!data) return <ActiveMembershipSkeleton />;

    return (
        <div className="mb-6 mt-12">
            <div className="px-4 lg:px-12 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
                {!isSubscriptionExpired(data?.data.endDate) ? (
                    <>
                        <Tilt
                            tiltMaxAngleX={35}
                            tiltMaxAngleY={35}
                            perspective={900}
                            scale={1.05}
                            transitionSpeed={2000}
                            gyroscope={true}
                            className="max-w-[24rem] max-h-[20rem]"
                        >
                            <img
                                src={membershipData?.image}
                                alt={membershipData?.title}
                                className="w-full h-full"
                            />
                        </Tilt>

                        <div className="max-w-lg">
                            <h2 className="text-3xl font-medium leading-[-2px] text-gray-dark capitalize">
                                {membershipData?.title} Plan
                            </h2>

                            <h3 className="mt-4 text-xl font-bold capitalize text-gray-dark">
                                £{membershipData?.price}
                                <span className="text-xl font-normal">
                                    /yearly
                                </span>
                            </h3>

                            <p className="mt-6 text-base lg:text-lg text-gray">
                                {membershipData?.description}
                            </p>

                            <Button
                                size="xl"
                                className="mt-6 w-full !text-sm !font-bold capitalize lg:!text-base lg:!leading-[26px]"
                                onClick={() => navigate(Routes.public.pricing)}
                                disabled={isCancelingSubscription}
                            >
                                Upgrade Membership
                            </Button>

                            {data.data.active && (
                                <Button
                                    size="xl"
                                    className="mt-6 w-full !text-sm !font-bold capitalize lg:!text-base lg:!leading-[26px]"
                                    variant="flat"
                                    onClick={handleCancelSubscription}
                                    disabled={isCancelingSubscription}
                                    isLoading={isCancelingSubscription}
                                >
                                    Cancel Membership
                                </Button>
                            )}

                            <p className="mt-2 text-xs md:text-sm text-gray">
                                Your membership will be
                                {data.data.active ? " renewed " : " expired "}
                                on{" "}
                                {new Date(
                                    data?.data.endDate as string
                                ).toLocaleDateString()}{" "}
                                -{" "}
                                {new Date(
                                    data?.data.endDate as string
                                ).toLocaleTimeString()}
                            </p>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center gap-6">
                        <Empty text="You don't have an active membership" />

                        <Button
                            size="xl"
                            className="mt-6 w-full !text-sm !font-bold capitalize lg:!text-base lg:!leading-[26px]"
                            onClick={() => navigate(Routes.public.pricing)}
                        >
                            Get Membership
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};
export default ActiveMembership;
