// ! COMPONENT IS CURRENTLY NOT IN USE

import { useState } from "react";
import {
    Swiper,
    SwiperSlide,
    Navigation,
    Thumbs,
    FreeMode,
    Autoplay,
} from "@/components/ui/slider";
import ActionIcon from "@/components/ui/action-icon";

// Icons Import
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

type GalleryCarouselProps = {
    imagesData: string[];
};

const GalleryCarousel = ({ imagesData }: GalleryCarouselProps) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <div className="relative">
            {thumbsSwiper && thumbsSwiper.mounted && (
                <Swiper
                    spaceBetween={10}
                    loop={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[FreeMode, Thumbs, Navigation, Autoplay]}
                    navigation={{
                        nextEl: ".gallery-carousel-next",
                        prevEl: ".gallery-carousel-prev",
                    }}
                    className="gallery-carousel-two max-h-80 mx-auto"
                >
                    {imagesData.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={image}
                                className="object-contain max-h-80 w-full"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                loop={true}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="gallery-carousel-one w-full h-20"
            >
                {imagesData.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={image}
                            className="object-cover h-full w-full"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Left and Right Nav Buttons */}
            <ActionIcon
                rounded="full"
                className="gallery-carousel-prev !bg-white hover:!scale-110 absolute left-4 top-[40%] z-10 shadow-md !transition-all group-hover/section:visible group-hover/section:left-0"
            >
                <ArrowLeftIcon className="h-4 w-4 group-hover:!text-white" />
            </ActionIcon>
            <ActionIcon
                rounded="full"
                className="gallery-carousel-next !bg-white hover:!scale-110 absolute right-4 top-[40%] z-10 shadow-md !transition-all group-hover/section:visible group-hover/section:right-0"
            >
                <ArrowRightIcon className="h-4 w-4 group-hover:!text-white" />
            </ActionIcon>
        </div>
    );
};
export default GalleryCarousel;
