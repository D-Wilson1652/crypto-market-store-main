import SignInComponent from "@/components/auth/sign-in";
import DefaultLayout from "@/components/layout/default-layout";

const SignIn = () => {
    return (
        <DefaultLayout>
            <SignInComponent className="h-full" />
        </DefaultLayout>
    );
};
export default SignIn;
