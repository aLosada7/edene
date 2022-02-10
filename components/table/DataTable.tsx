import { ReactElement } from 'react';

import { Props } from '../../helpers';
import { ITableHeader } from './TableHead';

export interface DataTableProps extends Props {
  rows: any[];
  headers: ITableHeader[];
  isSortable?: boolean;
  isExpansible?: boolean;
  isLoading?: boolean;
  children: ReactElement;
}

export const DataTable = ({
  rows,
  headers,
  cssOverrides,
  children,
  ...props
}: DataTableProps) => {
  return <div {...props}>{children}</div>;
};
