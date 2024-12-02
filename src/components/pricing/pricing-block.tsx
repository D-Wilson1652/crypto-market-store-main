import { useState, useCallback } from "react";

// Redux Import
import { useCreateSubscriptionSessionMutation } from "@/redux/api/payment-api";

// Components import
import PricingCard from "@/components/pricing/pricing-card";
import PricingHero from "@/components/pricing/pricing-hero";
import { toast } from "sonner";

// Data import
import { pricingDataMonthly, pricingDataAnnualy } from "@/data/pricing-card";

export default function PricingBlock() {
    const [state, setState] = useState("annually");

    const [
        createSubscriptionSession,
        { isLoading: isCreatingSubscriptionSession },
    ] = useCreateSubscriptionSessionMutation();

    const handleCreateSubscriptionSession = useCallback(
        async (productId: string) => {
            try {
                const response = await createSubscriptionSession({ productId });

                if (response.data) {
                    window.location.href = response.data.data;
                }
            } catch (error) {
                toast.error("Failed to create subscription session");
                console.error(error);
            }
        },
        [createSubscriptionSession]
    );

    return (
        <div>
            <PricingHero state={state} onClick={(value) => setState(value)} />

            <div className="container-fluid grid w-full !max-w-[1296px] gap-4 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:py-20 3xl:px-0 3xl:py-24">
                {state === "monthly"
                    ? Object.values(pricingDataMonthly).map((pricingData) => (
                          <PricingCard
                              key={`${pricingData.productId}-${pricingData.title}`}
                              pricingData={pricingData}
                              planType={state}
                              handleSubscribe={handleCreateSubscriptionSession}
                              isLoading={isCreatingSubscriptionSession}
                          />
                      ))
                    : Object.values(pricingDataAnnualy).map((pricingData) => (
                          <PricingCard
                              key={`${pricingData.productId}-${pricingData.title}`}
                              pricingData={pricingData}
                              planType={state}
                              handleSubscribe={handleCreateSubscriptionSession}
                              isLoading={isCreatingSubscriptionSession}
                          />
                      ))}
            </div>
        </div>
    );
}
