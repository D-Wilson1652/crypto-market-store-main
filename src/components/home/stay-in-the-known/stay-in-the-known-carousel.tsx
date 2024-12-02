// Components Import
import ActionIcon from "@/components/ui/action-icon";
import Text from "@/components/ui/typography/text";
import { Swiper, SwiperSlide, Navigation } from "@/components/ui/slider";

// Icons Import
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

// ! Dummy Data
const carouselData = [
    {
        image: "/images/home/stay-in-the-known/home-stay-in-the-known-carousel-1.png",
        alt: "Home Stay In The Known 1",
        title: "Explore refined living in Forest Hills, Tennessee",
    },
    {
        image: "/images/home/stay-in-the-known/home-stay-in-the-known-carousel-2.png",
        alt: "Home Stay In The Known 2",
        title: "Explore refined living in Forest Hills, Tennessee",
    },
    {
        image: "/images/home/stay-in-the-known/home-stay-in-the-known-carousel-3.png",
        alt: "Home Stay In The Known 3",
        title: "Explore refined living in Forest Hills, Tennessee",
    },
    {
        image: "/images/home/stay-in-the-known/home-stay-in-the-known-carousel-4.png",
        alt: "Home Stay In The Known 4",
        title: "Explore refined living in Forest Hills, Tennessee",
    },
    {
        image: "/images/home/stay-in-the-known/home-stay-in-the-known-carousel-1.png",
        alt: "Home Stay In The Known 1",
        title: "Explore refined living in Forest Hills, Tennessee",
    },
    {
        image: "/images/home/stay-in-the-known/home-stay-in-the-known-carousel-2.png",
        alt: "Home Stay In The Known 2",
        title: "Explore refined living in Forest Hills, Tennessee",
    },
];

const StayInTheKnownCarousel = () => {
    return (
        <div className="w-full h-full relative">
            <div className="mb-6">
                <Text
                    className="text-2xl md:text-3xl font-medium text-[#272343]"
                    tag="h2"
                >
                    Stay in the known
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
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                spaceBetween={30}
                modules={[Navigation]}
                navigation={{
                    nextEl: ".stay-in-the-known-carousel-next",
                    prevEl: ".stay-in-the-known-carousel-prev",
                }}
                loop={true}
                className="stay-in-the-known-carousel w-full h-full"
            >
                {carouselData.map((data, index) => (
                    <SwiperSlide key={`stay-in-the-known-carousel-${index}`}>
                        <div className="relative">
                            <img
                                src={data.image}
                                alt={data.alt}
                                className="w-full h-full object-cover object-center rounded-2xl"
                                draggable={false}
                            />

                            <div className="absolute inset-0 custom-radial-gradient-bg rounded-2xl"></div>
                        </div>

                        <div className="absolute bottom-10 left-6 sm:bottom-6 sm:left-5 w-9/12">
                            <Text
                                className="text-white text-3xl sm:text-xl xl:text-2xl 2xl:text-3xl font-medium"
                                tag="span"
                            >
                                {data.title}
                            </Text>

                            <Text className="text-sm">🌟🏡</Text>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Left and Right Nav Buttons */}
            <ActionIcon
                rounded="full"
                className="stay-in-the-known-carousel-prev group !bg-[#F0F2F3] hover:!bg-black hover:!scale-125 absolute z-10 shadow-md top-0 sm:top-5 right-14"
            >
                <ArrowLeftIcon className="h-5 w-5 group-hover:!text-white" />
            </ActionIcon>
            <ActionIcon
                rounded="full"
                className="stay-in-the-known-carousel-next group !bg-[#F0F2F3] hover:!bg-black hover:!scale-125 absolute z-10 shadow-md top-0 sm:top-5 right-0"
            >
                <ArrowRightIcon className="h-5 w-5 group-hover:!text-white" />
            </ActionIcon>
        </div>
    );
};

export default StayInTheKnownCarousel;
