/* eslint-disable @typescript-eslint/no-explicit-any */
import DotsDropdown from "@/components/tables/dots-dropdown";
import HeaderCell from "@/components/ui/table/header-cell";

export const listingsTableColumn = (
    order: string,
    column: string,
    onMore: (e: any, row: any) => any,
    onHeaderClick: (value: string) => any
) => [
    {
        title: (
            <HeaderCell
                title={"SL."}
                sortable={true}
                ascending={order === "asc" && column === "id"}
            />
        ),
        onHeaderCell: () => onHeaderClick("id"),
        dataIndex: "id",
        key: "id",
        width: 100,
        render: (id: string) => <p className="whitespace-nowrap">{id}</p>,
    },
    {
        title: <HeaderCell title={"Created At"} />,
        dataIndex: "createdAt",
        key: "createdAt",
        width: 150,
        render: (createdAt: string) => {
            const date = new Date(createdAt);
            createdAt = date.toDateString();

            return <p className="whitespace-nowrap">{createdAt}</p>;
        },
    },
    {
        title: <HeaderCell title={"Title"} />,
        dataIndex: "title",
        key: "title",
        width: 190,
        render: (title: string) => <p className="whitespace-nowrap">{title}</p>,
    },
    {
        title: <HeaderCell title={"Description"} />,
        dataIndex: "description",
        key: "description",
        width: 300,
        render: (description: string) => (
            <p className="whitespace-nowrap">{description}</p>
        ),
    },
    {
        title: <HeaderCell title={"Price"} />,
        dataIndex: "price",
        key: "price",
        width: 100,
        render: (price: number) => <p className="whitespace-nowrap">{price}</p>,
    },
    {
        title: "",
        dataIndex: "action",
        key: "action",
        width: 50,
        render: (_value: any, row: any) => (
            <div className="flex items-center gap-2">
                <DotsDropdown
                    key={row.key}
                    onClick={(e: any) => onMore(e, row)}
                    edit
                    preview
                    // delete={true}
                />
            </div>
        ),
    },
];
