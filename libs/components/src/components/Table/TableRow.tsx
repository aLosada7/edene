import { ReactNode } from 'react';
import { tr } from './styles';

export interface TableRowProps {
    children?: ReactNode | ReactNode[];
}

export const TableRow = ({ children }: TableRowProps) => {
    return <tr css={tr}>{children}</tr>;
};
