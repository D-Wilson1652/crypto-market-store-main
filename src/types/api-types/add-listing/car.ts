import { AddListingCar } from "@/types/add-listing/car";

type CarLocation = {
    address: string;
    country: string;
    state: string;
    city: string;
    zipCode: string;
    latitude: string;
    longitude: string;
};

type CarPower = {
    power: string;
    powerType: string;
};

type Mileage = {
    mileage: string;
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

export type AddListingCarRequest = Omit<
    AddListingCar,
    "carLocation" | "carDetails"
> & {
    carLocation: CarLocation;
    carDetails: CarDetails;
};

export type AddListingCarResponse = AddListingCarRequest & {
    id: string;
};
