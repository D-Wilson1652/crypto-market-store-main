import { Link, useNavigate } from "react-router-dom";

// Components Import
import Text from "@/components/ui/typography/text";
import Section from "@/components/ui/section";
import Button from "@/components/ui/button";

// Types Import
import type { SellerTypes } from "@/data/listing-details";

// Config Imports
import { Routes } from "@/config/routes";

// Lib Import
import { cn } from "@/lib/utils";

interface SellerProps {
    seller: SellerTypes;
    completeProfile?: boolean;
}

export default function SellerBlock({ seller, completeProfile }: SellerProps) {
    const navigate = useNavigate();

    return (
        <Section
            className="py-5 xl:py-7"
            title="seller info"
            titleClassName="text-xl md:!text-[22px] 2xl:!text-2xl mb-1.5 !font-semibold"
        >
            <div className="mb-6 flex items-center pt-4">
                <Link to={Routes.public.userId(seller.id)}>
                    <div
                        className={cn(
                            "relative overflow-hidden rounded-full",
                            completeProfile
                                ? "w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
                                : "w-16 h-16 sm:w-20 sm:h-20"
                        )}
                    >
                        <img
                            src={seller.img}
                            alt={seller.name}
                            className="absolute object-cover inset-0 w-full h-full"
                        />
                    </div>
                </Link>
                <div className="ml-3 md:ml-6">
                    <Text tag="h6">
                        <Link
                            to={Routes.public.userId(seller.id)}
                            className="text-gray-dark"
                        >
                            {seller.name}
                        </Link>
                    </Text>
                    <Text className="text-gray-dark">{seller.email}</Text>
                </div>
            </div>
            <div className="mb-6 grid grid-cols-1 gap-3 leading-[22px] sm:grid-cols-2 md:gap-5 md:text-base">
                <p>
                    <span className="text-gray">Member since: </span>
                    <span className="ml-1 text-gray-dark">
                        {seller.memberSince}
                    </span>
                </p>
                <p>
                    <span className="text-gray">Languages spoken: </span>
                    {seller.languages.map((item: string, index: number) => (
                        <span key={item} className="ml-1 text-gray-dark">
                            {item}
                            {index < seller.languages.length - 1 && " &"}
                        </span>
                    ))}
                </p>
                <p>
                    <span className="text-gray">Sell rate: </span>
                    <span className="ml-1 text-gray-dark">
                        More than {seller.sellRate}%
                    </span>
                </p>

                <p>
                    <span className="text-gray">Total listings: </span>
                    <span className="ml-1 text-gray-dark">
                        {seller.totalListings}
                    </span>
                </p>
                {completeProfile && (
                    <>
                        <p>
                            <span className="text-gray">Total sales: </span>
                            <span className="ml-1 text-gray-dark">
                                {seller.totalSales}
                            </span>
                        </p>
                        <p>
                            <span className="text-gray">Phone: </span>
                            <span className="ml-1 text-gray-dark">
                                {seller.phone}
                            </span>
                        </p>
                    </>
                )}
            </div>
            {!completeProfile && (
                <Button
                    size="lg"
                    variant="outline"
                    className="w-full !border-gray-dark !px-4 !py-[8px] !font-bold text-gray-dark hover:bg-gray-dark hover:text-white md:w-auto md:border-gray lg:!px-[28px] lg:!py-[14px]"
                    onClick={() => navigate(Routes.public.userId(seller.id))}
                >
                    View Profile
                </Button>
            )}
        </Section>
    );
}
