import Text from "@/components/ui/typography/text";
import FeaturedCard from "@/components/categories/common/featured-card";

// TODO: UNCOMMENT LATER
// Data Imports
// import { watchFeaturedProducts } from "./data";

// Data import
import { watchListings } from "@/data/watch-listings";

const FeaturedProducts = () => {
    return (
        <div className="container px-4 sm:px-6 pb-10 lg:pb-20">
            <Text
                tag="h2"
                className="text-[#050B20] !font-semibold !text-2xl xl:!text-3xl 4xl:!text-4xl"
            >
                Featured
            </Text>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 4xl:grid-cols-4 gap-6 mt-6">
                {/* // TODO: UNCOMMENT LATER  */}
                {/* {watchFeaturedProducts.map((product, index) => (
                    <FeaturedCard key={index} product={product} />
                ))} */}

                {watchListings.map((product, index) => (
                    <FeaturedCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
};
export default FeaturedProducts;
