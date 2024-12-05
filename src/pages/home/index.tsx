// Components Import
import SharedLayout from "@/components/layout/shared-layout";
import HomeHeaderBottomSection from "@/components/home/home-header-bottom-section";
import HeroBanner from "@/components/home/hero-banner";
import FeaturedProducts from "@/components/home/featured-products";

const Home = () => {
    return (
        <SharedLayout>
            <HomeHeaderBottomSection />
            <HeroBanner />
            <FeaturedProducts />

            {/*<HomeTrending />


            <HomeJournal />
            <Testimonials />
            <StayInTheKnown />
            */}

            {/* <PopularLinks /> */}
        </SharedLayout>
    );
};
export default Home;
