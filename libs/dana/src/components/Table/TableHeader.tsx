import { ReactNode } from 'react';
import { cellAlign } from './styles';

export interface TableHeaderProps {
    key: string;
    children?: ReactNode;
    align?: 'left' | 'center' | 'right';
}

export const TableHeader = ({
    children,
    key,
    align = 'center',
    ...props
}: TableHeaderProps) => {
    return (
        <th css={[cellAlign(align)]} key={key}>
            {children}
        </th>
    );
};
