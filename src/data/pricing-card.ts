const SILVER_MONTHLY_PRODUCT_ID = "";
const GOLD_MONTHLY_PRODUCT_ID = "";
const PLATINUM_MONTHLY_PRODUCT_ID = "";
const DIAMOND_MONTHLY_PRODUCT_ID = "";
const CARBON_MONTHLY_PRODUCT_ID = "";

const SILVER_YEARLY_PRODUCT_ID = "prod_QopcJMubNoEyqx";
const GOLD_YEARLY_PRODUCT_ID = "prod_QpZQloQak0GqOt";
const PLATINUM_YEARLY_PRODUCT_ID = "prod_Qpqw9q23kHN9ls";
const DIAMOND_YEARLY_PRODUCT_ID = "prod_QpqsxM3JMY2lxr";
const CARBON_YEARLY_PRODUCT_ID = "prod_QpZRywfNXiOk52";

export const pricingDataMonthly = {
    silverPlan: {
        isSuggested: false,
        price: "",
        productId: SILVER_MONTHLY_PRODUCT_ID,
        title: "silver",
        image: "/images/pricing/pricing-card/silver-plan.png",
        list: [
            {
                text: "25 listings per year",
            },
            {
                text: "List up to a value of 25,000",
            },
            {
                text: "10% transaction fee per item",
            },
            {
                text: "Access to seller dashboard",
            },
            {
                text: "Personalised silver loyality card",
            },
        ],
    },
    goldPlan: {
        isSuggested: false,
        price: "",
        productId: GOLD_MONTHLY_PRODUCT_ID,
        title: "gold",
        image: "/images/pricing/pricing-card/gold-plan.png",
        list: [
            {
                text: "5 features listings",
            },
            {
                text: "List up to a value of 50,000",
            },
            {
                text: "7.5% transaction fee per item",
            },
            {
                text: "Priority seller support",
            },
            {
                text: "Access to seller dashboard",
            },
            {
                text: "5 features listings",
            },
            {
                text: "Dedicated account manager",
            },
            {
                text: "Personalised gold loyalty card",
            },
        ],
    },
    platinumPlan: {
        isSuggested: false,
        price: "",
        productId: PLATINUM_MONTHLY_PRODUCT_ID,
        title: "platinum",
        image: "/images/pricing/pricing-card/platinum-plan.png",
        list: [
            {
                text: "75 listings per month",
            },
            {
                text: "List up to a value of 250,000",
            },
            {
                text: "5% transaction fee per item",
            },
            {
                text: "Priority seller support and assistance",
            },
            {
                text: "Access to seller dashboard",
            },
            {
                text: "10 featured listings",
            },
            {
                text: "Invitation to exclusive seller events",
            },
            {
                text: "Dedicated account manager",
            },
            {
                text: "Early access to new listings",
            },
            {
                text: "Complimentary marketing services",
            },
            {
                text: "Loyalty reward points",
            },
            {
                text: "A chance to be entered into our luxury giveaways",
            },
            {
                text: "Personalised platinum loyalty card",
            },
        ],
    },
    diamondPlan: {
        isSuggested: false,
        price: "",
        productId: DIAMOND_MONTHLY_PRODUCT_ID,
        title: "diamond",
        image: "/images/pricing/pricing-card/diamond-plan.png",
        list: [
            {
                text: "100 listings per month",
            },
            {
                text: "No limit on listing value",
            },
            {
                text: "2.5 % fee per item",
            },
            {
                text: "VIP seller support and assistance",
            },
            {
                text: "Access to seller dashboard",
            },
            {
                text: "20 featured listings",
            },
            {
                text: "VIP Invitation to exclusive events",
            },
            {
                text: "Dedicated account manager",
            },
            {
                text: "Early access to new listings",
            },
            {
                text: "Complimentary marketing services",
            },
            {
                text: "Free access to Auction Open Day",
            },
            {
                text: "Loyalty reward points",
            },
            {
                text: "A chance to be entered into our luxury giveaways",
            },
        ],
    },
    carbonPlan: {
        isSuggested: false,
        price: "",
        productId: CARBON_MONTHLY_PRODUCT_ID,
        title: "open auction day",
        image: "/images/pricing/pricing-card/carbon-plan.png",
        list: [
            {
                text: "5 Listings",
            },
            {
                text: "List up to a value of £5,000",
            },
            {
                text: "0% transaction fee per item",
            },
            {
                text: "Basic seller suppport",
            },
            {
                text: "Access to seller dashboard",
            },
            {
                text: "A chance to be entered into our luxury giveaway",
            },
        ],
    },
};

