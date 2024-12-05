import { useNavigate } from "react-router-dom";
import {Hexagon} from "react-honeycomb-v2";

type CategoryCardProps = {
    image: string;
    name: string;
    link: string;
};

const CategoryCard = ({ image, name, link }: CategoryCardProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(link);

        window.scrollTo(0, 0);
    };

    return (
        <Hexagon className={"hexagon"}>
            <div className="w-full h-full object-cover rounded-2xl cursor-pointer  "
                 onClick={handleClick}

            >
                <img
                    className="w-full h-full object-cover rounded-2xl "
                    src={image}
                    alt={name}
                />
                <div
                    className="absolute inset-0 flex items-center justify-center rounded-2xl "
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
                    }}
                />
                <p className="absolute top-48 left-2 text-white text-2xl 2xl:text-3xl 4xl:text-4xl font-light">
                    {name}
                </p>
            </div>
        </Hexagon>

    );
};
export default CategoryCard;
