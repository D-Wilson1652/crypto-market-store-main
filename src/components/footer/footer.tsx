import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

// Components Import
import Input from "@/components/ui/form-fields/input";
import Button from "@/components/ui/button";
import FooterBottom from "@/components/footer/footer-bottom";
import { useModal } from "@/components/modals/context";

// Config Import
import { Routes } from "@/config/routes";

// Redux Import
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Footer = () => {
    return (
        <>
            <footer className="relative z-10 bg-black rounded-t-2xl pb-10 pt-14 px-4 sm:px-6 lg:px-14 3xl:px-18">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        {/* Left Section */}
                        <div className="w-full px-4 sm:w-2/3 lg:w-4/12 3xl:w-3/12">
                            <div className="mb-10 w-full">
                                <div className="mb-1 inline-block -ml-6">
                                    <img
                                        src="/images/common/logo-white.png"
                                        alt="logo"
                                        className="max-w-full"
                                    />
                                </div>
                                <p className="mb-7 text-base text-white w-10/12">
                                    Experience seamless crypto trading with
                                    trusted, secure transactions. Unlock a world
                                    of digital assets and manage your portfolio
                                    with ease.
                                </p>
                            </div>
                        </div>

                        {/* Middle Section */}
                        <LinkGroup header="Help Center">
                            <NavLink
                                link={`${Routes.public.termsAndConditions}/#terms`}
                                label="Terms of Sale"
                                useAnchor={true}
                            />
                            <NavLink
                                link={`${Routes.public.termsAndConditions}/#refunds`}
                                label="Returns & Refund Policy"
                                useAnchor={true}
                            />
                            <NavLink
                                link={`${Routes.public.termsAndConditions}/#discount`}
                                label="Discount Codes"
                                useAnchor={true}
                            />
                            <NavLink
                                link={`${Routes.public.termsAndConditions}/#warranty`}
                                label="Warranty"
                                useAnchor={true}
                            />
                        </LinkGroup>
                        <LinkGroup header="Categories">
                            <NavLink
                                link={Routes.public.realEstate}
                                label="Real Estate"
                                checkAuth={true}
                            />
                            <NavLink
                                link={Routes.public.car}
                                label="Cars"
                                checkAuth={true}
                            />
                            <NavLink
                                link={Routes.public.watch}
                                label="Watches"
                                checkAuth={true}
                            />

                            <NavLink
                                link={Routes.public.comingSoon}
                                label="Jets"
                                checkAuth={true}
                            />
                            <NavLink
                                link={Routes.public.comingSoon}
                                label="Motorcycles"
                                checkAuth={true}
                            />
                            <NavLink
                                link={Routes.public.comingSoon}
                                label="Helicopters"
                                checkAuth={true}
                            />
                        </LinkGroup>
                        <LinkGroup header="For Business">
                            <NavLink
                                link={Routes.public.sellWithUs}
                                label="Sell with us"
                            />
                        </LinkGroup>

                        {/* Right Section */}
                        <div className="w-full px-4 sm:w-1/2 3xl:w-[23%]">
                            <div className="mb-10 w-full">
                                <h4 className="mb-4 text-lg font-semibold text-[#9A9CAA] uppercase">
                                    Newsletter
                                </h4>
                                <div className="mb-6 flex items-center gap-3">
                                    <Input
                                        placeholder="Enter your email"
                                        className="w-6/12 3xl:w-10/12"
                                        inputClassName="bg-black text-white"
                                    />

                                    <Button
                                        variant="solid"
                                        size="lg"
                                        className="!text-black bg-white"
                                    >
                                        Subscribe
                                    </Button>
                                </div>
                                <p className="text-white/60 text-sm font-medium">
                                    Stay updated with the latest news and
                                    insights from the crypto world. Subscribe to
                                    our newsletter and never miss out on
                                    important updates and exclusive offers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Bottom */}
                <FooterBottom />
            </footer>
        </>
    );
};

export default Footer;

type LinkGroupProps = {
    children: React.ReactNode;
    header: string;
    className?: string;
};

const LinkGroup = ({ children, header, className }: LinkGroupProps) => {
    return (
        <>
            <div
                className={cn(
                    "w-full px-4 sm:w-1/2 lg:w-[20%] 3xl:w-[15%] mt-4",
                    className
                )}
            >
                <div className="mb-10 w-full">
                    <h4 className="mb-4 text-sm font-semibold text-[#9A9CAA] uppercase">
                        {header}
                    </h4>

                    <ul className="space-y-3">{children}</ul>
                </div>
            </div>
        </>
    );
};

type NavLinkProps = {
    link: string;
    label: string;
    useAnchor?: boolean;
    checkAuth?: boolean;
};

const NavLink = ({
    link,
    label,
    useAnchor = false,
    checkAuth = false,
}: NavLinkProps) => {
    const navigate = useNavigate();

    const { openModal } = useModal();

    const { isAuthenticated } = useSelector(
        (state: RootState) => state.userReducer
    );

    const handleNavigation = (link: string) => {
        if (!isAuthenticated) {
            openModal("SIGN_IN");
            return;
        }

        navigate(link);
    };

    if (checkAuth && !isAuthenticated) {
        return (
            <li>
                <button
                    onClick={() => handleNavigation(link)}
                    className="inline-block text-base leading-loose text-white hover:text-gray-200 capitalize hover:underline"
                >
                    {label}
                </button>
            </li>
        );
    }

    return (
        <li>
            {useAnchor ? (
                <a
                    href={link}
                    className="inline-block text-base leading-loose text-white hover:text-gray-200 capitalize hover:underline"
                >
                    {label}
                </a>
            ) : (
                <Link
                    to={link}
                    className="inline-block text-base leading-loose text-white hover:text-gray-200 capitalize hover:underline"
                >
                    {label}
                </Link>
            )}
        </li>
    );
};
