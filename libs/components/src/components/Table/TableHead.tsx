import { ReactElement } from 'react';
import { Props } from '@edene/foundations';

import { thead } from './styles';
import { TableRow } from './TableRow';

export interface TableHeadProps extends Props {
    children?: ReactElement | ReactElement[];
}

export const TableHead = (props: TableHeadProps) => {
    const { children, css: cssOverrides, ...rest } = props;

    return (
        <thead css={[thead, cssOverrides]} {...rest}>
            <TableRow headerRow>{children}</TableRow>
        </thead>
    );
};
