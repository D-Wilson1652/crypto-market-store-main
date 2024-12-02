type CarLocation = {
    address: string;
    country: string;
    state: string;
    city: string;
    zipCode: string;
    latitude: number;
    longitude: number;
};

type CarPower = {
    power: number;
    powerType: string;
};

type Mileage = {
    mileage: number;
    mileageType: string;
};

type CarDetails = {
    year: string;
    gearBox: string;
    fuelType: string;
    carType: string;
    carCondition: string;
    color: string;
    drive: string;
    engine: string;
    driveTrain: string;
    interiorColor: string;
    carPower: CarPower;
    mileage: Mileage;
};

type CarAdditionalInfo = {
    vatType: string;
    licenseNumber: string;
};

export interface AddListingCar {
    name: string;
    description: string;
    price: number;

    make: string;
    model: string;
    carLocation: CarLocation;

    carDetails: CarDetails;

    carAdditionalInfo: CarAdditionalInfo;
}
