import { ReactNode } from 'react';

import { tbody } from './styles';

export interface ITableHeader {
    key: string;
    name: string;
}

export interface TableBodyProps {
    children?: ReactNode | ReactNode[];
}

export const TableBody = ({ children }: TableBodyProps) => {
    return (
        <tbody css={tbody} aria-live="polite">
            {children}
        </tbody>
    );
};
