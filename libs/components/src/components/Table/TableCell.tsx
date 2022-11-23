import { ReactNode } from 'react';

import { tableCell, cellAlign } from './styles';

export interface TableCellProps {
    align?: 'left' | 'center' | 'right';
    children?: ReactNode;
}

export const TableCell = ({
    children,
    align = 'center',
    ...props
}: TableCellProps) => {
    return <th css={[tableCell, cellAlign(align)]}>{children}</th>;
};
