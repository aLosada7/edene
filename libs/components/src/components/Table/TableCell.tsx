import { ReactNode } from 'react';
import { Props } from '@edene/foundations';

import { tableCell, cellAlign } from './styles';

export interface TableCellProps extends Props {
    align?: 'left' | 'center' | 'right';
    children?: ReactNode;
}

export const TableCell = (props: TableCellProps) => {
    const { align = 'left', children, css: cssOverrides, ...rest } = props;

    return (
        <th css={[tableCell, cellAlign(align), cssOverrides]} {...rest}>
            {children}
        </th>
    );
};
