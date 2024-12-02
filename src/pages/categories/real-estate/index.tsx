import { useState, useEffect } from "react";

// Components import
import SharedLayout from "@/components/layout/shared-layout";
import RealEstateHeaderBottomSection from "@/components/categories/real-estate/real-estate-header-bottom";
import HeroBanner from "@/components/categories/real-estate/hero-banner";
import BreadcrumbDisplay from "@/components/categories/real-estate/breadcrumb-display";
// import RealEstatePopularSearches from "@/components/categories/real-estate/real-estate-popular-searches";
import PopularResidence from "@/components/categories/real-estate/popular-residence";
import RealEstateTrending from "@/components/categories/real-estate/real-estate-trending";
import NewToMarket from "@/components/categories/real-estate/new-to-market";
import ServicesWeProvide from "@/components/categories/real-estate/services-we-provide";
// import PopularLinks from "@/components/categories/real-estate/popular-links";
import { useRealEstateCategory } from "@/components/categories/real-estate/context";

// Data import
import { realEstateListings } from "@/data/real-estate-listings";

const RealEstate = () => {
    // States
    const [realEstateList, setRealEstateList] = useState(realEstateListings);
    const [propertyType, setPropertyType] = useState("");

    // Hooks
    const { continent, country } = useRealEstateCategory();

    // Effects
    useEffect(() => {
        const filteredList = realEstateListings.filter((listing) => {
            const isPropertyType = propertyType
                ? listing.propertyType === propertyType
                : true;

            const isContinent = continent
                ? listing.location.continent === continent
                : true;

            const isCountry = country
                ? listing.location.country === country
                : true;

            return isPropertyType && isContinent && isCountry;
        });

        if (filteredList.length < 7) {
            const element = document.getElementById(
                "categories-real-estate-popular-residence"
            );
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                });
            }
        }

        setRealEstateList(filteredList);

    }, [propertyType, continent, country]);

    return (
        <SharedLayout>
            <RealEstateHeaderBottomSection />
            <HeroBanner
                propertyType={propertyType}
                setPropertyType={setPropertyType}
            />
            <BreadcrumbDisplay />
            {/* <RealEstatePopularSearches /> */}
            <PopularResidence realEstateListings={realEstateList} />
            <RealEstateTrending realEstateListings={realEstateList} />
            <NewToMarket realEstateListings={realEstateList} />
            <ServicesWeProvide />
            {/* <PopularLinks /> */}
        </SharedLayout>
    );
};
export default RealEstate;
