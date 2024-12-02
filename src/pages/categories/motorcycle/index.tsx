import FeaturedProducts from "@/components/categories/motorcycle/featured-products";
import MotorcycleHeaderBottomSection from "@/components/categories/motorcycle/motorcycle-header-bottom";
// import PopularLinks from "@/components/categories/motorcycle/popular-links";
import SharedLayout from "@/components/layout/shared-layout";

const Motorcycle = () => {
    return (
        <SharedLayout>
            <MotorcycleHeaderBottomSection />
            {/* Skipping Banner For Now */}
            <FeaturedProducts />
            {/* <PopularLinks /> */}

        </SharedLayout>
    );
};
export default Motorcycle;
