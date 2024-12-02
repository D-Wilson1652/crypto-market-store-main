import { useState, useEffect } from "react";

// Component import
import Breadcrumb from "@/components/ui/breadcrumb";
import { useRealEstateCategory } from "@/components/categories/real-estate/context";

// Config import
import { Routes } from "@/config/routes";

// Hooks import
import { useSearchParams } from "@/hooks/use-search-params";

const BreadcrumbDisplay = () => {
    const initialBreadcrumbItems = [
        { name: "Home", link: Routes.public.home },
        { name: "Real Estate" },
    ];

    // States
    const [breadcrumbItems, setBreadcrumbItems] = useState(
        initialBreadcrumbItems
    );

    // Context
    const { continent, setContinent, country, setCountry } =
        useRealEstateCategory();

    // Hooks
    const searchParams = useSearchParams();
    const continentURL = searchParams?.get("continent");
    const countryURL = searchParams?.get("country");

    // Effects
    useEffect(() => {
        if (!continentURL || !countryURL) {
            setContinent(null);
            setCountry(null);
            setBreadcrumbItems(initialBreadcrumbItems);
            return;
        }

        if (continentURL) {
            setContinent(continentURL);
        }
        if (countryURL) {
            setCountry(countryURL);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [continentURL, countryURL]);

    useEffect(() => {
        const updatedBreadcrumbItems = [...initialBreadcrumbItems];

        if (continent) {
            updatedBreadcrumbItems.push({ name: continent });
        }
        if (country) {
            updatedBreadcrumbItems.push({ name: country });
        }

        setBreadcrumbItems(updatedBreadcrumbItems);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [continent, country]);

    return (
        <div className="container px-4 sm:px-6 pb-10 lg:pb-20">
            <Breadcrumb items={breadcrumbItems} />
        </div>
    );
};

export default BreadcrumbDisplay;
