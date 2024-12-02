import { useNavigate } from "react-router-dom";

import DefaultLayout from "@/components/layout/default-layout";
import Button from "@/components/ui/button";

const ComingSoon = () => {
    const navigate = useNavigate();
    return (
        <DefaultLayout>
            <div className="flex flex-col items-center justify-center h-full p-6">
                <h1 className="text-4xl font-bold text-center">Coming Soon</h1>
                <p className="text-gray-500 mt-2 text-center">
                    This feature is not yet available. Please check back later.
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
export default ComingSoon;
