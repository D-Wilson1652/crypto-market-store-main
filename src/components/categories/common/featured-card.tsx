import { useNavigate } from "react-router-dom";
import Text from "@/components/ui/typography/text";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

// type Product = {
//     image: string;
//     title: string;
//     subtitle?: string;
//     description: string;
//     price: string;
//     link: string;
//     greatPrice: boolean;
// };

type FeaturedCardProps = {
    // product: Product; // TODO: UNCOMMENT LATER
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    product: any;
};

const FeaturedCard = ({ product }: FeaturedCardProps) => {
    const navigate = useNavigate();
    return (
        <div className="max-w-[439px] rounded-2xl border border-[#E9E9E9]">
            <div className="relative">
                <img
                    // src={product.image}
                    src={product.images[0]}
                    alt={product.title}
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
                    className="!font-semibold !text-lg xl:!text-xl 4xl:!text-2xl"
                >
                    {product.title}
                </Text>

                {product.subtitle && (
                    <Text
                        tag="h4"
                        className="text-[#050B20] mt-1 !text-xs lg:!text-sm !font-normal mb-2"
                    >
                        {product.subtitle}
                    </Text>
                )}

                <p
                    className="text-[#737579] mt-2 !text-xs pr-6 overflow-hidden overflow-ellipsis line-clamp-6
                    "
                >
                    {product.description}
                </p>

                <div className="flex items-center justify-between mt-4 border-t border-[#E9E9E9] py-6">
                    <p className="text-[#050B20] font-semibold">
                        {product.price}
                    </p>

                    <div
                        // to={product.link}
                        onClick={() => navigate(product.id)}
                        className="text-[#405FF2] text-sm font-medium hover:underline flex items-center gap-2 cursor-pointer"
                    >
                        View Details
                        <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FeaturedCard;
