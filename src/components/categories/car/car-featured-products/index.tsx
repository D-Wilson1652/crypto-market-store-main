import Text from "@/components/ui/typography/text";
// import CarFeaturedProductCard from "./car-featured-product-card";

// Data Imports
// import { carFeaturedProducts } from "./data";

// Data import
import { carListings } from "@/data/car-listings";

import FeaturedCard from "@/components/categories/common/featured-card";

const CarFeaturedProducts = () => {
    return (
        <div className="container px-4 sm:px-6 pb-10 lg:pb-20">
            <Text
                tag="h2"
                className="text-[#050B20] !font-semibold !text-2xl xl:!text-3xl 4xl:!text-4xl"
            >
                Featured
            </Text>

            <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 4xl:grid-cols-4 gap-6 mt-6">
                    {/* {carFeaturedProducts.map((product, index) => (
                        <CarFeaturedProductCard key={index} product={product} />
                    ))} */}

                    {carListings.map((product, index) => (
                        <FeaturedCard key={index} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default CarFeaturedProducts;
