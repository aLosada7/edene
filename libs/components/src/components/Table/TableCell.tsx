import { ReactNode } from 'react';
import { Props } from '@edene/foundations';

import { cellAlign,tableCell } from './styles';

export interface TableCellProps extends Props {
    align?: 'left' | 'center' | 'right';
    children?: ReactNode;
}

export const TableCell = ({
    align = 'left',
    children,
    css,
    ...props
}: TableCellProps) => (
    <th css={[tableCell, cellAlign(align), css]} {...props}>
        {children}
    </th>
);
