import { ReactNode } from 'react';

import { Props } from '@edene/foundations';

import { gridColumnSize, gridColumn } from './styles';

export type ColSize = 0 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 18 | 20 | 21 | 22 | 24;
export type Align =
    | ''
    | 'horizontal-end'
    | 'center'
    | 'vertical-center'
    | 'horizontal-center';
export type IColumnDirection = 'row' | 'column';

export interface ColumnProps extends Props {
    sm?: ColSize;
    md?: ColSize | null;
    lg?: ColSize | null;
    xl?: ColSize | null;
    borderRight?: boolean;
    vStack?: number;
    hStack?: number;
    align?: Align;
    direction?: IColumnDirection;
    children?: ReactNode;
}

export const Col = (props: ColumnProps) => {
    const {
        sm = 24,
        md = null,
        lg = null,
        xl = null,
        vStack = 0,
        hStack = 0,
        align = '',
        direction = 'row',
        css: cssOverrides,
        children,
        ...rest
    } = props;

    return (
        <div
            css={[
                gridColumnSize(sm, md, lg, xl),
                gridColumn(direction, align, vStack, hStack),
                cssOverrides,
            ]}
            {...rest}
        >
            {children}
        </div>
    );
};
