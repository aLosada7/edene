import { ReactNode } from 'react';
import { Props } from '@edene/foundations';

import { cellAlign,tableHeader } from './styles';

export type TableHeaderAlign = 'left' | 'center' | 'right';

export interface TableHeaderProps extends Props {
    selectAll?: boolean;
    align?: TableHeaderAlign;
    children?: ReactNode;
}

export const TableHeader = (props: TableHeaderProps) => {
    const { align = 'left', children, css, ...rest } = props;

    return (
        <th css={[tableHeader, cellAlign(align), css]} {...rest}>
            {children}
        </th>
    );
};
