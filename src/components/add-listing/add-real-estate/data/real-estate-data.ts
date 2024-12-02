export const propertyTypeOptions = [
    { label: "Select Property Type", value: "", disabled: true },
    { label: "House", value: "House", disabled: false },
    { label: "Apartment", value: "Apartment", disabled: false },
    { label: "Land", value: "Land", disabled: false },
    { label: "Castle", value: "Castle", disabled: false },
    { label: "Chateau", value: "Commercial", disabled: false },
    { label: "Commercial", value: "Commercial", disabled: false },
    { label: "Industrial", value: "Industrial", disabled: false },
    { label: "Office", value: "Office", disabled: false },
    { label: "Residential", value: "Residential", disabled: false },
    { label: "Retail", value: "Retail", disabled: false },
    { label: "Villa", value: "Villa", disabled: false },
    { label: "Farm Ranch", value: "Farm Ranch", disabled: false },
    { label: "Private Island", value: "Private Island", disabled: false },
];

type PropertySubTypeOptions = {
    [key: string]: string[];
}

export const propertySubTypeOptions: PropertySubTypeOptions = {
    House: ["House", "Villa", "Estate", "Country House", "Finca", "Chalet", "Townhouse", "Bungalow", "Cottage", "Farmhouse", "Ranch", "Cave House", "Cortijo", "Casa Rural", "Terraced House", "Semi-Detached House", "Detached House", "Castle", "Manor House", "Mansion", "Mill", "Ruins", "Windmill", "Watermill", "Hotel", "Guest House", "Hostel", "Bed and Breakfast", "Bar", "Restaurant", "Shop", "Office", "Storage Room", "Commercial Premises", "Industrial Unit", "Workshop", "Warehouse", "Garage", "Hotel Room", "Ground Floor", "Middle Floor", "Top Floor", "Penthouse", "Duplex", "Triplex", "Loft", "Studio", "Ground Floor Studio", "Middle Floor Studio", "Top Floor Studio", "Ground Floor Apartment", "Middle Floor Apartment", "Top Floor Apartment", "Penthouse", "Duplex", "Triplex", "Loft", "Studio", "Ground Floor Studio", "Middle Floor Studio", "Top Floor Studio", "Ground Floor Apartment", "Middle Floor Apartment", "Top Floor Apartment", "Penthouse", "Duplex", "Triplex", "Loft", "Studio", "Ground Floor Studio", "Middle Floor Studio", "Top Floor Studio", "Ground Floor Apartment", "Middle Floor Apartment", "Top Floor Apartment", "Penthouse", "Duplex", "Triplex", "Loft", "Studio", "Ground Floor Studio", "Middle Floor Studio", "Top Floor Studio", "Ground Floor Apartment", "Middle Floor Apartment", "Top Floor Apartment", "Penthouse", "Duplex", "Triplex", "Loft", "Studio", "Ground Floor Studio", "Middle Floor Studio", "Top Floor Studio", "Ground Floor Apartment", "Middle Floor Apartment", "Top Floor Apartment", "Penthouse", "Duplex", "Triplex", "Loft", "Studio", "Ground Floor Studio", "Middle Floor Studio", "Top Floor Studio", "Ground Floor Apartment", "Middle Floor Apartment", "Top Floor Apartment", "Penthouse", "Duplex", "Triplex", "Loft", "Studio", "Ground Floor Studio", "Middle Floor Studio", "Top Floor Studio", "Ground Floor Apartment", "Middle Floor Apartment", "Top Floor Apartment", "Penthouse", "Duplex"],
    Apartment: ["Apartment", "Penthouse", "Duplex", "Triplex", "Loft", "Studio", "Ground Floor Studio", "Middle Floor Studio", "Top Floor Studio", "Ground Floor Apartment", "Middle Floor Apartment", "Top Floor Apartment", "Penthouse", "Duplex", "Triplex", "Loft", "Studio", "Ground Floor Studio", "Middle Floor Studio", "Top Floor Studio", "Ground Floor Apartment", "Middle Floor Apartment", "Top Floor Apartment", "Penthouse", "Duplex", "Triplex", "Loft", "Studio", "Ground Floor Studio", "Middle Floor Studio", "Top Floor Studio", "Ground Floor Apartment", "Middle Floor Apartment", "Top Floor Apartment", "Penthouse", "Duplex", "Triplex", "Loft", "Studio", "Ground Floor Studio", "Middle Floor Studio", "Top Floor Studio", "Ground Floor Apartment", "Middle Floor Apartment", "Top Floor Apartment", "Penthouse", "Duplex", "Triplex", "Loft", "Studio", "Ground Floor Studio", "Middle Floor Studio", "Top Floor Studio", "Ground Floor Apartment", "Middle Floor Apartment", "Top Floor Apartment", "Penthouse", "Duplex", "Triplex", "Loft", "Studio", "Ground Floor Studio", "Middle Floor Studio", "Top Floor Studio", "Ground Floor Apartment", "Middle Floor Apartment", "Top Floor Apartment", "Penthouse", "Duplex", "Triplex", "Loft", "Studio", "Ground Floor Studio", "Middle Floor Studio", "Top Floor Studio", "Ground Floor Apartment", "Middle Floor Apartment", "Top Floor Apartment", "Penthouse", "Duplex", "Triplex", "Loft", "Studio", "Ground Floor Studio", "Middle Floor Studio", "Top Floor Studio", "Ground Floor Apartment", "Middle Floor Apartment", "Top Floor Apartment", "Penthouse", "Duplex"],
    Land: ["Land", "Residential Plot", "Commercial Plot"],
    Castle: ["Castle", "Palace"],
    Chateau: ["Chateau", "Manor House"],
    Commercial: ["Hotel", "Guest House", "Hostel", "Bed and Breakfast", "Bar", "Restaurant", "Shop", "Office", "Storage Room", "Commercial Premises", "Industrial Unit", "Workshop", "Warehouse", "Garage"],
    Industrial: ["Industrial Unit", "Workshop", "Warehouse"],
    Office: ["Office"],
    Residential: ["Hotel Room", "Ground Floor", "Middle Floor", "Top Floor", "Penthouse", "Duplex", "Triplex", "Loft", "Studio", "Ground Floor Studio", "Middle Floor Studio", "Top Floor Studio", "Ground Floor Apartment", "Middle Floor Apartment", "Top Floor Apartment", "Penthouse", "Duplex"],
    Retail: ["Shop"],
    Villa: ["Villa", "Estate", "Country House", "Finca", "Chalet", "Townhouse", "Bungalow", "Cottage", "Farmhouse", "Ranch", "Cave House", "Cortijo", "Casa Rural", "Terraced House", "Semi-Detached House", "Detached House"],
    FarmRanch: ["Farm Ranch"],
    PrivateIsland: ["Private Island"],
};