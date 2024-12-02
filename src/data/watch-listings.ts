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

export type WatchListing = {
    id: string;
    title: string;
    subTitle?: string;
    description: string;
    price: string;
    images: string[];
    productDescription: ProductDescription;
    location: Location;
};

export const watchListings = [
    {
        id: "1",
        title: "Rolex Oyster Perpetual Two-Tone Submariner - 40mm",
        subTitle: "Luxury Dive Watch",
        description:
            "This Rolex Oyster Perpetual Two-Tone Submariner features a stunning blue dial and a durable ceramic bezel. Crafted from solid 18k yellow gold and stainless steel, this 40mm masterpiece is both elegant and robust, offering exceptional water resistance up to 300 meters. Ideal for both formal occasions and underwater adventures, this timepiece comes with original box, papers, and extra bracelet links.",
        price: "$20,800",
        images: [
            "/images/sub-categories/watch/product-1/product-1.jpeg",
            "/images/sub-categories/watch/product-1/product-2.jpeg",
            "/images/sub-categories/watch/product-1/product-3.jpeg",
            "/images/sub-categories/watch/product-1/product-4.jpeg",
        ],
        productDescription: {
            title: "Rolex Oyster Perpetual Two-Tone Submariner",
            description:
                "This luxurious Rolex Oyster Perpetual Two-Tone Submariner is a sophisticated timepiece perfect for the discerning gentleman. With its blue dial, ceramic bezel, and a blend of 18k yellow gold and stainless steel, this watch is not just a statement piece, but also a high-performance tool for underwater exploration. It features automatic movement and a date complication, ensuring precision and convenience.",
            features: [
                "Gender: Men",
                "Dial: Blue",
                "Bezel: Ceramic",
                "Bracelet Material: Solid 18k Yellow Gold, Stainless Steel",
                "Case Diameter: 40mm",
                "Case Material: Solid 18k Yellow Gold, Stainless Steel",
                "Complication: Date",
                "Movement Type: Automatic",
                "Water Resistance: 300 m",
                "Includes original box and papers",
                "Extra bracelet links included",
                "Guaranteed Authenticity",
                "Global expedited shipping included",
            ],
            description2:
                "This authentic Rolex Submariner, blending luxury and functionality, is a must-have for watch enthusiasts. With its impeccable craftsmanship and timeless design, it’s an investment piece that transcends trends.",
        },
        location: {
            continent: "Europe",
            country: "Switzerland",
        },
    },
];