export const pricingDataAnnualy = {
    silverPlan: {
        isSuggested: false,
        price: "4,999",
        productId: SILVER_YEARLY_PRODUCT_ID,
        title: "silver",
        image: "/images/pricing/pricing-card/silver-plan.png",
        list: [
            {
                text: "25 listings per year",
            },
            {
                text: "List up to a value of 25,000",
            },
            {
                text: "10% transaction fee per item",
            },
            {
                text: "Access to seller dashboard",
            },
            {
                text: "Personalised silver loyality card",
            },
        ],
        description:
            "List up to 25 items/year with a value of $25,000 each. 10% transaction fee. Includes access to the seller dashboard and a personalized Silver Loyalty Card.",
    },
    goldPlan: {
        isSuggested: true,
        price: "6,999",
        productId: GOLD_YEARLY_PRODUCT_ID,
        title: "gold",
        image: "/images/pricing/pricing-card/gold-plan.png",
        list: [
            {
                text: "5 features listings",
            },
            {
                text: "List up to a value of 50,000",
            },
            {
                text: "7.5% transaction fee per item",
            },
            {
                text: "Priority seller support",
            },
            {
                text: "Access to seller dashboard",
            },
            {
                text: "5 features listings",
            },
            {
                text: "Dedicated account manager",
            },
            {
                text: "Personalised gold loyalty card",
            },
        ],
        description:
            "Feature 5 listings, each up to $50,000. 7.5% transaction fee. Enjoy priority support, a dedicated account manager, and a personalized Gold Loyalty Card.",
    },
    platinumPlan: {
        isSuggested: true,
        price: "9,999",
        productId: PLATINUM_YEARLY_PRODUCT_ID,
        title: "platinum",
        image: "/images/pricing/pricing-card/platinum-plan.png",
        list: [
            {
                text: "75 listings per month",
            },
            {
                text: "List up to a value of 250,000",
            },
            {
                text: "5% transaction fee per item",
            },
            {
                text: "Priority seller support and assistance",
            },
            {
                text: "Access to seller dashboard",
            },
            {
                text: "10 featured listings",
            },
            {
                text: "Invitation to exclusive seller events",
            },
            {
                text: "Dedicated account manager",
            },
            {
                text: "Early access to new listings",
            },
            {
                text: "Complimentary marketing services",
            },
            {
                text: "Loyalty reward points",
            },
            {
                text: "A chance to be entered into our luxury giveaways",
            },
            {
                text: "Personalised platinum loyalty card",
            },
        ],
        description:
            "List up to 75 items/month, each valued up to $250,000. 5% fee. Includes priority support, 10 featured listings, event invitations, and a Platinum Loyalty Card.",
    },
    diamondPlan: {
        isSuggested: false,
        price: "14,999",
        productId: DIAMOND_YEARLY_PRODUCT_ID,
        title: "diamond",
        image: "/images/pricing/pricing-card/diamond-plan.png",
        list: [
            {
                text: "100 listings per month",
            },
            {
                text: "No limit on listing value",
            },
            {
                text: "2.5 % fee per item",
            },
            {
                text: "VIP seller support and assistance",
            },
            {
                text: "Access to seller dashboard",
            },
            {
                text: "20 featured listings",
            },
            {
                text: "VIP Invitation to exclusive events",
            },
            {
                text: "Dedicated account manager",
            },
            {
                text: "Early access to new listings",
            },
            {
                text: "Complimentary marketing services",
            },
            {
                text: "Free access to Auction Open Day",
            },
            {
                text: "Loyalty reward points",
            },
            {
                text: "A chance to be entered into our luxury giveaways",
            },
        ],
        description:
            "List up to 100 items/month with no value limit. 2.5% fee. Get VIP support, 20 featured listings, exclusive event access, and a Diamond Loyalty Card.",
    },
    carbonPlan: {
        isSuggested: false,
        price: "2,500",
        productId: CARBON_YEARLY_PRODUCT_ID,
        title: "carbon",
        image: "/images/pricing/pricing-card/carbon-plan.png",
        list: [
            {
                text: "5 Listings",
            },
            {
                text: "List up to a value of £5,000",
            },
            {
                text: "0% transaction fee per item",
            },
            {
                text: "Basic seller suppport",
            },
            {
                text: "Access to seller dashboard",
            },
            {
                text: "A chance to be entered into our luxury giveaway",
            },
        ],
        description:
            "List 5 items up to £5,000 each with 0% fee. Includes basic support, access to the dashboard, and entry into a luxury giveaway.",
    },
};
