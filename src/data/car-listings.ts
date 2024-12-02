type ProductDescription = {
    title: string;
    description: string;
    features: string[];
    description2: string;
};

type Location = {
    continent: string;
    country: string;
};

export type CarListing = {
    id: string;
    title: string;
    subTitle?: string;
    description: string;
    price: string;
    images: string[];
    productDescription: ProductDescription;
    location: Location;
};

export const carListings = [
    {
        id: "1",
        title: "Maserati Quattroporte 2015",
        subTitle: "Luxury Sedan in Excellent Condition",
        description:
            "This 2015 Maserati Quattroporte is a luxury sedan in excellent mechanical and cosmetic condition, both interior and exterior. With only 94,000 kilometres, this car has been well-maintained and is ready for a new owner. Local pickup is available in Dubai, with RoRo cargo shipping available worldwide at the buyer's expense.",
        price: "$30,250 USD",
        images: [
            "/images/sub-categories/car/product-1/product-1.jpeg",
            "/images/sub-categories/car/product-1/product-2.jpeg",
            "/images/sub-categories/car/product-1/product-3.jpeg",
            "/images/sub-categories/car/product-1/product-4.jpeg",
            "/images/sub-categories/car/product-1/product-5.jpeg",
            "/images/sub-categories/car/product-1/product-6.jpeg",
            "/images/sub-categories/car/product-1/product-7.jpeg",
        ],
        productDescription: {
            title: "2015 Maserati Quattroporte - Excellent Condition",
            description:
                "This Maserati Quattroporte is a 2015 model with 94,000 kilometres. It is in excellent mechanical and cosmetic condition, with a pristine interior and exterior. A perfect choice for luxury car enthusiasts.",
            features: [
                "94,000 kilometres",
                "Model year: 2015",
                "Excellent mechanical condition",
                "Pristine cosmetic condition",
                "Luxury sedan",
                "Available for local pickup in Dubai",
                "RoRo cargo shipping worldwide (buyer’s expense)",
            ],
            description2:
                "This vehicle offers a blend of performance, luxury, and style. Whether you're driving through city streets or cruising on the highway, the Maserati Quattroporte delivers an exceptional driving experience. The car is ready for immediate pickup in Dubai or can be shipped worldwide via RoRo cargo at the buyer’s expense.",
        },
        location: {
            continent: "Asia",
            country: "United Arab Emirates",
        },
    },
];
