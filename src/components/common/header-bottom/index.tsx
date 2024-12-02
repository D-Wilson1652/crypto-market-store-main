import { useNavigate, useLocation } from "react-router-dom";

// Components Import
import { useModal } from "@/components/modals/context";

// Redux Import
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

type HeaderBottomProps = {
    data: {
        name: string;
        link: string;
    }[];
};

const HeaderBottom = ({ data }: HeaderBottomProps) => {
    const navigate = useNavigate();
    const location = useLocation();

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

    return (
        <div className="flex gap-4 overflow-x-auto scrollbar-hidden">
            {data.map((item, index) => (
                <div
                    onClick={() => handleNavigation(item.link)}
                    key={index}
                    className="flex items-center justify-center h-full cursor-pointer w-full px-2"
                >
                    <h2
                        className={`text-sm whitespace-nowrap ${
                            location.pathname === item.link
                                ? "text-black"
                                : "text-[#636270]"
                        }`}
                    >
                        {item.name}
                    </h2>
                </div>
            ))}
        </div>
    );
};

export default HeaderBottom;
