import { ReactElement } from 'react';
import { Props } from '../../helpers';
import { tableToolbar } from './styles';

export interface TableToolbarProps extends Props {
    children?: ReactElement;
}

export const TableToolbar = ({ children, ...props }: TableToolbarProps) => {
    return (
        <section css={tableToolbar} aria-label="data table toolbar">
            {children}
        </section>
    );
};
