import { ReactElement, TableHTMLAttributes } from 'react';

import { Props } from '@edene/foundations';

import { table, tableContent } from './styles';

export interface TableProps
    extends TableHTMLAttributes<HTMLTableElement>,
        Props {
    children: ReactElement[];
}

export const Table = ({ children }: TableProps) => {
    return (
        <div css={tableContent}>
            <table css={table}>{children}</table>
        </div>
    );
};
