import { Link } from "react-router-dom";

type NavLinkProps = {
    link: string;
    label: string;
};

const PopularNavLink = ({ link, label }: NavLinkProps) => {
    return (
        <li>
            <Link to={link} className="inline-block text-xs hover:text-primary">
                {label}
            </Link>
        </li>
    );
};

export default PopularNavLink;
