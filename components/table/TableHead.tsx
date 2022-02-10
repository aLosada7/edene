import { ReactElement } from 'react';

import { Props } from '../../helpers';

export interface ITableHeader {
  key: string;
  name: string;
}

export interface TableHeadProps extends Props {
  headers: ITableHeader[];
  isSortable?: boolean;
  isExpansible?: boolean;
  children: ReactElement;
}

export const TableHead = ({
  headers,
  cssOverrides,
  children,
  ...props
}: TableHeadProps) => {
  console.log(headers);
  return (
    <thead>
      <tr>
        {headers.map((header) => (
          <th key={header.key}>{header.name}</th>
        ))}
      </tr>
    </thead>
  );
};
