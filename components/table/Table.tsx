import { ReactElement, TableHTMLAttributes } from 'react';
import { Props } from '../../helpers';
import { ITableHeader } from './TableHead';

export interface TableProps
  extends TableHTMLAttributes<HTMLTableElement>,
    Props {
  children: ReactElement[];
}

export const Table = ({ children, ...props }: TableProps) => {
  return <table {...props}>{children}</table>;
};
