import TheJournal from "@/components/common/the-journal";
import WatchJournalMainChild from "./watch-journal-main-child";

// ! Dummy Data
const dummyData = [
    {
        date: "14 Aug 2024",
        title: "Introducing Megir Luxury Watch",
        description:
            "Megir Luxury Watch is a regional business and entertainment hub, but it is also known  as the supercar capital of the world, where prestigious, expensive, and  rare cars are common street décor. The love of fine automobiles is  deeply entrenched in this desert metropolis.",
        readArticleLink: "/",
        image: "",
    },
    {
        date: "14 Aug 2024",
        title: "Women Luxury Diamond Watch",
        description:
            "Timepieces are more than a classy fashion accessory. According to Technavio, the luxury watch mar...",
        readArticleLink: "/",
        image: "/images/categories/watch/the-journal/watch-the-journal-1.png",
    },
    {
        date: "14 Aug 2024",
        title: "Luxury Gold Watch",
        description:
            "Explore 4500+ luxury watches, collector’s watches and exclusive automatic watches for sale worldwide in one simple search",
        readArticleLink: "/",
        image: "/images/categories/watch/the-journal/watch-the-journal-2.png",
    },
    {
        date: "14 Aug 2024",
        title: "Women Luxury Diamond Watch",
        description:
            "Timepieces are more than a classy fashion accessory. According to Technavio, the luxury watch mar...",
        readArticleLink: "/",
        image: "/images/categories/watch/the-journal/watch-the-journal-1.png",
    },
];

const WatchJournal = () => {
    return (
        <div className="container px-4 sm:px-6 py-10 lg:py-20">
            <TheJournal journalData={dummyData} cardClassname="4xl:grid-cols-4">
                <WatchJournalMainChild />
            </TheJournal>
        </div>
    );
};

export default WatchJournal;
