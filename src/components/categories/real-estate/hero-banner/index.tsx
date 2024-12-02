import Text from "@/components/ui/typography/text";
import BannerFilter from "./banner-filter";

type HeroBannerProps = {
    propertyType: string;
    setPropertyType: React.Dispatch<React.SetStateAction<string>>;
};

export default function HeroBanner({
    propertyType,
    setPropertyType,
}: HeroBannerProps) {
    return (
        <div className="pb-10 md:pb-20">
            <div className="relative">
                <img
                    src="/images/categories/real-estate/hero-banner/real-estate-banner.png"
                    alt="hero-banner"
                    className="w-full min-h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="absolute inset-0 max-sm:mt-12 flex items-center justify-center">
                    <div className="text-center sm:w-10/12 md:w-9/12 xl:w-6/12">
                        <Text
                            tag="h1"
                            className="!text-white !text-2xl lg:!text-4xl xl:!text-5xl 4xl:!text-6xl leading-[70px] !font-semibold tracking-wide !mb-6 hidden sm:block"
                        >
                            Find Real Estate and Get Your Dream Space
                        </Text>

                        <Text
                            tag="p"
                            className="!text-white lg:!text-base 4xl:!text-lg !mb-14 4xl:!mb-16 hidden lg:block"
                        >
                            We are a real estate agency that will help you find
                            the best residence you dream of, let’s discuss for
                            your dream house?
                        </Text>

                        {/* Filters */}
                        <BannerFilter 
                            propertyType={propertyType}
                            setPropertyType={setPropertyType}
                        />
                    </div>
                </div>

                <div className="absolute bottom-4 4xl:bottom-6 right-6 hidden lg:block">
                    <Text className="text-white xl:!text-base 4xl:!text-lg">
                        Penthouse in Reichenberg, Vorarlberg, Austria •
                        $3,733,861
                    </Text>
                </div>
            </div>
        </div>
    );
}
