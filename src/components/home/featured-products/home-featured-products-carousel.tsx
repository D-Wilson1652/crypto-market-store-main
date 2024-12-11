
// Config Import

import Text from "@/components/ui/typography/text.tsx";

// ! Dummy Data

const HomeFeaturedProductsCarousel = () => {
    return (<div className="mt-8 text-center lg:mt-20 2xl:mt-24">
        <div className="mx-auto max-w-4xl">
            <Text tag="h1" className="text-[28px] font-bold leading-10">
                Under Construction
            </Text>
            <Text className="mt-2 !text-sm 2xl:mt-4">
                This Item Is currently Under Construction. Please Try again later
            </Text>
        </div>
        <div className="coin-flip">
            <div className="coin flipping"/>
        </div>
    </div>)
};

export default HomeFeaturedProductsCarousel;
