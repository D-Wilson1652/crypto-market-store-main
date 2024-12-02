import { useState } from "react";

// Components Import
import Button from "@/components/ui/button";
import SelectBox from "@/components/ui/select-box";
import Input from "@/components/ui/form-fields/input";

// Icons Imports
import { HomeIconOutline } from "@/components/icons";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const options = [
    {
        label: "Manufacturers",
        icon: <HomeIconOutline className="h-auto w-5" />,
        disabled: true,
    },
    { label: "Bell", value: "bell" },
    { label: "Airbus", value: "airbus" },
    { label: "Robinson", value: "robinson" },
    { label: "Sikorsky", value: "sikorsky" },
    { label: "MD Helicopters", value: "md-helicopters" },
    { label: "Agusta", value: "agusta" },
    { label: "Enstrom", value: "enstrom" },
    { label: "Eurocopter", value: "eurocopter" },
    { label: "Hughes", value: "hughes" },
];

const BannerFilter = () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <div className="flex items-center">
                <Button
                    rounded="none"
                    className="bg-transparent !text-white !px-10 sm:px-12 4xl:px-16 hover:!bg-white hover:!text-[#050810] shadow-md"
                >
                    All Manufacturers
                </Button>

                <Button
                    rounded="none"
                    className="bg-back/40 !text-[#DFDFDF] !px-10 sm:px-12 4xl:px-16 hover:!bg-white hover:!text-[#050810]"
                >
                    All Models
                </Button>
            </div>

            <div className="bg-black/20 max-lg:p-2 py-0.5 flex flex-col gap-2 md:flex-row items-center max-md:rounded-b-lg max-md:border  md:border-t">
                <div className="md:!border-r border-[#DFDFDF] px-4">
                    <SelectBox
                        value={selected}
                        options={options}
                        optionIcon={true}
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        onChange={(data: any) => setSelected(data)}
                        buttonClassName="h-10 lg:h-11 2xl:h-12 !rounded-none !border-none !text-[#737579] !font-bold bg-transparent"
                        className="!border-none w-52"
                        optionsContainerClassName="max-w-54 left-0"
                        arrowIconClassName="right-6"
                        clearable={selected.disabled ? false : true}
                        onClearClick={() => {
                            setSelected(options[0]);
                        }}
                    />
                </div>

                <div className="px-6 flex-1 w-full">
                    <Input
                        startIcon={
                            <MagnifyingGlassIcon className="h-4 w-4 xl:h-5 xl:w-5" />
                        }
                        placeholder="Search by model number"
                        className="g-black/20"
                        inputClassName="border-none focus:ring-0 w-full"
                    />
                </div>

                <div className="pr-6 items-center justify-center hidden md:flex">
                    <Button
                        rounded="none"
                        size="lg"
                        className="bg-white !text-black !px-6 sm:!px-10"
                    >
                        Search
                    </Button>
                </div>

                <div className="items-center justify-center flex md:hidden">
                    <Button
                        rounded="none"
                        size="sm"
                        className="bg-white !text-black !px-6 sm:!px-10"
                    >
                        Search
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default BannerFilter;
