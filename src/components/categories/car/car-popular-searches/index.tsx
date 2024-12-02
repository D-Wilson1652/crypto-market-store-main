import { useState } from "react";
import { Tab } from "@headlessui/react";

// Components Import
import { TabItem, Tablist, TabPanel, TabPanels } from "@/components/ui/tab";
import CarPopularSearchesCarousel from "./car-popular-searches-carousel";
import Text from "@/components/ui/typography/text";

const CarPopularSearches = () => {
    const [selected, setSelected] = useState(0);

    return (
        <div className="bg-[#F0F2F3] mb-10 lg:mb-20">
            <div className="container px-4 sm:px-6 pt-16 pb-20 xl:pt-20 xl:pb-28 2xl:pt-28 2xl:pb-32 4xl:pt-32 4xl:pb-36">
                <Text
                    tag="h2"
                    className="text-[#050B20] !font-semibold !text-2xl xl:!text-3xl 4xl:!text-4xl pb-6 lg:pb-12"
                >
                    Popular searches
                </Text>

                <Tab.Group
                    selectedIndex={selected}
                    onChange={(val) => setSelected(val)}
                >
                    <Tablist className="relative flex w-full items-center gap-8 lg:gap-14">
                        <>
                            <TabItem motionLayoutId="profileTab">Audi</TabItem>
                            <TabItem motionLayoutId="profileTab">Ford</TabItem>
                            <TabItem motionLayoutId="profileTab">
                                Mercedes Benz
                            </TabItem>
                        </>

                        <div className="absolute bottom-0 left-0 h-0.5 w-full rounded-xl bg-black/20 lg:h-1"></div>
                    </Tablist>

                    <TabPanels className="mt-5 lg:mt-8">
                        <TabPanel>
                            <CarPopularSearchesCarousel />
                        </TabPanel>

                        <TabPanel>
                            <div>This wil container other data</div>
                        </TabPanel>

                        <TabPanel>
                            <div>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Itaque enim quisquam quos sed
                                iste accusamus voluptas laboriosam alias
                                expedita. Hic cumque incidunt saepe aliquam at
                                dignissimos eius dicta itaque architecto?
                            </div>
                        </TabPanel>
                    </TabPanels>
                </Tab.Group>
            </div>
        </div>
    );
};
export default CarPopularSearches;
