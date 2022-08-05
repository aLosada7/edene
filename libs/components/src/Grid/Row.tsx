import { ReactElement } from 'react';

import { Props } from '@edene/foundations';

import { gridRow } from './styles';

export type IRowAlign =
    | ''
    | 'start-center'
    | 'end-center'
    | 'space-between-center';
export type IRowDirection = 'row' | 'column';

export interface RowProps extends Props {
    /** Row contents aligment */
    align?: IRowAlign;
    direction?: IRowDirection;
    /** Horizontal padding */
    px?: number;
    /** Vertical padding */
    py?: number;
    noGlutters?: boolean;
    children?: ReactElement | ReactElement[];
}

export const Row = ({
    align = '',
    direction = 'row',
    px = 0,
    py = 0,
    noGlutters = false,
    children,
    cssOverrides,
}: RowProps) => {
    return (
        <div
            css={[gridRow(align, direction, px, py, noGlutters), cssOverrides]}
        >
            {children}
        </div>
    );
};
