
// Config Import
import {Honeycomb} from "react-honeycomb-v2";
import CategoryCard from "@/components/sell-with-us/category-card.tsx";

// ! Dummy Data
const buySellData = [
    {
        image: "/images/sell-with-us/category-1.png",
        name: "test",
        link: null,
    },
    {
        image: "/images/sell-with-us/category-1.png",
        name: "Seller",
        link: null,
    },
    {
        image: "/images/sell-with-us/category-1.png",
        name: "Auction only",
        link: null,
    },
]
const HomeFeaturedProductsCarousel = () => {
    const items = buySellData;
    const size = 250;

    return(<div className="App">
        <Honeycomb
            columns={1}
            size={size}
            items={items}
            className={"gap-4"}
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
};

export default HomeFeaturedProductsCarousel;
