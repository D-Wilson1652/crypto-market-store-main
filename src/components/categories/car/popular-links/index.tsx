import { useState, useCallback } from "react";

// Components
import Text from "@/components/ui/typography/text";
import Button from "@/components/ui/button";
import PopularLinkGroup from "@/components/common/popular-links/popular-link-group";
import PopularNavLink from "@/components/common/popular-links/popular-nav-link";

// Data Import
import { popularLinks } from "@/data/popular-links";

type ShowMore = {
    cities: boolean;
    countries: boolean;
    cars: boolean;
    jetsHelicopters: boolean;
    yachts: boolean;
    watches: boolean;
    [key: string]: boolean;
};

const PopularLinks = () => {
    const [showMore, setShowMore] = useState<ShowMore>({
        cities: false,
        countries: false,
        cars: false,
        jetsHelicopters: false,
        yachts: false,
        watches: false,
    });

    const handleShowMore = useCallback((key: string) => {
        setShowMore((prev) => ({ ...prev, [key]: !prev[key] }));
    }, []);

    return (
        <div className="container px-4 sm:px-6 4xl:py-9 mb-14 py-10 lg:py-20">
            <Text
                tag="h2"
                className="!text-[#272343] !text-2xl lg:text-4xl !font-medium text-center mb-10 md:mb-16"
            >
                Popular Links
            </Text>

            <div className="flex justify-center flex-wrap border-b gap-12">
                {popularLinks.slice(0, 4).map((group, index) => (
                    <div
                        className="flex flex-col gap-8 px-6 4xl:px-8"
                        key={`popular-links-group-${index}`}
                    >
                        <PopularLinkGroup
                            key={`popular-links-group-${index}`}
                            header={group.header}
                        >
                            {group.links.slice(0, 10).map((link, index) => (
                                <PopularNavLink
                                    key={`popular-links-group-${index}-link-${index}`}
                                    link={link.link}
                                    label={link.label}
                                />
                            ))}
                        </PopularLinkGroup>

                        {showMore[group.key] && (
                            <ul className="space-y-2 -mt-6">
                                {group.links.slice(10).map((link, index) => (
                                    <PopularNavLink
                                        key={`popular-links-group-${index}-link-${index}`}
                                        link={link.link}
                                        label={link.label}
                                    />
                                ))}
                            </ul>
                        )}

                        {group.links.length > 10 && (
                            <Button
                                variant="outline"
                                size="lg"
                                rounded="pill"
                                className="uppercase text-xs mb-8 tracking-wide w-32"
                                onClick={() => handleShowMore(group.key)}
                            >
                                {showMore[group.key]
                                    ? "Show Less"
                                    : "Show More"}
                            </Button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularLinks;
