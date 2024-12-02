import TheJournal from "@/components/common/the-journal";
import JournalMainChild from "@/components/home/home-journal/journal-main-child";

// ! Dummy Data
const dummyData = [
    {
        date: "14 Aug 2024",
        title: "In Monaco, Malaterre's Transformational Land Extension Project Debuts Exquisite Residences for Sale",
        description:
            "In the heart of the Mediterranean, Monaco’s allure as a hub of luxury and sophistication has long attracted global tourists. Now, thanks to the introduction of the new district of Malaterre, it has reached new heights. This groundbreaking project, which began in 2013, exemplifies the Principality’s commitment to innovation, sustainability, and opulence.",
        readArticleLink: "/",
        image: "/images/home/the-journal/home-the-journal-main.png",
    },
    {
        date: "14 Aug 2024",
        title: "Inside a playful, bohemian beach house on Martha's Vineyard",
        description:
            "In the heart of the Mediterranean, Monaco’s allure as a hub of luxury and sophistication has long attracted global tourists. Now, thanks to the introduction of the new district of Malaterre, it has reached new heights. This groundbreaking project, which began in 2013, exemplifies the Principality’s commitment to innovation, sustainability, and opulence.",
        readArticleLink: "/",
        image: "/images/home/the-journal/home-the-journal-1.png",
    },
    {
        date: "14 Aug 2024",
        title: "Modern Texas home is beautiful and completely kid-friendly",
        description:
            "In the heart of the Mediterranean, Monaco’s allure as a hub of luxury and sophistication has long attracted global tourists. Now, thanks to the introduction of the new district of Malaterre, it has reached new heights. This groundbreaking project, which began in 2013, exemplifies the Principality’s commitment to innovation, sustainability, and opulence.",
        readArticleLink: "/",
        image: "/images/home/the-journal/home-the-journal-2.png",
    },
    {
        date: "14 Aug 2024",
        title: "Tudor-style home in Chicago's North Shore is chock-full",
        description:
            "In the heart of the Mediterranean, Monaco’s allure as a hub of luxury and sophistication has long attracted global tourists. Now, thanks to the introduction of the new district of Malaterre, it has reached new heights. This groundbreaking project, which began in 2013, exemplifies the Principality’s commitment to innovation, sustainability, and opulence.",
        readArticleLink: "/",
        image: "/images/home/the-journal/home-the-journal-3.png",
    },
];

const HomeJournal = () => {
    return (
        <div className="hidden sm:block container px-4 sm:px-6 pb-10 lg:pb-20">
            <TheJournal journalData={dummyData}>
                <JournalMainChild />
            </TheJournal>
        </div>
    );
};

export default HomeJournal;
