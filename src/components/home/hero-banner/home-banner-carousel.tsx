// Components Import
import { ChevronLeftLongIcon } from "@/components/icons/chevron-left-long-icon.";
import { ChevronRightLongIcon } from "@/components/icons/chevron-right-long-icon";
import ActionIcon from "@/components/ui/action-icon";
import {
    Swiper,
    SwiperSlide,
    EffectFade,
    Autoplay,
    Pagination,
    Navigation,
} from "@/components/ui/slider";
import Text from "@/components/ui/typography/text";

// ! Dummy Data
const carouselData = [
    {
        image: "/images/home/hero-banner/home-banner-carousel-1.png",
        alt: "Home Banner Carousel 1",
        title: "Penthouse in Reichenberg, Vorarlberg, Austria • $3,733,861",
    },
    {
        image: "/images/home/hero-banner/home-banner-carousel-2.png",
        alt: "Home Banner Carousel 2",
        title: "Villa in Reichenberg, Vorarlberg, Austria • $2,733,861",
    },
    {
        image: "/images/home/hero-banner/home-banner-carousel-3.png",
        alt: "Home Banner Carousel 3",
        title: "Apartment in Reichenberg, Vorarlberg, Austria • $1,733,861",
    },
    {
        image: "/images/home/hero-banner/home-banner-carousel-4.png",
        alt: "Home Banner Carousel 4",
        title: "House in Reichenberg, Vorarlberg, Austria • $4,733,861",
    },
];

const HomeBannerCarousel = () => {
    return (
        <div className="w-full h-full relative">
            <Swiper
                slidesPerView={1}
                modules={[EffectFade, Autoplay, Pagination, Navigation]}
                navigation={{
                    nextEl: ".home-banner-carousel-next",
                    prevEl: ".home-banner-carousel-prev",
                }}
                pagination={{
                    clickable: true,
                }}
                effect="fade"
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                className="home-banner-carousel w-full h-full"
            >
                {carouselData.map((data, index) => (
                    <SwiperSlide key={`home-banner-carousel-${index}`}>
                        <div className="relative">
                            <img
                                src={data.image}
                                alt={data.alt}
                                className="w-full min-h-96 md:h-full object-cover object-center"
                                draggable={false}
                            />

                            <div className="absolute inset-0 custom-radial-gradient-bg"></div>
                        </div>

                        <div className="absolute bottom-3 lg:bottom-6 right-3 lg:right-6 2xl:right-10">
                            <Text
                                className="text-white hidden sm:block sm:!text-xs md:!text-base 4xl:!text-lg"
                                tag="span"
                            >
                                {data.title}
                            </Text>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Left and Right Nav Buttons */}
            <ActionIcon
                rounded="full"
                className="home-banner-carousel-prev !bg-black/30 hover:!bg-black hover:!scale-125 absolute left-6 top-1/2 md:left-10 z-10 -translate-y-1/2 shadow-md !transition-all group-hover/section:visible group-hover/section:left-0 lg:flex lg:-translate-x-1/2 lg:-translate-y-1/2"
            >
                <ChevronLeftLongIcon className="h-5 w-5" />
            </ActionIcon>
            <ActionIcon
                rounded="full"
                className="home-banner-carousel-next !bg-black/30 hover:!bg-black hover:!scale-125 absolute right-6 top-1/2 md:right-10 z-10 -translate-y-1/2 shadow-md !transition-all group-hover/section:visible group-hover/section:right-0 lg:flex lg:translate-x-1/2 lg:-translate-y-1/2"
            >
                <ChevronRightLongIcon className="h-5 w-5" />
            </ActionIcon>

            {/* Bottom Left Text */}
            <div className="absolute bottom-4 left-5 md:bottom-0 md:left-10 lg:left-20 z-10 -translate-y-10 lg:-translate-y-16 xl:-translate-y-20">
                <Text
                    className="text-white uppercase tracking-wide text-xs"
                    tag="span"
                >
                    Welcome to Crypto Market Store
                </Text>

                <Text
                    className="text-white !text-2xl md:!text-3xl lg:!text-4xl 2xl:!text-6xl 2xl:!leading-[4.5rem]"
                    tag="h1"
                >
                    Indulge in Luxury, <br /> Powered by Crypto
                </Text>

                <Text
                    className="text-white hidden xl:block !text-base 4xl:!text-lg font-semibold mt-4 w-8/12"
                    tag="span"
                >
                    Seamlessly browse, buy, and sell high-end items using your
                    Web3 wallet in a secure, blockchain-driven marketplace.
                </Text>
            </div>
        </div>
    );
};

export default HomeBannerCarousel;
