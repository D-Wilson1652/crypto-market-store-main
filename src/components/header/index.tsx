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
        null
    );
}
