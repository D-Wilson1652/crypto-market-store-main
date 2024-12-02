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

type JournalCardProps = {
    journalData: JournalData;
};

const JournalCard = ({ journalData }: JournalCardProps) => {
    return (
        <div className="flex first:justify-start justify-center last:justify-end">
            <div>
                <img
                    src={journalData.image}
                    alt="Journal Card"
                    className="w-full max-h-96 object-cover object-center"
                    draggable="false"
                />

                <Text
                    tag="h2"
                    className="!text-[#323334] !font-normal !text-xl 4xl:text-2xl mt-2"
                >
                    {journalData.title}
                </Text>

                <Text
                    tag="p"
                    className="!text-[#384353] !font-normal !text-xs mt-6"
                >
                    {journalData.description}
                </Text>

                {/* read moer */}
                <Link to={journalData.readArticleLink} className="mt-12">
                    <Text
                        tag="p"
                        className="!text-[#323334] !font-normal !text-xs mt-4 hover:underline uppercase"
                    >
                        Read Article
                    </Text>
                </Link>
            </div>
        </div>
    );
};
export default JournalCard;
