import { ReactNode } from 'react';
import { tbody, tr } from './styles';

export interface TableRowProps {
    children?: ReactNode | ReactNode[];
}

export const TableRow = ({ children, ...props }: TableRowProps) => {
    return <tr css={tr}>{children}</tr>;
};
