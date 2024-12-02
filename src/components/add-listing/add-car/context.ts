import { atomWithStorage } from "jotai/utils";
import { atom } from "jotai";

import type { AddListingCar } from "@/types/add-listing/car";

export const stepAtom = atom(1);
export const storeAtom = atomWithStorage<AddListingCar>(
    "add-listing-car-edamfihroo8",
    {
        name: "",
        description: "",
        price: 0,

        carLocation: {
            address: "",
            country: "",
            state: "",
            city: "",
            zipCode: "",
            latitude: 0,
            longitude: 0,
        },

        model: "",
        make: "",
        carDetails: {
            year: "",
            gearBox: "",
            fuelType: "",
            carType: "",
            carCondition: "",
            color: "",
            drive: "",
            engine: "",
            driveTrain: "",
            interiorColor: "",
            carPower: {
                power: 0,
                powerType: "",
            },
            mileage: {
                mileage: 0,
                mileageType: "",
            },
        },

        carAdditionalInfo: {
            vatType: "",
            licenseNumber: "",
        },
    }
);
