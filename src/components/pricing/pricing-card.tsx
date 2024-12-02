import clsx from "clsx";
import Button from "@/components/ui/button";
import Tilt from "react-parallax-tilt";

// Icons Import
import { CrownIcon } from "@/components/icons/crown-icon";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

interface PricingCardProps {
    pricingData: {
        isSuggested: boolean;
        price: string;
        productId: string;
        title: string;
        image: string;
        list: {
            text: string;
        }[];
    };
    planType: string;
    handleSubscribe: (productId: string) => void;
    isLoading?: boolean;
}

export default function PricingCard({
    pricingData,
    planType,
    handleSubscribe,
    isLoading,
}: PricingCardProps) {
    return (
        <div
            className={clsx(
                "relative max-w-full h-fit sm:min-h-full rounded-md border border-gray-lighter px-6 py-8 lg:rounded-xl lg:py-10 xl:py-12",
                pricingData.isSuggested && "md:shadow-lg"
            )}
        >
            {pricingData.isSuggested && (
                <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-md bg-[#52ACFF] px-3 py-2 text-white sm:left-12 sm:right-auto sm:top-0 sm:-translate-y-1/2">
                    <CrownIcon className="h-auto w-5" />

                    <span className="text-xs font-bold md:text-sm">
                        Suggested
                    </span>
                </div>
            )}
            <div>
                <h2 className="text-3xl font-medium leading-[-2px] text-gray-dark text-center capitalize">
                    {pricingData.title}
                </h2>

                {pricingData.price ? (
                    <h3 className="mt-4 text-xl font-bold capitalize text-gray-dark text-center">
                        £{pricingData.price}
                        <span className="text-xl font-normal">
                            /{planType}
                        </span>{" "}
                    </h3>
                ) : (
                    <h3 className="mt-4 text-xl font-normal capitalize text-gray-light text-center">
                        <span className="text-xl font-normal">coming soon</span>
                    </h3>
                )}

                <Tilt
                    tiltMaxAngleX={35}
                    tiltMaxAngleY={35}
                    perspective={900}
                    scale={1.05}
                    transitionSpeed={2000}
                    gyroscope={true}
                >
                    <img
                        src={pricingData.image}
                        alt={pricingData.title}
                        className="mt-6 mx-auto"
                    />
                </Tilt>

                <Button
                    size="lg"
                    className="mt-7 w-full !text-sm !font-bold capitalize lg:mt-9 lg:!text-base lg:!leading-[26px]"
                    onClick={() => handleSubscribe(pricingData.productId)}
                    disabled={isLoading}
                >
                    get started
                </Button>
            </div>
            <ul className="mt-8 lg:mt-6">
                {pricingData.list.map((item, index) => (
                    <li
                        key={index}
                        className="flex items-center py-2 text-sm font-normal capitalize leading-6 first:pt-0 last:pb-0 lg:text-base"
                    >
                        <div className="w-4 lg:w-5">
                            <CheckCircleIcon className="h-4 w-4 rounded-full bg-white text-green-400 lg:h-5 lg:w-5" />
                        </div>

                        <span className="ml-3 inline-block text-gray-dark">
                            {item.text}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
