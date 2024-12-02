import { atom } from "jotai";
import type { Onboarding } from "./type";

export const onboardingStepAtom = atom(1);
export const onboardingAtom = atom<Onboarding>({
    gender: "",
    dateOfBirth: "",
    nationality: "",
    residentialAddress: {
        streetAddress: "",
        city: "",
        state: "",
        country: "",
        postalCode: "",
    },

    identityVerification: {
        governmentIdType: "",
        governmentIdNumber: "",
        photoOfGovernmentId: "",
        selfiePhotoWithId: "",
    },

    email: "",
    preferredLanguage: "",
    referralCode: "",

    financialInformation: {
        sourceOfFunds: "",
        annualIncome: "",
        bankAccountDetails: {
            bankName: "",
            accountNumber: "",
            accountHolderName: "",
            swiftBicCode: "",
            iban: "",
        },
        cryptoWalletAddress: "",
    },

    itemsInterest: {
        itemName: "",
        category: "",
        itemDescription: "",
        itemPrice: "",
        hasItemBeenAuthenticated: false,
        authenticationCertificate: "",
        itemCondition: "",
        warranty: false,
        shippingDetails: {
            weight: "",
            dimensions: "",
        },
    },

    regulatoryCompliance: {
        pep: false,
        residentOrCitizen: false,
        financialCrime: false,
    },

    agreementsAndAcknowledgements: {
        termsAndConditions: true,
        privacyPolicy: true,
        riskDisclosure: true,
    },

    hearUsFrom: "",

    commentsOrRequest: "",
    signature: "",
    printName: "",
    dateOfSignature: "",
});
