import DefaultLayout from "@/components/layout/default-layout";
import SignUpComponent from "@/components/auth/sign-up";

const SignUp = () => {
    return (
        <DefaultLayout>
            <SignUpComponent className="h-full" />
        </DefaultLayout>
    );
};
export default SignUp;
