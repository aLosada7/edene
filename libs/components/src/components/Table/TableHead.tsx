import { ReactElement } from 'react';
import { Props } from '@edene/foundations';

import { thead } from './styles';
import { TableRow } from './TableRow';

export interface TableHeadProps extends Props {
    children?: ReactElement | ReactElement[];
}

export const TableHead = ({ children, css, ...props }: TableHeadProps) => (
    <thead css={[thead, css]} {...props}>
        <TableRow headerRow>{children}</TableRow>
    </thead>
);
