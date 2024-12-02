import Success from "@/components/ui/success";
import { Routes } from "@/config/routes";

const PaymentSuccess = () => {
    return (
        <>
            <Success
                text="Payment Successful"
                navigateUrl={Routes.private.dashboard.membership}
            />
        </>
    );
};
export default PaymentSuccess;
