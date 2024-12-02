import { useParams } from "react-router-dom";

// Components import
import SharedLayout from "@/components/layout/shared-layout";
import ProductDescription from "@/components/sub-categories/common/listing-detail/product-description";
import TopSection from "@/components/sub-categories/common/listing-detail/top-section";
import GallaryBlock from "@/components/sub-categories/common/listing-detail/gallary-block";
import SellerBlock from "@/components/listing-details/seller-block";
import ViewCount from "@/components/sub-categories/common/view-count";

// Data Imports
import { carListings } from "@/data/car-listings";
import { sellersInfo } from "@/data/listing-details";

const Car = () => {
    const { id } = useParams<{ id: string }>();

    const carListing = carListings.find((listing) => listing.id === id);

    if (!carListing) {
        return <div>Listing not found</div>;
    }

    return (
        <SharedLayout>
            <div className="container-fluid">
                <GallaryBlock images={carListing.images} />

                <ViewCount />

                <div className="px-4 sm:px-6 pb-20 mt-12">
                    <TopSection listingData={carListing} />

                    <div className="border-b border-gray-400 mt-12" />

                    <ProductDescription listingData={carListing} />

                    <div className="border-b border-gray-400 mt-12" />

                    <SellerBlock
                        seller={
                            sellersInfo[
                                id && parseInt(id) < 5 ? parseInt(id) - 1 : 0
                            ]
                        }
                    />
                </div>
            </div>
        </SharedLayout>
    );
};
export default Car;
