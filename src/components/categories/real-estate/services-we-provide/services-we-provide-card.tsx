import Text from "@/components/ui/typography/text";

type ServicesWeProvideCardProps = {
    data: {
        image: string;
        title: string;
        description: string;
    };
};

const ServicesWeProvideCard = ({ data }: ServicesWeProvideCardProps) => {
    return (
        <div className="max-w-[18rem] mx-auto">
            <div className="flex flex-col items-center justify-center text-center">
                <img
                    src={data.image}
                    alt="Services We Provide Card 1"
                    className="aspect-w-16 aspect-h-9"
                />

                {/* title */}
                <Text
                    tag="h3"
                    className="text-lg 2xl:text-xl text-[#212529] mt-6 font-normal"
                >
                    {data.title}
                </Text>

                {/* description */}
                <Text
                    tag="p"
                    className="text-sm 2xl:text-base text-[#6C757D] mt-2 font-light"
                >
                    {data.description}
                </Text>
            </div>
        </div>
    );
};
export default ServicesWeProvideCard;
