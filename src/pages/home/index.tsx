// Components Import
import SharedLayout from "@/components/layout/shared-layout";
import HomeHeaderBottomSection from "@/components/home/home-header-bottom-section";
import HeroBanner from "@/components/home/hero-banner";
// import PopularLinks from "@/components/home/popular-links";
import StayInTheKnown from "@/components/home/stay-in-the-known";
import Testimonials from "@/components/home/testimonials";
import FeaturedProducts from "@/components/home/featured-products";
import HomeJournal from "@/components/home/home-journal";
import HomeTrending from "@/components/home/home-trending";

const Home = () => {
    return (
        <SharedLayout>
            <HomeHeaderBottomSection />
            <HeroBanner />
            <FeaturedProducts />
            <HomeTrending />
            <HomeJournal />
            <Testimonials />
            <StayInTheKnown />
            {/* <PopularLinks /> */}
        </SharedLayout>
    );
};
export default Home;
