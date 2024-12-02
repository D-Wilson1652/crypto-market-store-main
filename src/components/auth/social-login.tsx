import Button from "@/components/ui/button";
import { FBIcon } from "@/components/icons/facebook";
import { GoogleIcon } from "@/components/icons/google";

export default function SocialLogin() {
    const handleSocialLogin = () => {
        console.log("Social login clicked");
    };

    return (
        <>
            <Button
                onClick={handleSocialLogin}
                type="button"
                variant="outline"
                size="xl"
                rounded="lg"
                className="mb-4 w-full py-3 max-xs:text-sm"
            >
                Login with Google
                <GoogleIcon className="ml-5" />
            </Button>
            <Button
                onClick={handleSocialLogin}
                type="button"
                variant="outline"
                size="xl"
                rounded="lg"
                className="w-full py-3 max-xs:text-sm"
            >
                Login with Facebook
                <FBIcon className="ml-5" />
            </Button>
        </>
    );
}
