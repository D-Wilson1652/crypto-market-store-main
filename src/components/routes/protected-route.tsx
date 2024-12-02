import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
    children?: ReactElement;
    isAuthenticated: boolean;
    isOnboarded?: boolean | undefined;
    userRole?: string | undefined;
    adminOnly?: boolean;
    buyerOnly?: boolean;
    sellerOnly?: boolean;
    allowedRoles?: string[];
    redirect?: string;
}

export default function ProtectedRoute({
    children,
    isAuthenticated,
    isOnboarded,
    userRole,
    adminOnly = false,
    buyerOnly = false,
    sellerOnly = false,
    allowedRoles = [],
    redirect = "/",
}: Props) {
    if (!isAuthenticated) return <Navigate to={redirect} />;

    if (isOnboarded === true) return <Navigate to={redirect} />;

    if (adminOnly && userRole !== "admin") return <Navigate to={redirect} />;

    if (buyerOnly && userRole !== "buyer") return <Navigate to={redirect} />;

    if (sellerOnly && userRole !== "seller") return <Navigate to={redirect} />;

    if (allowedRoles.length > 0 && !allowedRoles.includes(userRole!)) {
        return <Navigate to={redirect} />;
    }

    return children ? children : <Outlet />;
}
