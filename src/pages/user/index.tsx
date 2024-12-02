import { useParams } from "react-router-dom";

// Components Import
import SellerBlock from "@/components/listing-details/seller-block";

// Data Import
import { sellersInfo } from "@/data/listing-details";

const User = () => {
    const { id } = useParams<{ id: string }>();

    const seller = sellersInfo.find((seller) => seller.id === id);

    if (!seller) {
        return <div>Seller not found</div>;
    }

    return (
        <>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99370.15308047879!2d-77.09697689885083!3d38.893859155311134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC%2C%20USA!5e0!3m2!1sen!2s!4v1715164225375!5m2!1sen!2s"
                loading="lazy"
                style={{ width: "100%", height: "600px", border: 0 }}
            ></iframe>

            <div className="card-gradient container-fluid w-full !max-w-[24rem] sm:!max-w-xl md:!max-w-2xl lg:!max-w-4xl xl:!max-w-5xl 2xl:!max-w-7xl p-9 translate-y-[-30%] rounded-lg border border-gray-200 bg-white">
                <SellerBlock seller={seller} completeProfile />
            </div>

            <div className="mt-[-10rem] pb-24" />
        </>
    );
};
export default User;
