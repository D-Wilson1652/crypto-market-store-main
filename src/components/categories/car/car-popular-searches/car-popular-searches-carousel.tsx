// Components Import
import ActionIcon from "@/components/ui/action-icon";
import Text from "@/components/ui/typography/text";
import { Swiper, SwiperSlide, Navigation } from "@/components/ui/slider";

// Icons Import
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import {
    ArrowTopRightSolid,
    GearBoxOutline,
    PetrolPumpOutline,
    SpeedMeterOutline,
} from "@/components/icons";

// Utils Import
import { cn } from "@/lib/utils";

// ! Dummy Data
const carouselData = [
    {
        image: "/images/categories/car/popular-searches/car-popular-searches-carousel-1.png",
        name: "Audi A5 – 2023",
        description: "2.0 D5 PowerPulse Momentum 5dr AWD…",
        topSpeed: "155 mph",
        fuelType: "Petrol",
        transmission: "Automatic",
        originalPrice: "$50,000",
        discountedPrice: "$45,000",
        onSale: true,
        link: "#",
    },
    {
        image: "/images/categories/car/popular-searches/car-popular-searches-carousel-2.png",
        name: "Audi A4 – 2022",
        description: "2.0 D5 PowerPulse Momentum 5dr AWD…",
        topSpeed: "150 mph",
        fuelType: "Diseal",
        transmission: "Manual",
        originalPrice: "$120,000",
        discountedPrice: "$90,000",
        onSale: true,
        link: "#",
    },
    {
        image: "/images/categories/car/popular-searches/car-popular-searches-carousel-3.png",
        name: "Audi A3 – 2021",
        description: "2.0 D5 PowerPulse Momentum 5dr AWD…",
        topSpeed: "145 mph",
        fuelType: "Petrol",
        transmission: "Automatic",
        originalPrice: "$120,000",
        onSale: false,
        link: "#",
    },
];

const CarPopularSearchesCarousel = () => {
    return (
        <div className="w-full h-full relative">
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 1.7,
                    },
                    1280: {
                        slidesPerView: 2.3,
                    },
                    1536: {
                        slidesPerView: 2.9,
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
                            <div className="relative">
                                <img
                                    src={data.image}
                                    alt={data.name}
                                    className="w-full md:max-w-80 h-60 object-cover max-md:rounded-t-2xl"
                                />

                                {data.onSale && (
                                    <div className="absolute top-4 left-4 bg-[#405FF2] text-white px-3 py-1 rounded-full">
                                        <Text
                                            className="!text-xs !font-normal text-white"
                                            tag="p"
                                        >
                                            Sale
                                        </Text>
                                    </div>
                                )}
                            </div>

                            <div className="p-4 flex justify-between flex-col">
                                <div>
                                    <Text
                                        className="!text-base !font-medium text-[#272343]"
                                        tag="h3"
                                    >
                                        {data.name}
                                    </Text>

                                    <Text
                                        className="text-[#272343] !text-xs"
                                        tag="p"
                                    >
                                        {data.description}
                                    </Text>
                                </div>

                                <div className="flex justify-center flex-col gap-3">
                                    <div className="flex items-center gap-2">
                                        <SpeedMeterOutline />

                                        <Text
                                            className="text-[#272343] !text-sm !font-normal"
                                            tag="p"
                                        >
                                            {data.topSpeed}
                                        </Text>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <PetrolPumpOutline />

                                        <Text
                                            className="text-[#272343] !text-sm !font-normal"
                                            tag="p"
                                        >
                                            {data.fuelType}
                                        </Text>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <GearBoxOutline />

                                        <Text
                                            className="text-[#272343] !text-sm !font-normal"
                                            tag="p"
                                        >
                                            {data.transmission}
                                        </Text>
                                    </div>
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
                                                className="text-[#272343] !font-medium !text-lg"
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

export default CarPopularSearchesCarousel;
