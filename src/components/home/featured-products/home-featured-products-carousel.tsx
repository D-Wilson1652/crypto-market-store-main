
// Config Import
import {Honeycomb} from "react-honeycomb-v2";
import CategoryCard from "@/components/sell-with-us/category-card.tsx";
import {categoryCardsData} from "@/components/sell-with-us/data.ts";

// ! Dummy Data

const Hive_Start = ()=>{
    if (hive_options){
    console.log(hive_options)
        return (
            <div className="App test">
                <Honeycomb
                    columns={1}
                    size={150}
                    items={hive_options}
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
    else{
        console.log("still default")
        return (
            <div className="App test">
                <Honeycomb
                    columns={1}
                    size={150}
                    items={hive_options}
                    classN
                    ame={"gap-2"}
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
const hive_options = [
    {
        image: "/images/home/hive-design/Buy.jpg",
        name: "Buy",
        data: categoryCardsData,
    },
    {
        image: "/images/home/hive-design/Sell.jpg",
        name: "Sell",
        data:categoryCardsData
    },
    {
        image: "/images/home/hive-design/Auction.jpg",
        name: "Auction Only",
        data: categoryCardsData

    }]

const HomeFeaturedProductsCarousel = () => {

    return (
        <Hive_Start></Hive_Start>)
};

export default HomeFeaturedProductsCarousel;
