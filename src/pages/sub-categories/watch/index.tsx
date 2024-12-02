import { useParams } from "react-router-dom";

// Components import
import SharedLayout from "@/components/layout/shared-layout";
import ProductDescription from "@/components/sub-categories/common/listing-detail/product-description";
import TopSection from "@/components/sub-categories/common/listing-detail/top-section";
import GallaryBlock from "@/components/sub-categories/common/listing-detail/gallary-block";
import SellerBlock from "@/components/listing-details/seller-block";
import ViewCount from "@/components/sub-categories/common/view-count";

// Data Imports
import { watchListings } from "@/data/watch-listings";
import { sellersInfo } from "@/data/listing-details";

const Watch = () => {
    const { id } = useParams<{ id: string }>();

    const watchListing = watchListings.find((listing) => listing.id === id);

    if (!watchListing) {
        return <div>Listing not found</div>;
    }

    return (
        <SharedLayout>
            <div className="container-fluid">
                <GallaryBlock images={watchListing.images} />

                <ViewCount />

                <div className="px-4 sm:px-6 pb-20 mt-4">
                    <TopSection listingData={watchListing} />

                    <div className="border-b border-gray-400 mt-12" />

                    <ProductDescription listingData={watchListing} />

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
export default Watch;
