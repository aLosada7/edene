import { ReactNode, TableHTMLAttributes } from 'react';

import { Props } from '@edene/foundations';

import { table, tableContent } from './styles';
import TableProvider from './TableProvider';

export interface TableProps
    extends TableHTMLAttributes<HTMLTableElement>,
        Props {
    rows?: unknown;
    selectedRows?: unknown;
    selection?: boolean;
    children: ReactNode;
}

export const Table = (props: TableProps) => {
    const {
        selection,
        selectedRows,
        rows = [],
        children,
        css: cssOverrides,
        ...rest
    } = props;

    return (
        <TableProvider
            selection={selection}
            rows={rows}
            selectedRows={selectedRows || []}
        >
            <div css={tableContent}>
                <table css={[table, cssOverrides]} {...rest}>
                    {children}
                </table>
            </div>
        </TableProvider>
    );
};
