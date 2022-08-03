import { ReactNode } from 'react';
import { cellAlign } from './styles';

export interface TableHeaderProps {
    children?: ReactNode;
    align?: 'left' | 'center' | 'right';
}

export const TableHeader = ({
    children,
    align = 'center',
    ...props
}: TableHeaderProps) => {
    return <th css={[cellAlign(align)]}>{children}</th>;
};
