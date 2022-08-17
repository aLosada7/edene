import { ReactNode } from 'react';
import { tableHeader, cellAlign } from './styles';

export interface TableHeaderProps {
    children?: ReactNode;
    align?: 'left' | 'center' | 'right';
}

export const TableHeader = ({
    children,
    align = 'center',
    ...props
}: TableHeaderProps) => {
    return <th css={[tableHeader, cellAlign(align)]}>{children}</th>;
};
