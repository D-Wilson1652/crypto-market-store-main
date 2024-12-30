import { Link, useNavigate } from "react-router-dom";

// Redux Import
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// Components Import
import Input from "@/components/ui/form-fields/input";
import ActionIcon from "@/components/ui/action-icon";
import SideNavButton from "@/components/ui/side-nav-button";
import Button from "@/components/ui/button";
import ProfileMenu from "@/components/header/profile-menu";

// Icons Imports
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { UserProfileOutline } from "@/components/icons/user-profile-outline";
import { HeartOutline } from "../icons/heart-outline";
import { CloudBarsOutline } from "@/components/icons";

// Config Import
import { Routes } from "@/config/routes";

// Hooks Import
import { useIsMounted } from "@/hooks/use-is-mounted";

export default function Header() {
    const navigate = useNavigate();

    const mounted = useIsMounted();

    const { isAuthenticated, user } = useSelector(
        (state: RootState) => state.userReducer
    );

    const handleOnboardingNav = () => {
        navigate(Routes.private.onboarding);
    };

    return (
        <header className="flex w-full flex-col bg-white">
            <div className="w-full bg-[#F0F2F3] px-4 py-3.5 sm:px-6 lg:py-6 lg:px-14 3xl:px-18 4xl:py-9">
                <div className="grid grid-cols-2 xl:grid-cols-3 container gap-0">
                    <Link to={Routes.public.home} className="w-fit">
                        <img
                            src="/images/common/logo.png"
                            alt="logo"
                            className="w-[15rem] lg:w-[20rem] 3xl:[23rem] h-auto"
                        />
                    </Link>

                    <Input
                        endIcon={
                            <MagnifyingGlassIcon className="h-4 w-4 xl:h-5 xl:w-5" />
                        }
                        placeholder="Search here..."
                        className="bg-white rounded hidden xl:block"
                        inputClassName="border-none focus:ring-0"
                    />

                    <div>
                        <div className="md:hidden w-full flex items-center justify-end">
                            <SideNavButton />
                        </div>

                        <div className="hidden md:flex items-center justify-end gap-3">
                            {isAuthenticated && !user?.onboardingStatus && (
                                <>
                                    <div className="4xl:hidden">
                                        <ActionIcon
                                            variant="outline"
                                            size="lg"
                                            className="bg-white cursor-pointer border-none"
                                            onClick={handleOnboardingNav}
                                        >
                                            <InformationCircleIcon />
                                        </ActionIcon>
                                    </div>

                                    <div className="hidden 4xl:block">
                                        <Button
                                            className="bg-white !text-black hover:!bg-white hover!:text-black flex flex-col items-center gap-1 !font-normal !text-sm !py-[11px]"
                                            size="lg"
                                            onClick={handleOnboardingNav}
                                        >
                                            <span className="text-xs">
                                                Complete Profile
                                            </span>

                                            <div className="w-28 bg-gray-300 rounded h-1">
                                                <div
                                                    className="bg-primary h-1 rounded"
                                                    style={{ width: "40%" }}
                                                ></div>
                                            </div>
                                        </Button>
                                    </div>
                                </>
                            )}

                            <ActionIcon
                                variant="outline"
                                size="lg"
                                className="bg-white cursor-pointer border-none !w-36 !gap-3"
                                onClick={() =>
                                    navigate(Routes.public.sellWithUs)
                                }
                            >
                                <CloudBarsOutline />
                                <p className="text-[#272343] font-medium text-xs">
                                    Sell With Us
                                </p>
                            </ActionIcon>

                            <ActionIcon
                                variant="outline"
                                size="lg"
                                className="bg-white cursor-pointer border-none"
                            >
                                <HeartOutline />
                            </ActionIcon>

                            {mounted ? (
                                <>
                                    {isAuthenticated ? (
                                        <ProfileMenu className="hidden md:block" />
                                    ) : (
                                        <Button
                                            className="bg-white !text-black hover:!bg-white hover!:text-black flex items-center gap-2 !font-normal !text-sm !py-[11px]"
                                            size="lg"
                                            onClick={() =>
                                                navigate(Routes.auth.signIn)
                                            }
                                        >
                                            <UserProfileOutline />
                                            Login
                                        </Button>
                                    )}
                                </>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
