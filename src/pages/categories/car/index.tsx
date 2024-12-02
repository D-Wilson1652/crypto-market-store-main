import SharedLayout from "@/components/layout/shared-layout";
import CarHeaderBottomSection from "@/components/categories/car/car-header-bottom";
import CarHeroBanner from "@/components/categories/car/car-hero-banner";
// import CarPopularSearches from "@/components/categories/car/car-popular-searches";
import CarFeaturedProducts from "@/components/categories/car/car-featured-products";
// import CarJournal from "@/components/categories/car/car-journal";
// import PopularLinks from "@/components/categories/car/popular-links";

const Car = () => {
    return (
        <SharedLayout>
            <CarHeaderBottomSection />
            <CarHeroBanner />
            {/* <CarPopularSearches /> */}
            {/* // ! Div is temp to give padding */}
            <div className="mb-10 lg:mb-20" />
            <CarFeaturedProducts />
            {/* <CarJournal /> */}
            {/* <PopularLinks /> */}
        </SharedLayout>
    );
};

export default Car;
