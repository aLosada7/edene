import { createContext, useContext, useState, useMemo } from 'react';

interface TableModel {
    /** if selection column has to be shown */
    selection: boolean;

    /** if all rows are checked */
    allChecked: boolean;

    /** callback to check/uncheck row */
    onToggle: (e: any) => void;

    /** callback to check/uncheck all rows */
    onToggleAll: () => void;

    /** selected rows */
    selectedRows: any[];

    isChecked: (id?: string) => boolean;
}

const TableContext = createContext({} as TableModel);

export const TableProvider = ({
    selection: isSelection,
    rows,
    children,
    ...props
}: any) => {
    const [selection] = useState<boolean>(isSelection);
    const [selectedRows, setSelectedRows] = useState<any[]>(
        props.selectedRows || []
    );

    const allChecked = useMemo(
        () => rows.length === selectedRows.length,
        [rows.length, selectedRows.length]
    );

    const onToggle = (e: any) => {
        const row = rows.find((row: any) => row.id === e.target.id);

        let updatedSelectedRows;
        if (e.target.checked) {
            updatedSelectedRows = [...selectedRows, row];
        } else {
            updatedSelectedRows = selectedRows.filter(
                (row) => row.id !== e.target.id
            );
        }
        setSelectedRows(updatedSelectedRows);
    };

    const onToggleAll = () => {
        setSelectedRows(allChecked ? [] : rows);
    };

    const isChecked = (id?: string) => {
        return selectedRows.find((row) => row.id === id);
    };

    return (
        <TableContext.Provider
            value={{
                allChecked,
                selection,
                onToggle,
                onToggleAll,
                selectedRows,
                isChecked,
            }}
        >
            {children}
        </TableContext.Provider>
    );
};

export const useTable = () => useContext(TableContext);

export default TableProvider;
