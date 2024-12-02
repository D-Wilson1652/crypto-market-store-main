import { useState, useRef } from "react";
import { Swiper as SwiperClass } from "swiper/types";

// Components Import
import Button from "@/components/ui/button";
import {
    Swiper,
    SwiperSlide,
    EffectFade,
    Autoplay,
} from "@/components/ui/slider";
import Text from "@/components/ui/typography/text";

// ! Dummy Data
interface CarouselData {
    image: string;
    alt: string;
    title: string;
    category?: string;
}

const carouselData: CarouselData[] = [
    {
        image: "/images/home/hero-banner/home-banner-carousel-1.png",
        alt: "Home Banner Carousel 1",
        title: "Sell Real Estate on Crypto Market Store",
        category: "Real Estate",
    },
    {
        image: "/images/home/hero-banner/home-banner-carousel-2.png",
        alt: "Home Banner Carousel 2",
        title: "Sell Yachts on Crypto Market Store",
        category: "Yachts",
    },
    {
        image: "/images/home/hero-banner/home-banner-carousel-3.png",
        alt: "Home Banner Carousel 3",
        title: "Sell Jets on Crypto Market Store",
        category: "Jets",
    },
    {
        image: "/images/home/hero-banner/home-banner-carousel-4.png",
        alt: "Home Banner Carousel 4",
        title: "Sell Cars on Crypto Market Store",
        category: "Cars",
    },
];

const HomeFeaturedProductsTwoCarousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const swiperRef = useRef<SwiperClass | null>(null);

    const handleSlideChange = (swiper: SwiperClass): void => {
        setActiveIndex(swiper.realIndex);
    };

    const handleButtonClick = (index: number): void => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
        }
    };

    return (
        <div className="w-full h-full relative mt-5 lg:mt-20">
            <div className="max-[400px]:hidden sm:flex absolute top-2 left-2 md:left-7 lg:left-10 2xl:left-12 z-10 space-x-2 p-4">
                {carouselData.map((data, index) => (
                    <Button
                        key={`custom-button-${index}`}
                        onClick={() => handleButtonClick(index)}
                        variant="outline"
                        rounded="pill"
                        size="sm"
                        className={`${
                            activeIndex === index
                                ? "bg-white text-black hover:!border-white"
                                : "text-white hover:!border-white"
                        }`}
                    >
                        {data.category}
                    </Button>
                ))}
            </div>

            <Swiper
                slidesPerView={1}
                modules={[EffectFade, Autoplay]}
                effect="fade"
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                onSlideChange={handleSlideChange}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="home-featured-products-two-carousel w-full h-full rounded-2xl"
            >
                {carouselData.map((data, index) => (
                    <SwiperSlide
                        key={`home-featured-products-two-carousel-${index}`}
                    >
                        <div className="relative">
                            <img
                                src={data.image}
                                alt={data.alt}
                                className="w-full min-h-[15rem] max-h-[30rem] object-cover object-center"
                                draggable={false}
                            />
                            <div className="absolute inset-0 custom-radial-gradient-bg"></div>
                        </div>

                        <div className="absolute hidden sm:block bottom-12 lg:bottom-44 left-7 lg:left-10 2xl:left-14 w-5/12 sm:w-4/12">
                            <Text
                                className="text-white lg:!text-4xl xl:!text-5xl !font-medium"
                                tag="h2"
                            >
                                {data.title}
                            </Text>
                        </div>

                        <div className="absolute bottom-4 sm:bottom-10 lg:bottom-14 right-3 lg:right-6 2xl:right-10">
                            <Button
                                rounded="sm"
                                className="bg-white !text-black uppercase sm:!px-8 !text-xs sm:!text-sm hover:!bg-white hover:!text-black"
                            >
                                Start Now
                            </Button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Bottom Left Text */}
            <div className="absolute bottom-0 left-7 lg:left-10 2xl:left-14 z-10 -translate-y-10 lg:-translate-y-16 w-4/12">
                <Text
                    className="text-white hidden lg:block !text-lg xl:!text-xl 4xl:!text-2xl mt-4"
                    tag="span"
                >
                    Attract quality leads within the highest concentration of
                    international luxury buyers
                </Text>
            </div>
        </div>
    );
};

export default HomeFeaturedProductsTwoCarousel;
