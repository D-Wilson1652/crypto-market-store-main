type Specifications = {
    numOfBeds: number;
    numOfBaths: number;
    areaInSqft: number;
    pricePerSqft: number;
};

type Location = {
    latitude: number;
    longitude: number;
};

export interface AddListingRealEstate {
    title: string;
    description: string;
    price: number;
    specifications: Specifications;

    country: string;
    city: string;
    region: string;
    location: Location;

    featureIds: number[];

    propertyType: string;
    propertySubType: string;
}
