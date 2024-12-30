import { useNavigate } from "react-router-dom";
import {Hexagon, Honeycomb} from "react-honeycomb-v2";
import {categoryCardsData} from "@/components/sell-with-us/data.ts";

type CategoryCardProps = {
    image: string;
    name: string;
    link: string;
};

const CategoryCard = ({ image, name, link, }: CategoryCardProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if(link!=null|| link!=undefined){
            navigate(link);
            window.scrollTo(0, 0);
        }
        else{
            console.log("here")
            if (name=="Sell"){
                console.log("pass")
                return (
                    <div className="App test">
                        <Honeycomb
                            columns={1}
                            size={150}
                            items={categoryCardsData}
                            className={"gap-2"}
                            renderItem={(category, index) => (
                                <CategoryCard
                                    key={index}
                                    image={category.image}
                                    name={category.name}
                                    link={category.link}
                                />
                            )}>
                        </Honeycomb>
                    </div>
                )
            }
        }


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
