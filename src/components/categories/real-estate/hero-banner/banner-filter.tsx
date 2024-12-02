import { useState } from "react";

// Components Import
import Button from "@/components/ui/button";
import SelectBox from "@/components/ui/select-box";
import Input from "@/components/ui/form-fields/input";
import { toast } from "sonner";

// Icons Imports
import { HomeIconOutline } from "@/components/icons";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

// Libs Import
import { cn } from "@/lib/utils";

const options = [
    {
        label: "Property Type",
        icon: <HomeIconOutline className="h-auto w-5" />,
        disabled: true,
    },
    {
        label: "Apartment",
    },
    {
        label: "House",
    },
    {
        label: "Villa",
    },
    {
        label: "Land",
    },
    {
        label: "Commercial",
    },
    {
        label: "Office",
    },
    {
        label: "Shop",
    },
    {
        label: "Warehouse",
    },
    {
        label: "Garage",
    },
    {
        label: "Other",
    },
];

type BannerFilterProps = {
    propertyType: string;
    setPropertyType: React.Dispatch<React.SetStateAction<string>>;
};

const BannerFilter = ({ propertyType, setPropertyType }: BannerFilterProps) => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <div className="flex items-center lg:gap-2">
                <Button
                    rounded="none"
                    className={cn(
                        "bg-white !text-[#050810] !px-10 sm:px-12 4xl:px-16 hover:!bg-[#050810] hover:!text-white",

                        propertyType === "sell"
                            ? "bg-[#050810] !text-white"
                            : ""
                    )}
                    onClick={() => {
                        if (propertyType === "sell") {
                            setPropertyType("");

                            toast.success("Filter removed");
                        } else {
                            setPropertyType("sell");

                            toast.success("Selling listing selected");
                        }
                    }}
                >
                    Sell
                </Button>

                <Button
                    rounded="none"
                    className={cn(
                        "bg-white/40 !text-white !px-10 sm:px-12 4xl:px-16 hover:!bg-white hover:!text-[#050810]",
                        propertyType === "rent"
                            ? "bg-[#050810] !text-white"
                            : ""
                    )}
                    onClick={() => {
                        if (propertyType === "rent") {
                            setPropertyType("");

                            toast.success("Filter removed");
                        } else {
                            setPropertyType("rent");

                            toast.success("Rental listing selected");
                        }
                    }}
                >
                    Rent
                </Button>
            </div>

            <div className="bg-white max-lg:p-2 flex flex-col gap-2 md:flex-row items-center max-md:rounded-b-lg max-md:border  md:border-t">
                <div className="md:!border-r border-[#DFDFDF] px-4">
                    <SelectBox
                        value={selected}
                        options={options}
                        optionIcon={true}
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        onChange={(data: any) => setSelected(data)}
                        buttonClassName="h-10 lg:h-11 2xl:h-12 !rounded-none !border-none !text-[#737579] !font-bold !ring-[0px]"
                        className="!border-none  w-52"
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
                        placeholder="Search by location or Property ID..."
                        className="bg-white"
                        inputClassName="border-none focus:ring-0 w-full"
                    />
                </div>

                <div className="pr-6 items-center justify-center hidden md:flex">
                    <Button
                        rounded="none"
                        size="lg"
                        className="bg-[#050810] !text-white !px-6 sm:!px-10"
                    >
                        Search
                    </Button>
                </div>

                <div className="items-center justify-center flex md:hidden">
                    <Button
                        rounded="none"
                        size="DEFAULT"
                        className="bg-[#050810] !text-white !px-6 sm:!px-10"
                    >
                        Search
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default BannerFilter;
