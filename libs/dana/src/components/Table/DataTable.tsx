import { ReactElement } from 'react';

import { Props } from '../../helpers';

export interface DataTableProps extends Props {
    children: ReactElement;
}

export const DataTable = ({ children, ...props }: DataTableProps) => {
    return <div {...props}>{children}</div>;
};
