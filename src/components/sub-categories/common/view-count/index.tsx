import { cn } from "@/lib/utils";

// Icons Import
import { EyeIcon } from "@heroicons/react/24/outline";

type ViewCountProps = {
    watchedCount?: number;
};

const styles = {
    iconContainer: "flex items-center space-x-2",
    icon: "h-5 w-5",
};
const { iconContainer, icon } = styles;

const ViewCount = ({ watchedCount }: ViewCountProps) => {
    return (
        <div className="flex justify-end">
            <div className="flex flex-col gap-2">
                <div className={cn("text-gray-dark", iconContainer)}>
                    <EyeIcon className={icon} />
                    <p className="text-sm">
                        <span className="font-semibold">
                            {Math.floor(Math.random() * 10)}
                        </span>{" "}
                        people watching
                    </p>
                </div>

                <div className={cn("text-gray-light", iconContainer)}>
                    <EyeIcon className={icon} />
                    <p className="text-sm">
                        <span className="font-semibold">
                            {watchedCount || Math.floor(Math.random() * 100)}
                        </span>{" "}
                        people watched
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ViewCount;
