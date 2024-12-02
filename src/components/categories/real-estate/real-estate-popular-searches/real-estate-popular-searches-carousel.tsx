// Components Import
import ActionIcon from "@/components/ui/action-icon";
import Text from "@/components/ui/typography/text";
import { Swiper, SwiperSlide, Navigation } from "@/components/ui/slider";

// Icons Import
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ArrowTopRightSolid } from "@/components/icons";

// Utils Import
import { cn } from "@/lib/utils";

// ! Dummy Data
const carouselData = [
    {
        image: "/images/categories/real-estate/popular-searches/real-estate-popular-searches-carousel-1.png",
        onSale: true,
        title: "Luxury Homes",
        location: "Paris, France",
        description:
            "Discover the homes that are capturing attention in the market. This  curated selection showcases the most sought-after properties available  right now.",
        originalPrice: "$50,000",
        discountedPrice: "$45,000",
        link: "#",
    },
    {
        image: "/images/categories/real-estate/popular-searches/real-estate-popular-searches-carousel-2.png",
        onSale: true,
        title: "Luxury old style house",
        location: "Costa, Del sol, Spain",
        description:
            "Discover the homes that are capturing attention in the market. This  curated selection showcases the most sought-after properties available  right now.",
        originalPrice: "$120,000",
        link: "#",
    },
    {
        image: "/images/categories/real-estate/popular-searches/real-estate-popular-searches-carousel-3.png",
        onSale: false,
        title: "Luxury new style house",
        location: "New York, USA",
        description:
            "Discover the homes that are capturing attention in the market. This  curated selection showcases the most sought-after properties available  right now.",
        originalPrice: "$50,000",
        link: "#",
    },
    {
        image: "/images/categories/real-estate/popular-searches/real-estate-popular-searches-carousel-1.png",
        onSale: false,
        title: "Luxury Homes",
        location: "Paris, France",
        description:
            "Discover the homes that are capturing attention in the market. This  curated selection showcases the most sought-after properties available  right now.",
        originalPrice: "$50,000",
        discountedPrice: "$45,000",
        link: "#",
    },
    {
        image: "/images/categories/real-estate/popular-searches/real-estate-popular-searches-carousel-2.png",
        onSale: false,
        title: "Luxury old style house",
        location: "Costa, Del sol, Spain",
        description:
            "Discover the homes that are capturing attention in the market. This  curated selection showcases the most sought-after properties available  right now.",
        originalPrice: "$120,000",
        link: "#",
    },
    {
        image: "/images/categories/real-estate/popular-searches/real-estate-popular-searches-carousel-3.png",
        onSale: false,
        title: "Luxury new style house",
        location: "New York, USA",
        description:
            "Discover the homes that are capturing attention in the market. This  curated selection showcases the most sought-after properties available  right now.",
        originalPrice: "$50,000",
        link: "#",
    },
];

const RealEstatePopularSearchesCarousel = () => {
    return (
        <div className="w-full h-full relative">
            <div className="mb-6 2lx:mb-8 text-center flex items-center justify-center">
                <div className="md:w-9/12 xl:w-8/12">
                    <Text
                        className="text-2xl md:text-3xl xl:text-5xl 4xl:text-7xl !font-medium text-[#272343]"
                        tag="h2"
                    >
                        Popular Searches
                    </Text>

                    <Text
                        className="text-[#272343] !text-sm md:!text-base xl:!text-lg mt-4"
                        tag="p"
                    >
                        Discover the homes that are capturing attention in the
                        market. This curated selection showcases the most
                        sought-after properties available right now.
                    </Text>
                </div>
            </div>

            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 1.2,
                    },
                    1280: {
                        slidesPerView: 1.7,
                    },
                    1536: {
                        slidesPerView: 2.4,
                    },
                }}
                spaceBetween={20}
                modules={[Navigation]}
                navigation={{
                    nextEl: ".popular-searches-carousel-next",
                    prevEl: ".popular-searches-carousel-prev",
                }}
                loop={true}
                className="popular-searches-carousel w-full h-full"
            >
                {carouselData.map((data, index) => (
                    <SwiperSlide key={`popular-searches-carousel-${index}`}>
                        <div className="bg-black/5 shadow-md rounded-2xl md:overflow-hidden flex flex-col md:flex-row md:h-60">
                            <div className="relative w-full">
                                <img
                                    src={data.image}
                                    alt={data.title}
                                    className="w-full h-60 object-cover max-md:rounded-t-2xl"
                                />

                                {data.onSale && (
                                    <div className="absolute top-4 left-4 bg-[#405FF2] px-2 py-1 rounded-full">
                                        <Text
                                            className="text-white !font-medium !text-xs !px-2"
                                            tag="p"
                                        >
                                            Sale
                                        </Text>
                                    </div>
                                )}
                            </div>

                            <div className="p-4 flex justify-between flex-col">
                                <div className="flex-grow">
                                    <Text
                                        className="!text-lg !font-medium text-[#272343]"
                                        tag="h3"
                                    >
                                        {data.title}
                                    </Text>

                                    <Text className="!text-sm" tag="p">
                                        {data.location}
                                    </Text>

                                    <Text
                                        className="text-[#272343] !text-sm mt-4"
                                        tag="p"
                                    >
                                        {data.description}
                                    </Text>
                                </div>

                                <div className="flex items-end justify-between max-md:mt-4">
                                    <div>
                                        <Text
                                            className={cn(
                                                "text-[#272343]  !text-sm",
                                                {
                                                    "!line-through !text-sm !font-normal":
                                                        data.discountedPrice,
                                                }
                                            )}
                                            tag="p"
                                        >
                                            {data.originalPrice}
                                        </Text>

                                        {data.discountedPrice && (
                                            <Text
                                                className="text-[#272343] !font-medium !text-xl"
                                                tag="h4"
                                            >
                                                {data.discountedPrice}
                                            </Text>
                                        )}
                                    </div>

                                    {/* View Details */}
                                    <div className="cursor-pointer flex items-center gap-2 group">
                                        <Text
                                            className="text-black !font-medium !text-sm group-hover:underline"
                                            tag="p"
                                        >
                                            View Details
                                        </Text>

                                        <ArrowTopRightSolid className="h-4 w-4 text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Left and Right Nav Buttons */}
            <ActionIcon
                rounded="full"
                className="popular-searches-carousel-prev group !bg-transparent hover:!scale-110 absolute left-0 -bottom-16 z-10 shadow-md !border !border-black !w-16"
            >
                <ChevronLeftIcon className="h-5 w-5" />
            </ActionIcon>
            <ActionIcon
                rounded="full"
                className="popular-searches-carousel-next group !bg-transparent hover:!scale-110 absolute left-20 -bottom-16 z-10 shadow-md !border !border-black !w-16"
            >
                <ChevronRightIcon className="h-5 w-5" />
            </ActionIcon>
        </div>
    );
};

export default RealEstatePopularSearchesCarousel;
