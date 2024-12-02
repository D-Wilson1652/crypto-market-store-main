import { Link, useLocation } from "react-router-dom";

import { categoryData } from "./data";

const CarHeaderBottomCarousel = () => {
    const location = useLocation();

    return (
        <div className="flex gap-4 overflow-x-auto scrollbar-hidden">
            {categoryData.map((category, index) => (
                <Link
                    to={category.link}
                    key={index}
                    className="flex items-center justify-center h-full cursor-pointer w-full px-2"
                >
                    <h2
                        className={`text-sm whitespace-nowrap ${
                            location.pathname === category.link
                                ? "text-black"
                                : "text-[#636270]"
                        }`}
                    >
                        {category.name}
                    </h2>
                </Link>
            ))}
        </div>
    );
};

export default CarHeaderBottomCarousel;
