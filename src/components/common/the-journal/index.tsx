import Text from "@/components/ui/typography/text";
import SingleJournal from "./single-journal";
import JournalCard from "./journal-card";
import { cn } from "@/lib/utils";

// TODO: REFACTOR LATER
type JournalData = {
    date: string;
    title: string;
    description: string;
    readArticleLink: string;
    image: string;
};

type TheJournalProps = {
    children?: React.ReactNode;
    journalData: JournalData[];
    cardClassname?: string;
};

const TheJournal = ({
    children,
    journalData,
    cardClassname,
}: TheJournalProps) => {
    return (
        <div className="xl:px-12 2xl:px-16 4xl:px-24">
            <div className="border-t border-b border-[#DFDEDB] py-6">
                <Text
                    tag="h1"
                    className="!text-[#323334] !font-normal text-xl lg:text-2xl 2xl:text-3xl 4xl:text-4xl text-center"
                >
                    The Journal
                </Text>
            </div>

            {/* Single Journal */}
            <SingleJournal journalData={journalData[0]}>
                {children}
            </SingleJournal>

            {/* Read More */}
            <div className="flex justify-center mt-0.5 border-t border-b border-[#DFDEDB] py-6">
                <Text
                    tag="p"
                    className="!text-[#323334] !font-normal text-xs md:text-sm text-center uppercase cursor-pointer"
                >
                    See All Articles
                </Text>
            </div>

            {/* Carousel or Cards to show data */}
            <div
                className={cn(
                    "grid mt-6 gap-y-8 gap-x-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
                    cardClassname
                )}
            >
                {journalData.slice(1).map((data, index) => (
                    <JournalCard key={index} journalData={data} />
                ))}
            </div>
        </div>
    );
};
export default TheJournal;
