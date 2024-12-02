import RealEstateCommonCarousel from "@/components/categories/real-estate/common/real-estate-common-carousel";

import type { RealEstateListing } from "@/data/real-estate-listings";

type NewToMarketProps = {
    realEstateListings: RealEstateListing[];
};

const NewToMarket = ({ realEstateListings }: NewToMarketProps) => {
    const realEstateListingsData = realEstateListings;

    return (
        <div className="container px-4 sm:px-6 pt-5 pb-10 lg:pt-10 lg:pb-20">
            <RealEstateCommonCarousel
                carouselData={realEstateListingsData}
                titleClassname="mb-6"
                title="New to Market"
            />
        </div>
    );
};
export default NewToMarket;
