import { ReactNode } from 'react';

import { cell, cellAlign } from './styles';

export interface TableCellProps {
    align?: 'left' | 'center' | 'right';
    children?: ReactNode;
}

export const TableCell = ({
    children,
    align = 'center',
    ...props
}: TableCellProps) => {
    return <th css={[cell, cellAlign(align)]}>{children}</th>;
};
