import { ReactNode } from 'react';
import { Props } from '@edene/foundations';

import { gridRow } from './styles';

export type RowAlign = `${
    | 'start'
    | 'center'
    | 'end'
    | 'space-around'
    | 'space-between'}-${'start' | 'center' | 'end'}`;
export type RowDirection = 'row' | 'column';

export interface RowProps extends Props {
    /** Row contents aligment */
    align?: RowAlign;

    direction?: RowDirection;

    /** Horizontal padding */
    px?: number;

    /** Vertical padding */
    py?: number;

    noGlutters?: boolean;

    gap?: number;

    children?: ReactNode;
}

export const Row = ({
    direction = 'row',
    align,
    px = 0,
    py = 0,
    noGlutters = false,
    gap,
    children,
    css,
    ...props
}: RowProps) => (
    <div
        css={[gridRow({ direction, px, py, noGlutters, align, gap }), css]}
        {...props}
    >
        {children}
    </div>
);
