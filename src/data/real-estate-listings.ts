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

export type RealEstateListing = {
    id: string;
    title: string;
    subTitle?: string;
    description: string;
    price: string;
    images: string[];
    productDescription: ProductDescription;
    propertyType?: string;
    location: Location;
};

export const realEstateListings = [
    {
        id: "1",
        title: "Autograph S Series",
        subTitle:
            "Luxurious 2BR Duplex Sky Villa with Private Plunge Pool | Jumeirah Village Circle (JVC)",
        description:
            "Seize this unique opportunity to own a luxurious Duplex Sky Villa in Jumeirah Village Circle. This 2-bedroom villa boasts a private plunge pool, spacious 1911 sq ft layout, and contemporary design. Perfect for both investment and personal use, with a handover set for 2027. Price includes transfer fees. Don’t miss out on this exceptional offering!",
        price: "",
        images: [
            "/images/sub-categories/real-estate/product-1/product-1.jpeg",
            "/images/sub-categories/real-estate/product-1/product-2.jpeg",
            "/images/sub-categories/real-estate/product-1/product-3.jpeg",
            "/images/sub-categories/real-estate/product-1/product-4.jpeg",
        ],
        productDescription: {
            title: "Apartment for Sale at The Address Opera, Downtown",
            description:
                "Properties are delighted to present this stunning 2-bedroom, 2-bathroom apartment located in the prestigious Address Opera Tower 1, Downtown. This corner unit boasts a spacious 1244 sq ft layout with contemporary finishes, offering a blend of modern luxury and convenience. Vacant and ready for immediate occupancy, this apartment is a prime opportunity for discerning buyers seeking a vibrant urban lifestyle.",
            features: [
                "Private Plunge Pool for Ultimate Relaxation",
                " Generous 1911 Sq Ft Layout",
                " Contemporary Design and High-Quality Finishes",
                " Spacious Living Areas",
                "Prime Location in Jumeirah Village Circle (JVC)",
                "High-Standard Amenities",
                "nvestment-Ready with Transfer Fees Included",
                "Handover Scheduled for 2027",
            ],
            description2:
                "The Address Opera is perfectly situated Downtown, offering a dynamic and sophisticated environment with many amenities right at your doorstep. With easy access to world-class dining, shopping, and entertainment, this residence provides a luxurious urban retreat in the city’s heart.",
        },
        propertyType: "rent",
        location: {
            continent: "Asia",
            country: "Afghanistan",
        },
    },
    {
        id: "2",
        title: "Duplex Sky Villa with 2 Bed, 2 Bath, and Private Plunge Pool",
        subTitle: "",
        description:
            "Experience luxury living in this modern Duplex Sky Villa with 2 bedrooms, 2 bathrooms, and a private plunge pool. Spanning 1911 sq ft, this elegant villa in Jumeirah Village Circle (JVC) offers contemporary design and spacious comfort. Handover in 2027.",
        price: "$71k/year",
        images: [
            "/images/sub-categories/real-estate/product-2/product-1.jpeg",
            "/images/sub-categories/real-estate/product-2/product-2.jpeg",
            "/images/sub-categories/real-estate/product-2/product-3.jpeg",
            "/images/sub-categories/real-estate/product-2/product-4.jpeg",
            "/images/sub-categories/real-estate/product-2/product-5.jpeg",
            "/images/sub-categories/real-estate/product-2/product-6.jpeg",
            "/images/sub-categories/real-estate/product-2/product-7.jpeg",
            "/images/sub-categories/real-estate/product-2/product-8.jpeg",
        ],
        productDescription: {
            title: "Luxury Duplex Sky Villa with 2 Bedrooms, 2 Bathrooms, and Private Plunge Pool | Prime JVC Location",
            description:
                "Luxury Duplex Properties is excited to present a remarkable investment opportunity with this off-plan Duplex Sky Villa in the coveted Jumeirah Village Circle (JVC) area. This exquisite 2-bedroom, 2-bathroom villa, spanning a generous 1911 sq ft, is designed for those who seek modern luxury and private relaxation.",
            features: [
                "Private Plunge Pool",
                "Expansive Duplex Layout",
                "Contemporary Finishes",
                "rime JVC Location",
                "Investment Potential",
                "Transfer Fees Included",
            ],
            description2:
                "This Duplex Sky Villa offers the perfect combination of modern elegance, privacy, and a prime location. It’s an ideal choice for investors seeking a prestigious property in a thriving area. Contact us today to seize this exceptional opportunity and secure your future luxury home.",
        },
        propertyType: "sell",
        location: {
            continent: "Africa",
            country: "Nigeria",
        },
    },
    {
        id: "3",
        title: "Elegant 2BR Corner Unit | Prime Downtown Location | Modern Finishes",
        subTitle: "Stylish 2BR Corner Unit in Downtown",
        description:
            "Discover modern luxury in this 2-bedroom, 2-bathroom apartment at The Address Opera, Downtown. Spanning 1244 sq ft, this vacant corner unit in Tower 1 features contemporary finishes, a spacious layout, and panoramic city views. Priced at $1.37M USD, including transfer and fees, it offers a premium urban lifestyle with access to top amenities and vibrant city life.",
        price: "$1.3M",
        images: [
            "/images/sub-categories/real-estate/product-3/product-1.jpeg",
            "/images/sub-categories/real-estate/product-3/product-2.jpeg",
            "/images/sub-categories/real-estate/product-3/product-3.jpeg",
            "/images/sub-categories/real-estate/product-3/product-4.jpeg",
            "/images/sub-categories/real-estate/product-3/product-5.jpeg",
            "/images/sub-categories/real-estate/product-3/product-6.jpeg",
            "/images/sub-categories/real-estate/product-3/product-7.jpeg",
        ],
        productDescription: {
            title: "Apartment for Sale at The Address Opera, Downtown",
            description:
                "Properties are delighted to present this stunning 2-bedroom, 2-bathroom apartment located in the prestigious Address Opera Tower 1, Downtown. This corner unit boasts a spacious 1244 sq ft layout with contemporary finishes, offering a blend of modern luxury and convenience. Vacant and ready for immediate occupancy, this apartment is a prime opportunity for discerning buyers seeking a vibrant urban lifestyle.",
            features: [
                "Stylish Modern Finishes",
                "Expansive Living Space",
                "Built-in Wardrobes",
                "Spacious Walk-in Closet",
                "High-Quality Appliances",
                "Panoramic City Views",
                "24/7 Concierge and Security",
                "State-of-the-Art Fitness Center",
                "Convenient Access to Dining, Shopping, and Entertainment",
                "Close Proximity to Major Transport Links and Landmarks",
            ],
            description2:
                "The Address Opera is perfectly situated Downtown, offering a dynamic and sophisticated environment with many amenities right at your doorstep. With easy access to world-class dining, shopping, and entertainment, this residence provides a luxurious urban retreat in the city’s heart.",
        },
        propertyType: "sell",
        location: {
            continent: "North America",
            country: "United States",
        },
    },
    {
        id: "4",
        title: "Modern 2BR with Sea & Lagoon Views | Prime Location",
        subTitle: "Investor Opportunity: 2BR with Sea and Lagoon Views",
        description:
            "Explore this lucrative investment deal at Sobha Waves. This 2-bedroom apartment, located on the 21st floor, offers stunning sea and lagoon views from its 872 sq ft space. Currently rented at 129K AED until August 6, 2025, it provides immediate rental income. This property is an excellent choice for investors seeking a premium asset with guaranteed returns.",
        price: "$613K",
        images: [
            "/images/sub-categories/real-estate/product-4/product-1.jpeg",
            "/images/sub-categories/real-estate/product-4/product-2.jpeg",
            "/images/sub-categories/real-estate/product-4/product-3.jpeg",
            "/images/sub-categories/real-estate/product-4/product-4.jpeg",
            "/images/sub-categories/real-estate/product-4/product-5.jpeg",
            "/images/sub-categories/real-estate/product-4/product-6.jpeg",
        ],
        productDescription: {
            title: "Investor Deal: Modern 2BR with Sea & Lagoon Views | Prime Location | Apartment for Sale at Sobha Waves",
            description:
                "Ocley Properties is thrilled to offer this excellent investment opportunity in Sobha Waves. This 2-bedroom apartment on the 21st floor features a spacious 872 sq ft layout with breathtaking sea and lagoon views. Currently rented until August 6, 2025, it provides immediate rental income. This property offers a blend of contemporary luxury and lucrative investment potential.",
            features: [
                "Stunning Sea and Lagoon Views",
                "Modern Design and Finishes",
                "Spacious Layout",
                "Built-in Wardrobes",
                "High-Quality Appliances",
                "Secure Building with Concierge Services",
                "Access to Premium Amenities",
                "Prime Location with Easy Access to Key Areas",
            ],
            description2:
                "Sobha Waves offers a dynamic living environment with luxurious amenities and a prime location. This apartment is a perfect choice for investors seeking a profitable opportunity in a prestigious setting.",
        },
        propertyType: "sell",
        location: {
            continent: "South America",
            country: "Brazil",
        },
    },
    {
        id: "5",
        title: "Palm Beach Tower",
        subTitle: "",
        description:
            "Discover the Palm Jumeirah, Dubai’s iconic island offering unrivaled 360-degree views of the Arabian Gulf and city skyline. Featuring luxurious resorts, world-class dining, and vibrant entertainment, this paradise is easily accessible via the Palm Monorail, connecting you effortlessly to highlights like Atlantis The Palm. Experience the ultimate blend of luxury and convenience in one of the city’s most prestigious destinations.",
        price: "",
        images: [
            "/images/sub-categories/real-estate/product-5/product-1.jpeg",
            "/images/sub-categories/real-estate/product-5/product-2.jpeg",
            "/images/sub-categories/real-estate/product-5/product-3.jpeg",
            "/images/sub-categories/real-estate/product-5/product-4.jpeg",
            "/images/sub-categories/real-estate/product-5/product-5.jpeg",
        ],
        productDescription: {
            title: "",
            description:
                "The Palm Jumeirah stands as a dazzling jewel in the heart of Dubai, celebrated for its breathtaking 360-degree vistas of the azure Arabian Gulf and the city’s dynamic skyline. This remarkable island, renowned for its opulent resorts and luxurious residences, is seamlessly integrated into Dubai’s urban fabric through its well-developed transport infrastructure. The Palm Monorail, a marvel of modern engineering, gracefully traverses the island, providing effortless access to iconic destinations such as Atlantis The Palm, a world-famous resort and entertainment complex. Visitors are treated to an unparalleled experience, with convenient connections to an array of high-end hotels, gourmet restaurants, and vibrant entertainment venues. Whether you’re indulging in a leisurely beach day or exploring the island’s lively attractions, Palm Jumeirah’s efficient transport system ensures that every corner of this spectacular enclave is easily reachable, enhancing the allure of one of Dubai’s most sought-after locales.",
            features: [],
            description2: "",
        },
        propertyType: "sell",
        location: {
            continent: "Europe",
            country: "Germany",
        },
    },
    {
        id: "6",
        title: "Rent a Brand New MagEye Townhouse | 3 BHK + Maids | 4 Bath",
        subTitle: "Spacious 3BR + Maid | Modern Finishes | Largest Plot",
        description:
            "Ocley Properties proudly presents this magnificent 3-bedroom plus maid townhouse in the esteemed and peaceful MAG District. This home boasts the largest plot in the area, featuring spacious bedrooms, a maid’s room, modern and high-quality finishes, and a prime location that offers unparalleled luxury and convenience.",
        price: "$52K/year",
        images: [
            "/images/sub-categories/real-estate/product-6/product-1.jpeg",
            "/images/sub-categories/real-estate/product-6/product-2.jpeg",
            "/images/sub-categories/real-estate/product-6/product-3.jpeg",
            "/images/sub-categories/real-estate/product-6/product-4.jpeg",
            "/images/sub-categories/real-estate/product-6/product-5.jpeg",
            "/images/sub-categories/real-estate/product-6/product-6.jpeg",
            "/images/sub-categories/real-estate/product-6/product-7.jpeg",
            "/images/sub-categories/real-estate/product-6/product-8.jpeg",
            "/images/sub-categories/real-estate/product-6/product-9.jpeg",
            "/images/sub-categories/real-estate/product-6/product-10.jpeg",
        ],
        productDescription: {
            title: "Spacious 3BR + Maid | Modern Finishes | Largest Plot",
            description: "Townhouse for rent in MAG Eye, District 7",
            features: [
                "Upgraded Interior",
                "Built in Wardrobes",
                "Basement Parking",
                "Broadband Ready",
                "Walk-in Closet",
                "Allocated Parking Space",
                "Large pool",
                "Cycle track",
                "Parks and Recreation Facilities",
                "Next to Meydan Racecourse",
            ],
            description2:
                "Mag Townhouses are nestled in a lively neighborhood, brimming with dining, shopping, and leisure options. Its central location provides easy access to schools, parks, and key transport links, making it an ideal choice for families and professionals seeking a dynamic yet serene lifestyle. Experience modern living at its finest in this immaculate community. To arrange a viewing, or if you require further information on this project, contact us at 058-521-9438 for a consultation.",
        },
        propertyType: "rent",
        location: {
            continent: "Australia",
            country: "Australia",
        },
    },
    {
        id: "7",
        title: "The AutoGraph Series",
        subTitle: "Coming Soon",
        description:
            "All drawings and dimensions are approximate. Drawinos are not to scale and are subject to change without notice. ¡ he developer reserves the right to make revisions. The units are taken from the typical floor of the building and columns may vary in size depending on the floor level. The furnishings and accessories shown are for representation only. The length and width of the unit and balcony varies depending on which floor and which orientation the unit is located within the building to comply with the building authority regulations.",
        price: "$917K",
        images: [
            "/images/sub-categories/real-estate/product-7/product-1.jpeg",
            "/images/sub-categories/real-estate/product-7/product-2.jpeg",
            "/images/sub-categories/real-estate/product-7/product-3.jpeg",
            "/images/sub-categories/real-estate/product-7/product-4.jpeg",
            "/images/sub-categories/real-estate/product-7/product-5.jpeg",
            "/images/sub-categories/real-estate/product-7/product-6.jpeg",
            "/images/sub-categories/real-estate/product-7/product-7.jpeg",
            "/images/sub-categories/real-estate/product-7/product-8.jpeg",
            "/images/sub-categories/real-estate/product-7/product-9.jpeg",
            "/images/sub-categories/real-estate/product-7/product-10.jpeg",
            "/images/sub-categories/real-estate/product-7/product-11.jpeg",
            "/images/sub-categories/real-estate/product-7/product-12.jpeg",
        ],
        productDescription: {
            title: "DISCLAIMER",
            description:
                "All drawings and dimensions are approximate. Drawinos are not to scale and are subject to change without notice. ¡ he developer reserves the right to make revisions. The units are taken from the typical floor of the building and columns may vary in size depending on the floor level. The furnishings and accessories shown are for representation only. The length and width of the unit and balcony varies depending on which floor and which orientation the unit is located within the building to comply with the building authority regulations",
            features: [],
            description2: "",
        },
        propertyType: "sell",
        location: {
            continent: "Asia",
            country: "Afghanistan",
        },
    },
];
