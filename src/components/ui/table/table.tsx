import clsx from "clsx";
import RcTable from "rc-table";
import type { ExtractProps } from "@/types";
import Empty from "@/components/ui/empty";

const classes = {
    table: "[&_.rc-table-content]:overflow-x-auto [&_table]:w-full [&_.rc-table-row:hover]:bg-gray-lightest/50",
    thead: "[&_thead]:text-left [&_thead]:rtl:text-right [&_th.rc-table-cell]:uppercase [&_th.rc-table-cell]:text-xs [&_th.rc-table-cell]:font-medium [&_th.rc-table-cell]:tracking-wider",
    tCell: "[&_.rc-table-cell]:px-3 [&_th.rc-table-cell]:py-4 [&_td.rc-table-cell]:py-4",
    variants: {
        classic:
            "[&_thead]:bg-gray-100 [&_.rc-table-container]:border-x [&_.rc-table-container]:border-gray-300 [&_td.rc-table-cell]:border-b [&_td.rc-table-cell]:border-gray-300 [&_thead]:border-y [&_thead]:border-gray-300",
        modern: "[&_thead]:bg-gray-100 [&_td.rc-table-cell]:border-b [&_td.rc-table-cell]:border-gray-300",
        minimal: "[&_thead]:bg-gray-lightest [&_thead]:text-gray-dark",
        elegant:
            "[&_thead]:border-y [&_thead]:border-gray-300 [&_td.rc-table-cell]:border-b [&_td.rc-table-cell]:border-gray-300",
    },
    striped: "[&_.rc-table-row:nth-child(2n)_.rc-table-cell]:bg-gray-100/50",
};

type RCTableProps = ExtractProps<typeof RcTable>;

export interface TableProps
    extends Omit<RCTableProps, "className" | "emptyText"> {
    isLoading?: boolean;
    skeleton?: React.ReactNode;
    emptyText?: React.ReactNode;
    variant?: keyof typeof classes.variants;
    striped?: boolean;
    className?: string;
}

export default function Table({
    isLoading,
    skeleton,
    striped,
    variant = "classic",
    emptyText,
    className,
    ...props
}: TableProps) {
    if (isLoading) {
        return <>{skeleton}</>;
    }
    return (
        <RcTable
            className={clsx(
                classes.table,
                classes.thead,
                classes.tCell,
                classes.variants[variant],
                striped && classes.striped,
                className
            )}
            emptyText={emptyText ? emptyText : <Empty />}
            {...props}
        />
    );
}

Table.displayName = "Table";
