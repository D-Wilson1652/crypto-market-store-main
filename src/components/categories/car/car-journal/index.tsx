import TheJournal from "@/components/common/the-journal";
import CarJournalMainChild from "./car-journal-main-child";

// ! Dummy Data
const dummyData = [
    {
        date: "14 Aug 2024",
        title: "Introducing Dorado: Supercars, Exotic Cars, and Tailor-Made Customizations in Dubai",
        description:
            "Dubai is a regional business and entertainment hub, but it is also known  as the supercar capital of the world, where prestigious, expensive, and  rare cars are common street décor. The love of fine automobiles is  deeply entrenched in this desert metropolis.",
        readArticleLink: "/",
        image: "",
    },
    {
        date: "14 Aug 2024",
        title: "Magnum Opus: Bespoke Luxury Van Built on the Mercedes-Benz Sprinter Base",
        description:
            "This luxury Mercedes Sprinter is the newest addition to Fari Cars’ lineup of bespoke conversions, emphasizing hand-built elegance, premium materials, and the finest craftsmanship available.",
        readArticleLink: "/",
        image: "/images/categories/car/the-journal/car-the-journal-1.png",
    },
    {
        date: "14 Aug 2024",
        title: "Magnum Opus: Bespoke Luxury Van Built on the Mercedes-Benz Sprinter Base",
        description:
            "This luxury Mercedes Sprinter is the newest addition to Fari Cars’ lineup of bespoke conversions, emphasizing hand-built elegance, premium materials, and the finest craftsmanship available.",
        readArticleLink: "/",
        image: "/images/categories/car/the-journal/car-the-journal-2.png",
    },
    {
        date: "14 Aug 2024",
        title: "Magnum Opus: Bespoke Luxury Van Built on the Mercedes-Benz Sprinter Base",
        description:
            "This luxury Mercedes Sprinter is the newest addition to Fari Cars’ lineup of bespoke conversions, emphasizing hand-built elegance, premium materials, and the finest craftsmanship available.",
        readArticleLink: "/",
        image: "/images/categories/car/the-journal/car-the-journal-3.png",
    },
    {
        date: "14 Aug 2024",
        title: "Magnum Opus: Bespoke Luxury Van Built on the Mercedes-Benz Sprinter Base",
        description:
            "This luxury Mercedes Sprinter is the newest addition to Fari Cars’ lineup of bespoke conversions, emphasizing hand-built elegance, premium materials, and the finest craftsmanship available.",
        readArticleLink: "/",
        image: "/images/categories/car/the-journal/car-the-journal-4.png",
    },
];

const CarJournal = () => {
    return (
        <div className="container px-4 sm:px-6 py-10 lg:py-20">
            <TheJournal journalData={dummyData} cardClassname="4xl:grid-cols-4">
                <CarJournalMainChild />
            </TheJournal>
        </div>
    );
};

export default CarJournal;
