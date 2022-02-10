import { ReactElement } from 'react';
import { gridRow } from './styles';

export type IRowAlign = '' | 'end-center' | 'space-between-center';
export type IRowDirection = 'row' | 'column';

export interface RowProps {
    /** Row contents aligment */
    align?: IRowAlign;
    direction?: IRowDirection;
    /** Horizontal padding */
    px?: number;
    /** Vertical padding */
    py?: number;
    children?: ReactElement | ReactElement[];
}

export const Row = ({
    children,
    align = '',
    direction = 'row',
    px = 0,
    py = 0,
    ...props
}: RowProps) => {
    return <div css={() => gridRow(align, direction, px, py)}>{children}</div>;
};
