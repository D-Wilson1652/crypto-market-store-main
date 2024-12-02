import { Link } from "react-router-dom";
import Text from "@/components/ui/typography/text";

// Icons Import
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import {
    GearBoxOutline,
    PetrolPumpOutline,
    SpeedMeterOutline,
} from "@/components/icons";

type CarFeaturedProduct = {
    image: string;
    name: string;
    description: string;
    topSpeed: string;
    fuelType: string;
    transmission: string;
    price: string;
    link: string;
    greatPrice: boolean;
};

type FeaturedCardProps = {
    product: CarFeaturedProduct;
};

const CarFeaturedProductCard = ({ product }: FeaturedCardProps) => {
    return (
        <div className="max-w-[439px] rounded-2xl border border-[#E9E9E9]">
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[258px] object-cover rounded-t-2xl"
                />

                {product.greatPrice && (
                    <div className="absolute top-4 left-4 text-xs lg:text-sm bg-[#3D923A] text-white px-4 py-1 rounded-full">
                        Great Price
                    </div>
                )}
            </div>

            <div className="py-4 px-6">
                <Text
                    tag="h3"
                    className="!text-base !font-medium text-[#272343]"
                >
                    {product.name}
                </Text>

                <div className="border-b border-[#E9E9E9] pb-2">
                    <Text className="text-[#272343] !text-xs" tag="p">
                        {product.description}
                    </Text>
                </div>

                <div className="flex items-center justify-between flex-wrap p-6">
                    <div className="flex items-center gap-2">
                        <SpeedMeterOutline />

                        <Text
                            className="text-[#272343] !text-sm !font-normal"
                            tag="p"
                        >
                            {product.topSpeed}
                        </Text>
                    </div>

                    <div className="flex items-center gap-2">
                        <PetrolPumpOutline />

                        <Text
                            className="text-[#272343] !text-sm !font-normal"
                            tag="p"
                        >
                            {product.fuelType}
                        </Text>
                    </div>

                    <div className="flex items-center gap-2">
                        <GearBoxOutline />

                        <Text
                            className="text-[#272343] !text-sm !font-normal"
                            tag="p"
                        >
                            {product.transmission}
                        </Text>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-4 border-t border-[#E9E9E9] pb-6 pt-2">
                    <p className="text-[#050B20] font-semibold">
                        {product.price}
                    </p>

                    <Link
                        to={product.link}
                        className="text-[#405FF2] text-sm font-medium hover:underline flex items-center gap-2"
                    >
                        View Details
                        <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default CarFeaturedProductCard;
