import JetHeaderBottomSection from "@/components/categories/jet/jet-header-bottom";
import JetPopularSearches from "@/components/categories/jet/jet-popular-searches";
// import PopularLinks from "@/components/categories/helicopter/popular-links";
import FeaturedProducts from "@/components/categories/jet/featured-products";
import JetJournal from "@/components/categories/jet/jet-journal";
import SharedLayout from "@/components/layout/shared-layout";
import JetHeroBanner from "@/components/categories/jet/jet-hero-banner";

const Jet = () => {
    return (
        <SharedLayout>
            <JetHeaderBottomSection />
            <JetHeroBanner />
            <JetPopularSearches />
            <FeaturedProducts />
            <JetJournal />
            {/* <PopularLinks /> */}
        </SharedLayout>
    );
};
export default Jet;
