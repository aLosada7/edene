import { ReactElement } from 'react';
import { Props } from '@edene/foundations';

export interface DataTableProps extends Props {
    children: ReactElement;
}

export const DataTable = ({ children, ...props }: DataTableProps) => {
    return <div {...props}>{children}</div>;
};
