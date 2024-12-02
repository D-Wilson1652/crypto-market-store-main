import HomeFeaturedProductsCarousel from "./home-featured-products-carousel";
import HomeFeaturedProductsTwoCarousel from "./home-featured-products-two-carousel";

const FeaturedProducts = () => {
    return (
        <div className="container  px-4 sm:px-6 pb-10 lg:pb-20">
            <HomeFeaturedProductsCarousel />

            <HomeFeaturedProductsTwoCarousel />
        </div>
    );
};
export default FeaturedProducts;
