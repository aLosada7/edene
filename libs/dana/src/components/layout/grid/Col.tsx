import { SerializedStyles } from '@emotion/react';
import { ReactNode } from 'react';
import { gridColumnSize, gridColumn } from './styles';

export type ColSize = 0 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 18 | 20 | 21 | 22 | 24;
export type Align =
    | ''
    | 'horizontal-end'
    | 'center'
    | 'vertical-center'
    | 'horizontal-center';
export type IColumnDirection = 'row' | 'column';

export interface ColumnProps {
    sm?: ColSize;
    md?: ColSize | null;
    lg?: ColSize | null;
    xl?: ColSize | null;
    verticalStack?: number;
    horizontalStack?: number;
    align?: Align;
    direction?: IColumnDirection;
    cssOverrides?: SerializedStyles | SerializedStyles[];
    children?: ReactNode;
}

export const Col = ({
    sm = 24,
    md = null,
    lg = null,
    xl = null,
    verticalStack = 0,
    horizontalStack = 0,
    align = '',
    direction = 'row',
    cssOverrides,
    children,
    ...props
}: ColumnProps) => {
    return (
        <div
            css={[
                gridColumnSize(sm, md, lg, xl),
                gridColumn(direction, align, verticalStack, horizontalStack),
                cssOverrides,
            ]}
        >
            {children}
        </div>
    );
};
