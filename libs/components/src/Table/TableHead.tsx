import { ReactElement } from 'react';
import { thead, tr } from './styles';

export interface TableHeadProps {
    children?: ReactElement | ReactElement[];
}

export const TableHead = ({ children, ...props }: TableHeadProps) => {
    return (
        <thead css={thead}>
            <tr css={tr}>{children}</tr>
        </thead>
    );
};
