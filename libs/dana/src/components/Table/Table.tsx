import { ReactElement, TableHTMLAttributes } from 'react';
import { Props } from '../../helpers';
import { table, tableContent } from './styles';

export interface TableProps
    extends TableHTMLAttributes<HTMLTableElement>,
        Props {
    children: ReactElement[];
}

export const Table = ({ children, ...props }: TableProps) => {
    return (
        <div css={tableContent}>
            <table css={table}>{children}</table>
        </div>
    );
};
