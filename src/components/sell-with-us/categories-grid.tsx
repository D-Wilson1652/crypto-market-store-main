import CategoryCard from "./category-card";
import {categoryCardsData } from "./data";
import {ResponsiveHoneycomb} from "react-honeycomb-v2";

const CategoriesGrid = () => {

    return (
        <div className="App">
            <ResponsiveHoneycomb
                defaultWidth={1}
                size={150}
                items={categoryCardsData}
                className={"gap-2 "}
                renderItem={(category,index) => (
                    <CategoryCard
                        key={index}
                        image={category.image}
                        name={category.name}
                        link={category.link}
                    />
                )}>
            </ResponsiveHoneycomb>

        </div>


    );
};
export default CategoriesGrid;
