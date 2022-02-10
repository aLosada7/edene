import { ReactNode } from 'react';
import { cellAlign } from './styles';

export interface TableCellProps {
    align?: 'left' | 'center' | 'right';
    children?: ReactNode;
}

export const TableCell = ({
    children,
    align = 'center',
    ...props
}: TableCellProps) => {
    return <th css={() => cellAlign(align)}>{children}</th>;
};
