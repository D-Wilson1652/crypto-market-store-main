import { useNavigate } from "react-router-dom";

// Components Import
import ActionIcon from "@/components/ui/action-icon";
import Text from "@/components/ui/typography/text";
import { Swiper, SwiperSlide, Navigation } from "@/components/ui/slider";

// Icons Import
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

// Libs Import
import { cn } from "@/lib/utils";

// Types Import
import type { RealEstateListing } from "@/data/real-estate-listings";
import { Routes } from "@/config/routes";

type Breakpoints = {
    [key: number]: {
        slidesPerView: number;
    };
};

type RealEstateCommonCarouselProps = {
    carouselData: RealEstateListing[];
    title?: string;
    titleClassname?: string;
    breakpoints?: Breakpoints;
};

const defaultBreakpoints: Breakpoints = {
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
};

// Helper Function
const generateUniqueId = () =>
    `carousel-${Math.random().toString(36).slice(2, 9)}`;

const RealEstateCommonCarousel = ({
    carouselData,
    title,
    titleClassname,
    breakpoints = defaultBreakpoints,
}: RealEstateCommonCarouselProps) => {
    const navigate = useNavigate();

    const uniqueId = generateUniqueId();

    return (
        <div className="w-full h-full">
            {title && (
                <Text
                    className={cn(
                        "text-2xl md:text-3xl font-medium text-[#272343]",
                        titleClassname
                    )}
                    tag="h2"
                >
                    {title}
                </Text>
            )}

            <div className="relative">
                <Swiper
                    breakpoints={breakpoints}
                    spaceBetween={10}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: `.real-estate-common-carousel-next-${uniqueId}`,
                        prevEl: `.real-estate-common-carousel-prev-${uniqueId}`,
                    }}
                    loop={true}
                    className="real-estate-common-carousel w-full h-full"
                >
                    {carouselData.map((data, index) => (
                        <SwiperSlide
                            key={`real-estate-common-carousel-${index}`}
                        >
                            <div
                                className={cn(
                                    "relative max-w-[432px] h-[350px] 4xl:h-[432px] cursor-pointer"
                                )}
                                onClick={() => {
                                    navigate(
                                        Routes.private.subCategories.realEstate(
                                            data.id
                                        )
                                    );

                                    window.scrollTo(0, 0);
                                }}
                            >
                                <img
                                    src={data.images[0]}
                                    alt={data.title}
                                    className="w-full h-full object-cover object-center rounded-lg"
                                    draggable={false}
                                />

                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 rounded-b-lg">
                                    <Text
                                        className="!text-base 4xl:!text-lg font-semibold text-white"
                                        tag="h3"
                                    >
                                        {data.price
                                            ? data.price
                                            : "Price Upon Request"}
                                    </Text>
                                    <Text
                                        className="!text-xs 4xl:!text-sm text-white/70 overflow-hidden text-ellipsis whitespace-nowrap"
                                        tag="p"
                                    >
                                        {data.title}
                                    </Text>
                                </div>

                                <div className="absolute top-4 left-4 bg-[#01AD5A] px-2 pb-1 rounded">
                                    <Text
                                        className="!text-xs !font-medium text-white"
                                        tag="span"
                                    >
                                        Image
                                    </Text>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Left and Right Nav Buttons with unique IDs */}
                <ActionIcon
                    rounded="full"
                    className={`real-estate-common-carousel-prev-${uniqueId} group !bg-[#F0F2F3] hover:!bg-[#007580] hover:!scale-125 absolute z-10 shadow-md -top-20 right-14`}
                >
                    <ArrowLeftIcon className="h-5 w-5 group-hover:!text-white" />
                </ActionIcon>
                <ActionIcon
                    rounded="full"
                    className={`real-estate-common-carousel-next-${uniqueId} group !bg-[#F0F2F3] hover:!bg-[#007580] hover:!scale-125 absolute z-10 shadow-md -top-20 right-0`}
                >
                    <ArrowRightIcon className="h-5 w-5 group-hover:!text-white" />
                </ActionIcon>
            </div>
        </div>
    );
};

export default RealEstateCommonCarousel;
