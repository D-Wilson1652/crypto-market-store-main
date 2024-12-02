import Text from "@/components/ui/typography/text";

export default function JetHeroBanner() {
    return (
        <div className="container relative">
            <div className="absolute hidden md:block">
                <Text
                    tag="h1"
                    className="translate-y-12 text-xl md:!text-2xl xl:!text-4xl 2xl:!text-6xl 4xl:!text-8xl"
                >
                    Luxury Jets
                </Text>
            </div>

            <div>
                <img
                    src="/images/categories/jet/hero-banner/jet-banner.png"
                    alt="hero-banner"
                    className="w-full object-cover"
                />

                <div className="bg-[#D9D9D9] flex flex-col items-center justify-center">
                    <div className="hidden lg:flex justify-center space-x-20 xl:space-x-24 2xl:space-x-[7rem] 3xl:space-x-[7.7rem] 4xl:space-x-[9rem] w-full">
                        <div className="custom-vertical-linear-gradient-bg h-28 w-8 xl:w-10 4xl:h-32 4xl:w-12" />
                        <div className="custom-vertical-linear-gradient-bg h-24 w-6 xl:w-8 4xl:h-28 4xl:w-10" />
                        <div className="custom-vertical-linear-gradient-bg h-28 w-8 xl:w-10 4xl:h-32 4xl:w-12" />
                    </div>

                    <Text
                        tag="p"
                        className="py-12 text-lg md:text-xl 2xl:text-2xl 4xl:text-4xl"
                    >
                        Explore 40+ luxury jets, turboprop, and private jets for
                        sale worldwide in one simple search
                    </Text>
                </div>
            </div>
        </div>
    );
}
