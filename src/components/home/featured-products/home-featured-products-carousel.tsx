import { useNavigate } from "react-router-dom";

// Redux Import
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// Components Import
import ActionIcon from "@/components/ui/action-icon";
import Text from "@/components/ui/typography/text";
import { Swiper, SwiperSlide, Navigation } from "@/components/ui/slider";
import { useModal } from "@/components/modals/context";

// Icons Import
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

// Config Import
import { Routes } from "@/config/routes";

// ! Dummy Data
const carouselData = [
    {
        image: "/images/home/featured-products/home-featured-products-carousel-1.png",
        alt: "Home Featured Products 1",
        title: "Real Estate",
        category: "Real Estate",
        count: "561,123",
        link: Routes.public.realEstate,
    },
    {
        image: "/images/home/featured-products/home-featured-products-carousel-2.jpg",
        alt: "Home Featured Products 2",
        title: "Watches",
        category: "Watches",
        count: "345",
        link: Routes.public.watch,
    },
    {
        image: "/images/home/featured-products/home-featured-products-carousel-4.png",
        alt: "Home Featured Products 3",
        title: "Cars",
        category: "Cars",
        count: "1,234",
        link: Routes.public.car,
    },
    {
        image: "/images/home/featured-products/home-featured-products-carousel-3.png",
        alt: "Home Featured Products 4",
        title: "Jets",
        category: "Jets",
        count: "1,234",
        link: Routes.public.jet,
    },
    {
        image: "/images/home/featured-products/home-featured-products-carousel-2.jpg",
        alt: "Home Featured Products 2",
        title: "Watches",
        category: "Watches",
        count: "345",
        link: Routes.public.watch,
    },
    {
        image: "/images/home/featured-products/home-featured-products-carousel-4.png",
        alt: "Home Featured Products 3",
        title: "Cars",
        category: "Cars",
        count: "1,234",
        link: Routes.public.car,
    },
];

const HomeFeaturedProductsCarousel = () => {
    const navigate = useNavigate();

    const { openModal } = useModal();

    const { isAuthenticated } = useSelector(
        (state: RootState) => state.userReducer
    );

    const handleNavigation = (link: string) => {
        if (!isAuthenticated) {
            openModal("SIGN_IN");
            return;
        }

        navigate(link);
    };

    return (
        <div className="w-full h-full relative">
            <div className="mb-6 lg:mb-12">
                <Text
                    className="!text-2xl md:!text-3xl font-medium text-[#272343]"
                    tag="h2"
                >
                    Featured Products
                </Text>
            </div>

            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1.3,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1440: {
                        slidesPerView: 4,
                    },
                }}
                spaceBetween={10}
                modules={[Navigation]}
                navigation={{
                    nextEl: ".home-featured-products-carousel-next",
                    prevEl: ".home-featured-products-carousel-prev",
                }}
                loop={true}
                className="home-featured-products-carousel rounded-2xl h-full"
            >
                {carouselData.map((data, index) => (
                    <SwiperSlide
                        key={`home-featured-products-carousel-${index}`}
                    >
                        <div
                            className="overflow-hidden rounded-2xl cursor-pointer"
                            onClick={() => handleNavigation(data.link)}
                        >
                            <img
                                src={data.image}
                                alt={data.alt}
                                className="w-full max-[425px]:h-[18rem] min-[425px]:max-h-[22rem] 2xl:max-h-[23rem] 4xl:max-h-[26rem] object-cover object-center rounded-2xl hover:scale-[1.04] transition-transform duration-500"
                                draggable={false}
                            />
                        </div>

                        <div
                            className="flex items-center justify-between mx-4 bg-black border border-white p-2 md:p-3 rounded-xl text-center -translate-y-9 xl:-translate-y-12 z-20 cursor-pointer hover:-translate-y-[52px] transition-transform duration-500"
                            onClick={() => handleNavigation(data.link)}
                        >
                            <div className="flex-1">
                                <Text
                                    className="text-white text-base xl:text-xl 4xl:text-2xl font-medium"
                                    tag="span"
                                >
                                    {data.title}
                                </Text>

                                <Text className="!text-xs md:!text-xs text-[#B4B4B4]">
                                    {data.count} LISTINGS
                                </Text>
                            </div>

                            <ArrowRightIcon className="h-4 w-4 text-white" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Left and Right Nav Buttons */}
            <ActionIcon
                rounded="full"
                className="home-featured-products-carousel-prev group !bg-[#F0F2F3] hover:!bg-[#007580] hover:!scale-125 absolute z-10 shadow-md max-sm:left-4 top-[50%] max-sm:-translate-y-1/2 sm:top-0 sm:right-14"
            >
                <ArrowLeftIcon className="h-5 w-5 group-hover:!text-white" />
            </ActionIcon>
            <ActionIcon
                rounded="full"
                className="home-featured-products-carousel-next group !bg-[#F0F2F3] hover:!bg-[#007580] hover:!scale-125 absolute z-10 shadow-md right-4 top-[50%] max-sm:-translate-y-1/2 sm:top-0 sm:right-0"
            >
                <ArrowRightIcon className="h-5 w-5 group-hover:!text-white" />
            </ActionIcon>
        </div>
    );
};

export default HomeFeaturedProductsCarousel;
