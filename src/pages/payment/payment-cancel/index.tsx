import { useNavigate } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/24/solid";

// Components Import
import Text from "@/components/ui/typography/text";
import Button from "@/components/ui/button";

// Config Import
import { Routes } from "@/config/routes";

// JSX
const PaymentCancel = () => {
    const navigate = useNavigate();

    return (
        <div className="flex w-full max-w-[648px] flex-col items-center justify-center gap-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <XCircleIcon className="h-auto w-24 text-red/80" />
            <Text tag="h5" className="text-gray-dark">
                Payment Cancelled
            </Text>
            <Button
                size="lg"
                className="tracking-wider"
                onClick={() => navigate(Routes.public.pricing)}
            >
                Try Again
            </Button>
        </div>
    );
};
export default PaymentCancel;
