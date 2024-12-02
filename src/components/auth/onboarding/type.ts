type ResidentialAddress = {
    streetAddress: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
};

type IdentityVerification = {
    governmentIdType: string;
    governmentIdNumber: string;
    photoOfGovernmentId: string;
    selfiePhotoWithId: string;
};

type BankAccountDetails = {
    bankName: string;
    accountNumber: string;
    accountHolderName: string;
    swiftBicCode: string;
    iban: string;
};

type FinancialInformation = {
    sourceOfFunds: string;
    annualIncome: string;
    bankAccountDetails: BankAccountDetails;
    cryptoWalletAddress: string;
};

type ShippingDetails = {
    weight: string;
    dimensions: string;
};

type ItemsInterest = {
    itemName: string;
    category: string;
    itemDescription: string;
    itemPrice: string;
    hasItemBeenAuthenticated: boolean;
    authenticationCertificate: string | null;
    itemCondition: string;
    warranty: boolean;
    shippingDetails: ShippingDetails;
};

type RegulatoryCompliance = {
    pep: boolean;
    residentOrCitizen: boolean;
    financialCrime: boolean;
};

type AgreementsAndAcknowledgements = {
    termsAndConditions: boolean;
    privacyPolicy: boolean;
    riskDisclosure: boolean;
};

export interface Onboarding {
    gender: string;
    dateOfBirth: string;
    nationality: string;
    residentialAddress: ResidentialAddress;
    email: string;
    identityVerification: IdentityVerification;
    preferredLanguage: string;
    referralCode: string;
    financialInformation: FinancialInformation;
    itemsInterest: ItemsInterest;
    regulatoryCompliance: RegulatoryCompliance;
    agreementsAndAcknowledgements: AgreementsAndAcknowledgements;
    hearUsFrom: string;
    commentsOrRequest: string;
    signature: string;
    printName: string;
    dateOfSignature: string;
}
