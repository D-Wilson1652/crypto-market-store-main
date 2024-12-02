import Button from "@/components/ui/button";

import type { RealEstateListing } from "@/data/real-estate-listings";

type TopSectionProps = {
    listingData: RealEstateListing;
};

const TopSection = ({ listingData }: TopSectionProps) => {
    return (
        <div className="flex flex-col lg:flex-row justify-between w-full">
            <div className="lg:w-8/12">
                <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-medium text-[#272343]">
                    {listingData.title}
                </h1>

                {listingData.subTitle && (
                    <h2 className="text-lg md:text-xl 2xl:text-2xl font-medium text-[#272343] mt-6">
                        {listingData.subTitle}
                    </h2>
                )}

                <p className="mt-6 text-gray-600 text-sm">
                    {listingData.description}
                </p>

                {listingData.price && (
                    <div className="flex items-center gap-12 mt-12">
                        <p className="text-2xl font-semibold text-gray-800">
                            {listingData.price}
                        </p>
                        <Button size="lg">Buy Now</Button>
                    </div>
                )}
            </div>
        </div>
    );
};
export default TopSection;
