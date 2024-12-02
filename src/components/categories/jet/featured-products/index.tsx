import Text from "@/components/ui/typography/text";
import FeaturedCard from "@/components/categories/common/featured-card";

// Data Imports
import { jetFeaturedProducts } from "./data";

const FeaturedProducts = () => {
    return (
        <div className="container px-4 sm:px-6 pb-20">
            <Text
                tag="h2"
                className="text-[#050B20] !font-semibold !text-2xl xl:!text-3xl 4xl:!text-4xl"
            >
                Featured
            </Text>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 4xl:grid-cols-4 gap-6 mt-6">
                {jetFeaturedProducts.map((product, index) => (
                    <FeaturedCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
};
export default FeaturedProducts;
