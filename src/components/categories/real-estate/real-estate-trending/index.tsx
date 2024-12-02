import Text from "@/components/ui/typography/text";
import RealEstateCommonCarousel from "@/components/categories/real-estate/common/real-estate-common-carousel";
import Button from "@/components/ui/button";

import type { RealEstateListing } from "@/data/real-estate-listings";

type RealEstateTrendingProps = {
    realEstateListings: RealEstateListing[];
};

const RealEstateTrending = ({
    realEstateListings,
}: RealEstateTrendingProps) => {
    const realEstateListingsData = realEstateListings;

    return (
        <div className="container px-4 sm:px-6 pb-10 lg:pb-20 4xl:py-20">
            <div className="flex flex-col 4xl:flex-row gap-12 4xl:gap-24">
                <div className="max-w-[40rem] 4xl:w-72">
                    <Text
                        className="text-2xl md:text-3xl xl:text-5xl 4xl:text-7xl font-medium text-[#272343]"
                        tag="h2"
                    >
                        Trending
                    </Text>

                    <Text
                        className="text-base md:text-lg 4xl:text-xl text-[#272343] !font-normal mt-10"
                        tag="p"
                    >
                        Discover the homes that are capturing attention in the
                        market. This curated selection showcases the most
                        sought-after properties available right now.
                    </Text>

                    <Button rounded="none" className="mt-6">
                        View More
                    </Button>
                </div>

                <div className="4xl:w-[85rem]">
                    <RealEstateCommonCarousel
                        carouselData={realEstateListingsData}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1280: {
                                slidesPerView: 4,
                            },
                            1780: {
                                slidesPerView: 3,
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
export default RealEstateTrending;
