
// Config Import
import {Honeycomb, ResponsiveHoneycomb} from "react-honeycomb-v2";
import CategoryCard from "@/components/sell-with-us/category-card.tsx";
import {categoryCardsData} from "@/components/sell-with-us/data.ts";

// ! Dummy Data
const buySellData = [
    {
        image: "/images/sell-with-us/category-1.png",
        name: "buyer",
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
    const items = categoryCardsData;
    const size = 150;

    return(<div className="App">
        <ResponsiveHoneycomb
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
        </ResponsiveHoneycomb>

    </div>
    )
};

export default HomeFeaturedProductsCarousel;
