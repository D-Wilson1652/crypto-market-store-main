import { useState, useRef } from "react";

// Components Import
import ActionIcon from "@/components/ui/action-icon";
import Text from "@/components/ui/typography/text";
import { Swiper, SwiperSlide, Navigation } from "@/components/ui/slider";

// Icons Import
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useWindowsize } from "@/hooks/use-window-size";

import { Swiper as SwiperClass } from "swiper/types";
import { cn } from "@/lib/utils";

// ! Dummy Data Interface
interface CarouselData {
    image: string;
    alt: string;
    price?: string;
    location: string;
}

// ! Dummy Data
const carouselData: CarouselData[] = [
    {
        image: "/images/home/trending/home-trending-carousel-1.png",
        alt: "Home Trending 1",
        price: "$1,340,454",
        location: "House in Seengen, Aargau, Switzerland...",
    },
    {
        image: "/images/home/trending/home-trending-carousel-2.png",
        alt: "Home Trending 2",
        price: "$1,340,454",
        location: "House in Seengen, Aargau, Switzerland...",
    },
    {
        image: "/images/home/trending/home-trending-carousel-3.png",
        alt: "Home Trending 3",
        price: "$1,340,454",
        location: "House in Seengen, Aargau, Switzerland...",
    },
    {
        image: "/images/home/trending/home-trending-carousel-2.png",
        alt: "Home Trending 4",
        price: "",
        location: "House in Seengen, Aargau, Switzerland...",
    },
    {
        image: "/images/home/trending/home-trending-carousel-3.png",
        alt: "Home Trending 5",
        price: "",
        location: "House in Seengen, Aargau, Switzerland...",
    },
    {
        image: "/images/home/trending/home-trending-carousel-1.png",
        alt: "Home Trending 6",
        price: "$1,340,454",
        location: "House in Seengen, Aargau, Switzerland...",
    },
    {
        image: "/images/home/trending/home-trending-carousel-3.png",
        alt: "Home Trending 7",
        price: "",
        location: "House in Seengen, Aargau, Switzerland...",
    },
];

const handleVisibleSlides = (
    index: number,
    activeIndex: number,
    width: number
) => {
    if (width < 768) {
        return "opacity-100";
    }

    if (width >= 768 && index === activeIndex && width < 1200) {
        return "opacity-100";
    }

    if (width >= 1200) {
        if (
            (activeIndex === 0 && index === carouselData.length - 1) ||
            (activeIndex === carouselData.length - 1 && index === 0) ||
            index === activeIndex - 1 ||
            index === activeIndex ||
            index === activeIndex + 1
        ) {
            return "opacity-100";
        }
    }

    return "opacity-20";
};

const HomeTrendingCarousel = () => {
    const { width } = useWindowsize();

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const swiperRef = useRef<SwiperClass | null>(null);

    return (
        <div className="w-full h-full relative">
            <div className="mb-6 lg:mb-12">
                <Text
                    className="text-2xl md:text-3xl font-medium text-[#272343] md:pl-6 xl:!pl-44"
                    tag="h2"
                >
                    Trending
                </Text>
            </div>

            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1.5,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                }}
                spaceBetween={10}
                centeredSlides={true}
                modules={[Navigation]}
                navigation={{
                    nextEl: ".home-trending-carousel-next",
                    prevEl: ".home-trending-carousel-prev",
                }}
                onSwiper={(swiper: SwiperClass) =>
                    swiper ? (swiperRef.current = swiper) : null
                }
                onSlideChange={(swiper: SwiperClass) =>
                    setActiveIndex(swiper.realIndex)
                }
                loop={true}
                initialSlide={3}
                className="home-trending-carousel w-full h-full"
            >
                {carouselData.map((data, index) => (
                    <SwiperSlide key={`home-trending-carousel-${index}`}>
                        <div
                            className={cn(
                                "relative",
                                handleVisibleSlides(index, activeIndex, width)
                            )}
                        >
                            <img
                                src={data.image}
                                alt={data.alt}
                                className="w-full h-full object-cover object-center rounded-2xl"
                                draggable={false}
                            />

                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 rounded-b-2xl">
                                <Text
                                    className="!text-base 4xl:!text-lg font-semibold text-white"
                                    tag="h3"
                                >
                                    {data.price
                                        ? data.price
                                        : "Price Upon Request"}
                                </Text>
                                <Text
                                    className="!text-xs 4xl:!text-sm text-white/70"
                                    tag="p"
                                >
                                    {data.location}
                                </Text>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Left and Right Nav Buttons */}
            <ActionIcon
                rounded="full"
                className="home-trending-carousel-prev group !bg-[#F0F2F3] hover:!bg-[#007580] hover:!scale-125 absolute z-10 shadow-md max-sm:left-4 top-[55%] max-sm:-translate-y-1/2 sm:top-0 sm:right-14"
            >
                <ArrowLeftIcon className="h-5 w-5 group-hover:!text-white" />
            </ActionIcon>
            <ActionIcon
                rounded="full"
                className="home-trending-carousel-next group !bg-[#F0F2F3] hover:!bg-[#007580] hover:!scale-125 absolute z-10 shadow-md right-4 top-[55%] max-sm:-translate-y-1/2 sm:top-0 sm:right-0"
            >
                <ArrowRightIcon className="h-5 w-5 group-hover:!text-white" />
            </ActionIcon>
        </div>
    );
};

export default HomeTrendingCarousel;
