import { ReactElement } from 'react';
import { Props } from '../../helpers';

export interface TableContainerProps extends Props {
  title: string;
  description: string;
  children: ReactElement;
}

export const TableContainer = ({
  title,
  description,
  cssOverrides,
  children,
  ...props
}: TableContainerProps) => {
  return (
    <div {...props}>
      <div>
        <h2>header</h2>
        {title}
        {description}
      </div>
      <div>
        <h2>content</h2>
        <h3>Is loading</h3>
        {children}
      </div>
    </div>
  );
};
