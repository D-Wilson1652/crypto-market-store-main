import HomeFeaturedProductsCarousel from "@/components/home/featured-products/home-featured-products-carousel.tsx";

const FeaturedProducts = () => {
    return (
        <div className="container  px-4 sm:px-6 pb-10 lg:pb-20">
            <HomeFeaturedProductsCarousel />

            {/*
            <HomeFeaturedProductsTwoCarousel />
            */}
        </div>
    );
};
export default FeaturedProducts;
