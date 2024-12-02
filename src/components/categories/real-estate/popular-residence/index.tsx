import RealEstateCommonCarousel from "@/components/categories/real-estate/common/real-estate-common-carousel";
import type { RealEstateListing } from "@/data/real-estate-listings";

type PopularResidenceProps = {
    realEstateListings: RealEstateListing[];
};

const PopularResidence = ({ realEstateListings }: PopularResidenceProps) => {
    return (
        <div
            className="container px-4 sm:px-6 pb-10 lg:pb-20"
            id="categories-real-estate-popular-residence"
        >
            <RealEstateCommonCarousel
                carouselData={realEstateListings}
                titleClassname="text-lg 2xl:text-xl text-[#272343] mb-4"
                title="Popular Residence"
            />
        </div>
    );
};
export default PopularResidence;
