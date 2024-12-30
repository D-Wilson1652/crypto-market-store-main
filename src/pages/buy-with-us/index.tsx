// Component Imports
import SharedLayout from "@/components/layout/shared-layout";
import CategoriesGrid from "@/components/sell-with-us/categories-grid";
import Text from "@/components/ui/typography/text";

const SellWithUs = () => {
    return (
        <SharedLayout>
            <div className="container w-full bg-white px-4 py-3.5 sm:px-6 lg:pb-16 2xl:pb-20 lg:px-14 3xl:px-18 4xl:py-7">
                <div className="text-center">
                    <Text
                        className="text-xl md:!text-2xl lg:!text-4xl 2xl:!text-5xl 4xl:text-7xl font-bold text-[#19213D] mb-6 mt-10"
                        tag="h1"
                    >
                        Buy with us
                    </Text>
                    <Text
                        className="text-xl md:!text-2xl lg:!text-4xl 2xl:!text-5xl 4xl:text-7xl font-bold text-[#19213D] mb-6 mt-10"
                        tag="h2"
                    >
                        Select your preferred category
                    </Text>
                    <Text
                        className="text-[#667394] max-w-[35rem] !leading-6 mx-auto"
                        tag="p"
                    >
                        Select your category for a personalised experience. Your
                        choice ensures your offerings stand out in our exclusive
                        marketplace. Enhance your online presence with Crypto
                        Market Store.
                    </Text>
                </div>

                <CategoriesGrid />
            </div>
        </SharedLayout>
    );
};
export default SellWithUs;
