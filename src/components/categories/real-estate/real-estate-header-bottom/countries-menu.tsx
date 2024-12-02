import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";

// Utils Import
import { makeQueryString } from "@/utils/makeQueryString";
import { cn } from "@/lib/utils";

// Config Import
import { Routes } from "@/config/routes";

// Context Import
import { useRealEstateCategory } from "@/components/categories/real-estate/context";

// Types Import
import type { RealEstateHeaderBottomType } from "@/components/categories/real-estate/real-estate-header-bottom/data";

type CountriesMenuProps = {
    className?: string;
    buttonClassName?: string;
    data: RealEstateHeaderBottomType[];
};

export default function CountriesMenu({
    className,
    buttonClassName,
    data,
}: CountriesMenuProps) {
    const navigate = useNavigate();
    const { setContinent, setCountry } = useRealEstateCategory();

    // States
    const [selectedContinent, setSelectedContinent] = useState<string | null>(
        null
    );
    const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

    // Functions
    const handleContinentClick = (continent: string, countries: string[]) => {
        setSelectedContinent(continent);
        setSelectedCountries(countries);
    };

    const handleCountryClick = (continent: string, country: string) => {
        setContinent(continent);
        setCountry(country);
        const queryObj = { continent, country };
        const queryString = makeQueryString(queryObj);
        navigate(`${Routes.public.realEstate}?${queryString}`);
    };

    return (
        <>
            <Menu as="div" className={cn("!z-50 overflow-x-auto", className)}>
                <div className="flex gap-4 overflow-x-auto scrollbar-hidden">
                    {data.map((item, index) => (
                        <div
                            className="flex items-center justify-center h-full w-full px-2"
                            key={index}
                        >
                            <Menu.Button
                                className={cn(
                                    "text-sm whitespace-nowrap",
                                    buttonClassName
                                )}
                                onClick={() =>
                                    handleContinentClick(
                                        item.continent,
                                        item.countries
                                    )
                                }
                            >
                                {item.continent}
                            </Menu.Button>
                        </div>
                    ))}
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    {selectedContinent && (
                        <Menu.Items className="absolute left-0 right-0 mt-7 w-full divide-y divide-gray-lighter rounded-md bg-white py-2 shadow-card focus:outline-none max-h-80 overflow-y-auto card-gradient">
                            <div className="pb-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                                {selectedCountries.map((country) => (
                                    <MenuItem
                                        key={country}
                                        country={country}
                                        onClick={() =>
                                            handleCountryClick(
                                                selectedContinent,
                                                country
                                            )
                                        }
                                    />
                                ))}
                            </div>
                        </Menu.Items>
                    )}
                </Transition>
            </Menu>
        </>
    );
}

interface MenuItemProps {
    country: string;
    onClick: () => void;
}

function MenuItem({ country, onClick }: MenuItemProps) {
    return (
        <Menu.Item>
            {({ active }) => (
                <div
                    className={cn(
                        "block rounded-sm px-5 py-2 text-base font-normal capitalize text-gray-dark cursor-pointer",
                        active && "bg-gray-lightest"
                    )}
                    onClick={onClick}
                >
                    {country}
                </div>
            )}
        </Menu.Item>
    );
}
