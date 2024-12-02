/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

// Components Import
import Input from "@/components/ui/form-fields/input";
import Pagination from "@/components/ui/pagination";
import Table from "@/components/ui/table";
// import SelectBox from "@/components/ui/select-box";
import TableLoader from "@/components/ui/loader/table-loader";
import { listingsTableColumn } from "@/components/tables/all-listings/all-listings-table-col";

// Config Import
import { Routes } from "@/config/routes";

// Data Import
import { allListingsData } from "./all-listings-data";

// Select box options
// const jobOptions = [
//     { id: "opt-1", label: "All Listings" },
//     { id: "opt-2", label: "Real Estate" },
//     { id: "opt-3", label: "Car" },
//     { id: "opt-4", label: "Watch" },
//     { id: "opt-5", label: "Motorcycle" },
//     { id: "opt-6", label: "Jet" },
//     { id: "opt-7", label: "Helicopter" },
//     { id: "opt-8", label: "Yacht" },
// ];

// JSX Component
export default function AllListingsTable() {
    const navigate = useNavigate();

    const [order, setOrder] = useState("desc");
    const [column, setColumn] = useState("");
    const [data, setData] = useState<typeof allListingsData>([]);
    const [searchFilter, setSearchFilter] = useState("");
    const [current, setCurrent] = useState(1);
    // const [selected, setSelected] = useState(jobOptions[0]);
    const [filteredData, setFilteredData] = useState<typeof allListingsData>(
        []
    );

    const [totalPageLength, setTotalPageLength] = useState(0);

    // Filter data based on search filter
    useEffect(() => {
        if (searchFilter) {
            const filteredData =
                allListingsData?.filter((item) =>
                    item.title
                        .toLowerCase()
                        .includes(searchFilter.toLowerCase())
                ) || [];
            setFilteredData(filteredData);
            setTotalPageLength(filteredData.length);
        } else {
            const start = (current - 1) * 10;
            const offset = current * 10;
            setData(allListingsData?.slice(start, offset) || []);
            setTotalPageLength(allListingsData?.length || 0);
            setFilteredData([]);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchFilter, allListingsData, current]);

    // Handle pagination
    useEffect(() => {
        const start = (current - 1) * 10;
        const offset = current * 10;
        setData(allListingsData?.slice(start, offset) || []);
    }, [current]);

    // Handle edit navigation
    const handleEdit = useCallback(
        (listingId: string) => {
            // navigate(Routes.private.dashboard.editListing(listingId));
            console.log("Edit listing with id: ", listingId);
            navigate(Routes.public.comingSoon);
        },
        [navigate]
    );

    // Handle more button with edit, preview, delete
    const onMore = useCallback(
        (e: any, row: any) => {
            if (e.target.id === "edit") {
                handleEdit(row.id);
            }
        },

        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    // On header click sort table by ascending or descending order
    const onHeaderClick = useCallback(
        (value: string) => ({
            onClick: () => {
                setColumn(value);
                setOrder(order === "desc" ? "asc" : "desc");
                if (order === "desc") {
                    setData([
                        ...data.sort((a: any, b: any) =>
                            a[value] > b[value] ? -1 : 1
                        ),
                    ]);
                } else {
                    setData([
                        ...data.sort((a: any, b: any) =>
                            a[value] > b[value] ? 1 : -1
                        ),
                    ]);
                }
            },
        }),

        // eslint-disable-next-line react-hooks/exhaustive-deps
        [data]
    );

    // Get the columns of the table
    const columns = useMemo(
        () => listingsTableColumn(order, column, onMore, onHeaderClick),
        [order, column, onMore, onHeaderClick]
    );

    return (
        <>
            <div className="mb-6 mt-8 grid grid-cols-1 items-center gap-3 sm:grid-cols-[1fr_262px] md:mt-10 md:gap-5 lg:mt-12 xl:mt-16 xl:gap-10">
                <div className="w-full sm:w-fit">
                    {/* <SelectBox
                        value={selected}
                        variant="outline"
                        options={jobOptions}
                        optionIcon={false}
                        arrowIconClassName="!right-3"
                        className="items-center gap-3 capitalize"
                        optionsContainerClassName="max-w-[196px] right-0"
                        buttonClassName="w-full sm:w-[230px] text-base cursor-pointer !pr-10 !px-4 !py-2 text-sm h-10 lg:h-11 2xl:h-12"
                        onChange={(data: any) => setSelected(data)}
                    /> */}
                </div>

                <Input
                    type="text"
                    variant="outline"
                    placeholder="Search by title"
                    startIcon={<MagnifyingGlassIcon className="h-auto w-5" />}
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    inputClassName="pl-12"
                />
            </div>

            {!data ? (
                <TableLoader />
            ) : (
                <Table
                    data={filteredData.length > 0 ? filteredData : data}
                    columns={columns}
                    variant="minimal"
                    className="text-sm"
                    rowKey={(record) => record.id}
                />
            )}

            <div className="mt-8 text-center">
                <Pagination
                    current={current}
                    total={totalPageLength}
                    pageSize={10}
                    nextIcon="Next"
                    prevIcon="Previous"
                    variant="solid"
                    prevIconClassName="!text-gray-dark"
                    nextIconClassName="!text-gray-dark"
                    onChange={(page: number) => {
                        setCurrent(page);
                    }}
                />
            </div>
        </>
    );
}
