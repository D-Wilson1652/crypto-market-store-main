// Components Import
import {
    Swiper,
    SwiperSlide,
    EffectFade,
    Autoplay,
} from "@/components/ui/slider";

const imagesData: string[] = [
    "/images/auth/auth-carousel-1.png",
    "/images/auth/auth-carousel-2.png",
    "/images/auth/auth-carousel-3.png",
    "/images/auth/auth-carousel-4.png",
];

const AuthCarousel = () => {
    return (
        <div className="w-full h-full relative lg:p-2">
            <Swiper
                slidesPerView={1}
                modules={[EffectFade, Autoplay]}
                effect="fade"
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                className="w-full h-full"
            >
                {imagesData.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={image}
                            alt="Auth Carousel"
                            className="w-full h-full object-cover lg:rounded-xl"
                            draggable={false}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="hidden lg:block absolute top-5 left-5 z-10 bg-[#07384F85] px-2 py-1 rounded-xl">
                <img
                    src="/images/auth/crypto-market-store-tag.png"
                    alt="Auth Carousel"
                    draggable={false}
                />
            </div>
        </div>
    );
};

export default AuthCarousel;
