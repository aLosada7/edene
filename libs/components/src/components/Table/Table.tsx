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

export const Table = ({
    selection,
    selectedRows = [],
    rows = [],
    children,
    css,
    ...rest
}: TableProps) => {
    return (
        <TableProvider
            selection={selection}
            rows={rows}
            selectedRows={selectedRows}
        >
            <div css={tableContent}>
                <table css={[table, css]} {...rest}>
                    {children}
                </table>
            </div>
        </TableProvider>
    );
};
