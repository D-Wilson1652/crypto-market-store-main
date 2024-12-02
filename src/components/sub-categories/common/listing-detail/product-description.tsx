import { CheckIcon } from "@heroicons/react/24/solid";

import type { RealEstateListing } from "@/data/real-estate-listings";

type ProductDescriptionProps = {
    listingData: RealEstateListing;
};

const ProductDescription = ({ listingData }: ProductDescriptionProps) => {
    return (
        <div className="mt-10">
            <h2 className="text-xl md:text-2xl 2xl:text-3xl font-medium text-[#272343]">
                Product Description
            </h2>

            <h3 className="text-base md:text-lg font-medium text-[#272343] mt-4">
                {listingData.productDescription.title}
            </h3>

            <p className="mt-4 text-gray-600 text-sm">
                {listingData.productDescription.description}
            </p>

            {listingData.productDescription.features.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-base md:text-lg font-medium text-[#272343]">
                        Features
                    </h3>
                    <ul className="mt-2 text-black text-sm list-none list-inside">
                        {listingData.productDescription.features.map(
                            (feature, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-2"
                                >
                                    <CheckIcon className="h-4 w-4 text-[#272343]" />
                                    <span>{feature}</span>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            )}

            <h3 className="mt-6 text-gray-600 text-sm">
                {listingData.productDescription.description2}
            </h3>
        </div>
    );
};
export default ProductDescription;
