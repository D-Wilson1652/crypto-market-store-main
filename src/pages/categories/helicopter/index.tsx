import FeaturedProducts from "@/components/categories/helicopter/featured-products";
import HelicopterHeaderBottomSection from "@/components/categories/helicopter/helicopter-header-bottom";
import HelicopterHeroBanner from "@/components/categories/helicopter/helicopter-hero-banner";
// import PopularLinks from "@/components/categories/helicopter/popular-links";
import SharedLayout from "@/components/layout/shared-layout";

const Helicopter = () => {
    return (
        <SharedLayout>
            <HelicopterHeaderBottomSection />
            <HelicopterHeroBanner />
            <FeaturedProducts />
            {/* <PopularLinks /> */}
        </SharedLayout>
    );
};
export default Helicopter;
