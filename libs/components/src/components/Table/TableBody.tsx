import { Props } from '@edene/foundations';
import { ReactNode } from 'react';

import { tbody } from './styles';

export interface ITableHeader {
    key: string;
    name: string;
}

export interface TableBodyProps extends Props {
    children?: ReactNode | ReactNode[];
}

export const TableBody = (props: TableBodyProps) => {
    const { children, css: cssOverrides, ...rest } = props;

    return (
        <tbody css={tbody} aria-live="polite" {...rest}>
            {children}
        </tbody>
    );
};
