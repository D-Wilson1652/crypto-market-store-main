import Text from "@/components/ui/typography/text";
import { Link } from "react-router-dom";

// TODO: REFACTOR LATER
type JournalData = {
    date: string;
    title: string;
    description: string;
    readArticleLink: string;
    image: string;
};

type SingleJournalProps = {
    children?: React.ReactNode;
    journalData: JournalData;
};

const SingleJournal = ({ children, journalData }: SingleJournalProps) => {
    return (
        <div className="flex relative">
            <div className="hidden 2xl:flex items-center justify-center 2xl:border-r border-[#DFDEDB] my-2 px-6">
                <div className="transform -rotate-90">
                    <Text
                        tag="p"
                        className="!text-[#323334] !font-normal 2xl:text-xl 4xl:text-2xl uppercase absolute w-[12rem] top-1/2 left-1/2 transform -translate-x-[35%] -translate-y-[80%]"
                    >
                        Read Stories
                    </Text>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center flex-1">
                <div className="flex flex-col justify-center lg:w-1/2 py-12 lg:py-36 px-6">
                    <Text
                        tag="p"
                        className="!text-[#323334] !font-normal text-sm 2xl:text-lg 4xl:text-xl"
                    >
                        {journalData.date}
                    </Text>

                    <Text
                        tag="h2"
                        className="!text-[#323334] !font-normal text-xl lg:text-2xl 2xl:text-3xl 4xl:text-4xl mt-2"
                    >
                        {journalData.title}
                    </Text>

                    <Text
                        tag="p"
                        className="!text-[#384353] !font-normal text-xs 2xl:text-sm 4xl:text-base mt-12"
                    >
                        {journalData.description}
                    </Text>

                    <Link to={journalData.readArticleLink} className="mt-12">
                        <Text
                            tag="p"
                            className="!text-[#323334] !font-normal text-xs 2xl:text-sm hover:underline"
                        >
                            Read Article
                        </Text>
                    </Link>
                </div>

                <div className="lg:w-1/2 max-lg:pb-12">{children}</div>
            </div>
        </div>
    );
};
export default SingleJournal;
