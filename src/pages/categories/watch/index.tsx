import SharedLayout from "@/components/layout/shared-layout";
import WatchHeaderBottomSection from "@/components/categories/watch/watch-header-bottom";
import WatchHeroBanner from "@/components/categories/watch/watch-hero-banner";
import FeaturedProducts from "@/components/categories/watch/featured-products";
// import WatchJournal from "@/components/categories/watch/watch-journal";
// import WatchPopularSearches from "@/components/categories/watch/watch-popular-searches";
// import PopularLinks from "@/components/categories/helicopter/popular-links";

const Watch = () => {
    return (
        <SharedLayout>
            <WatchHeaderBottomSection />
            <WatchHeroBanner />
            {/* <WatchPopularSearches /> */}
            {/* // ! Div is temp to give padding */}
            <div className="mb-10 lg:mb-20" />
            <FeaturedProducts />
            {/* <WatchJournal /> */}
            {/* <PopularLinks /> */}
        </SharedLayout>
    );
};
export default Watch;
