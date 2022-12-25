import { ReactNode } from 'react';
import { Props } from '@edene/foundations';

import { tableHeader, cellAlign } from './styles';

export type TableHeaderAlign = 'left' | 'center' | 'right';

export interface TableHeaderProps extends Props {
    selectAll?: boolean;
    align?: TableHeaderAlign;
    children?: ReactNode;
}

export const TableHeader = (props: TableHeaderProps) => {
    const { align = 'left', children, css: cssOverrides, ...rest } = props;

    return (
        <th css={[tableHeader, cellAlign(align), cssOverrides]} {...rest}>
            {children}
        </th>
    );
};
