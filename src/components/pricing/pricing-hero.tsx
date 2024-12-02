import clsx from "clsx";
import Text from "@/components/ui/typography/text";
import Button from "@/components/ui/button";

export default function PricingHero({
    state,
    onClick,
}: {
    state: string;
    onClick: (key: string) => void;
}) {
    return (
        <div className="mt-8 text-center lg:mt-20 2xl:mt-24">
            <div className="mx-auto max-w-4xl">
                <Text tag="h1" className="text-[28px] font-bold leading-10">
                    Select your membership tier
                </Text>
                <Text className="mt-2 !text-sm 2xl:mt-4">
                    Choose the NFT membership tier that aligns with your selling
                    goals and requirements. Our Carbon, Platinum, and Diamond
                    tiers offer a range of benefits designed to cater to sellers
                    at different stages of their luxury e-commerce journey. Each
                    membership card is minted on the blockchain, providing a
                    secure and transparent way to access your selling
                    privileges. Compare the features and selling limits of each
                    tier to find the perfect fit for your business. Upgrade your
                    membership at any time as your selling needs evolve.
                </Text>
            </div>
            <div className="mt-8 inline-block rounded-md bg-[#F2F4F7] p-1 2xl:mt-14">
                <Button
                    size="lg"
                    className={clsx(
                        "focus:!ring-0 2xl:!p-[11px_26px]",
                        state === "monthly"
                            ? "bg-gray-dark text-white"
                            : "!bg-transparent !text-gray-dark"
                    )}
                    onClick={() => onClick("monthly")}
                >
                    Monthly Plan
                </Button>
                <Button
                    size="lg"
                    className={clsx(
                        "focus:!ring-0 2xl:!p-[11px_26px]",
                        state === "annually"
                            ? "bg-gray-dark text-white"
                            : "!bg-transparent !text-gray-dark"
                    )}
                    onClick={() => onClick("annually")}
                >
                    Annually Plan
                </Button>
            </div>
        </div>
    );
}
