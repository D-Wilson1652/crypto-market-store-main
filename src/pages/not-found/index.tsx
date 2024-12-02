import { useNavigate } from "react-router-dom";

import DefaultLayout from "@/components/layout/default-layout";
import Button from "@/components/ui/button";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <DefaultLayout>
            <div className="flex flex-col items-center justify-center h-full p-6">
                <div className="flex items-center gap-4">
                    <h1 className="text-4xl font-bold text-center">
                        Not Found
                    </h1>

                    <InformationCircleIcon className="w-8 h-8" />
                </div>

                <p className="text-gray-500 mt-2 text-center">
                    Oops! The page you are looking for does not exist.
                </p>

                <div className="flex justify-center mt-6 w-full">
                    <Button
                        onClick={() => navigate(-1)}
                        className="!w-[20rem] md:w-auto"
                        size="lg"
                    >
                        Go Back
                    </Button>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default NotFound;
