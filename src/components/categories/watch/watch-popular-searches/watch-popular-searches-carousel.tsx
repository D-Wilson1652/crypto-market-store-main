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
        image: "/images/categories/watch/featured-products/watch-featured-products-1.png",
        title: "CAIUBALIA",
        subtitle: "Mando Edition",
        description:
            "Indulge in timeless elegance with our luxury watch collection, where every timepiece tells a story of impeccable craftsmanship and sophistication. Each watch is meticulously crafted by skilled artisans, marrying traditional artistry .",
        originalPrice: "$1,200",
        discountedPrice: "$684",
        link: "#",
    },
    {
        image: "/images/categories/watch/featured-products/watch-featured-products-2.png",
        title: "CAIUBALIA",
        subtitle: "Mando Edition",
        description:
            "Indulge in timeless elegance with our luxury watch collection, where every timepiece tells a story of impeccable craftsmanship and sophistication. Each watch is meticulously crafted by skilled artisans, marrying traditional artistry .",
        originalPrice: "$1,200",
        discountedPrice: "$684",
        link: "#",
    },
    {
        image: "/images/categories/watch/featured-products/watch-featured-products-1.png",
        title: "CAIUBALIA",
        subtitle: "Mando Edition",
        description:
            "Indulge in timeless elegance with our luxury watch collection, where every timepiece tells a story of impeccable craftsmanship and sophistication. Each watch is meticulously crafted by skilled artisans, marrying traditional artistry .",
        originalPrice: "$1,200",
        discountedPrice: "$684",
        link: "#",
    },
    {
        image: "/images/categories/watch/featured-products/watch-featured-products-2.png",
        title: "CAIUBALIA",
        subtitle: "Mando Edition",
        description:
            "Indulge in timeless elegance with our luxury watch collection, where every timepiece tells a story of impeccable craftsmanship and sophistication. Each watch is meticulously crafted by skilled artisans, marrying traditional artistry .",
        originalPrice: "$1,200",
        discountedPrice: "$684",
        link: "#",
    },
];

const WatchPopularSearchesCarousel = () => {
    return (
        <div className="w-full h-full relative">
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
                            <img
                                src={data.image}
                                alt={data.title}
                                className="w-full h-60 object-cover max-md:rounded-t-2xl"
                            />

                            <div className="p-4 flex justify-between flex-col">
                                <div className="flex-grow">
                                    <Text
                                        className="!text-lg !font-medium text-[#272343]"
                                        tag="h3"
                                    >
                                        {data.title}
                                    </Text>

                                    <Text className="!text-sm" tag="p">
                                        {data.subtitle}
                                    </Text>

                                    <Text
                                        className="text-[#272343] !text-xs mt-4"
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

export default WatchPopularSearchesCarousel;
