import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

// Icons Import
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface ExpandableMenuProps {
    title: string;
    icon: React.ReactNode;
    subMenu: { name: string; path: string }[];
}

const ExpandableMenu = ({ title, icon, subMenu }: ExpandableMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <li
                className={clsx("border-b border-gray-lightest md:hidden", {
                    "bg-gray-lightest border-b-0": isOpen,
                })}
            >
                <div
                    onClick={toggleMenu}
                    className="flex cursor-pointer items-center gap-3 pl-14 pr-10 py-4 text-base capitalize text-gray-dark hover:bg-gray-lightest"
                >
                    {icon}
                    <span>{title}</span>

                    <span className="ml-auto">
                        <ChevronDownIcon
                            className={clsx(
                                "w-4 h-4 transform transition-all duration-150",
                                {
                                    "rotate-180": isOpen,
                                    "rotate-0": !isOpen,
                                }
                            )}
                        />
                    </span>
                </div>
            </li>

            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        {subMenu.map((item) => (
                            <li key={item.name} className="pl-4">
                                <Link
                                    to={item.path}
                                    className="block px-10 py-2 text-base text-gray hover:text-gray-dark"
                                >
                                    <span className="mr-4">-</span>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </>
    );
};

export default ExpandableMenu;
