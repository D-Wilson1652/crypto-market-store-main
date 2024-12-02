import TheJournal from "@/components/common/the-journal";
import JetJournalMainChild from "./jet-journal-main-child";

// ! Dummy Data
const dummyData = [
    {
        date: "14 Aug 2024",
        title: "Ex Jets: Your Bespoke Experience in the Clouds",
        description:
            "With a personalized, relationship-focused approach to chartering private jets, Ex Jets mark a refreshingly modern take on exclusive travel. To ensure clients feel valued and appreciated throughout the service,  the company takes care to distinguish individual client needs and  wants, whether that be the ultimate luxury or to keep it very simple.",
        readArticleLink: "/",
        image: "",
    },
    {
        date: "14 Aug 2024",
        title: "Officina Armare unveils superyacht-style interior for a private jet",
        description:
            "While business and holiday aviation is in peak season in Europe and the US market has hit a ceili...",
        readArticleLink: "/",
        image: "/images/categories/jet/the-journal/jet-the-journal-1.png",
    },
    {
        date: "14 Aug 2024",
        title: "IWC and Airspeeder are launching an electric flying racecar",
        description:
            "A flying racecar partly engineered by a Swiss watchmaker sounds like the stuff of dreams, but IWC...",
        readArticleLink: "/",
        image: "/images/categories/jet/the-journal/jet-the-journal-2.png",
    },
    {
        date: "14 Aug 2024",
        title: "Premium Selection: 22 Luxury Private Jet Bedrooms",
        description:
            "As private jet flights are becoming more and more popular during the pandemic, we’ve already revi...",
        readArticleLink: "/",
        image: "/images/categories/jet/the-journal/jet-the-journal-3.png",
    },
    {
        date: "14 Aug 2024",
        title: "Premium Selection: 22 Luxury Private Jet Bedrooms",
        description:
            "Explore 4500+ luxury watches, collector’s watches and exclusive automatic watches for sale worldwide in one simple search",
        readArticleLink: "/",
        image: "/images/categories/jet/the-journal/jet-the-journal-4.png",
    },
];

const JetJournal = () => {
    return (
        <div className="container px-4 sm:px-6 py-20">
            <TheJournal journalData={dummyData} cardClassname="4xl:grid-cols-4">
                <JetJournalMainChild />
            </TheJournal>
        </div>
    );
};

export default JetJournal;
