import Text from "@/components/ui/typography/text";
import ServicesWeProvideCard from "./services-we-provide-card";

// ! Dummy Data
const servicesWeProvideData = [
    {
        image: "/images/categories/real-estate/services-we-provide/real-estate-services-we-provide-1.png",
        title: "All The World's Luxury Listings",
        description:
            "We work with 16,000 leading luxury real estate offices globally to give you access to over 400,000 of the finest listings.",
    },
    {
        image: "/images/categories/real-estate/services-we-provide/real-estate-services-we-provide-2.png",
        title: "Personalized Discovery",
        description:
            "We personalise your property search and deliver tailored recommendations. Enjoy custom search filters, wish lists, listing alerts, and personalised feeds.",
    },
    {
        image: "/images/categories/real-estate/services-we-provide/real-estate-services-we-provide-3.png",
        title: "Direct Market Contact",
        description:
            "       Our inventory is updated several times daily, allowing for 3,000 new listings per day, real time market prices and direct contact with listing agents.",
    },
];

const ServicesWeProvide = () => {
    return (
        <div className="bg-[#F0F2F3] pb-10 pt-5 lg:pt-10 lg:pb-20">
            <div className="container px-4 sm:px-6">
                <div className="text-center py-10">
                    <Text
                        tag="h2"
                        className="!text-3xl 2xl:!text-5xl 4xl:!text-7xl tracking-wider !font-bold"
                    >
                        Services We Provide
                    </Text>

                    <Text
                        tag="p"
                        className="!text-lg 2xl:!text-xl 4xl:!text-2xl text-[#2A323E] mt-6 !font-light"
                    >
                        The Leading Marketplace for Luxury Properties & High
                        Value Assets
                    </Text>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesWeProvideData.map((data, index) => (
                        <ServicesWeProvideCard key={index} data={data} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default ServicesWeProvide;
