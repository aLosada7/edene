import { SerializedStyles } from '@emotion/react';
import { ReactNode } from 'react';
import { gridColumnSize, gridColumn } from './styles';

export type ColSize = 0 | 4 | 6 | 8 | 12 | 16 | 18 | 24;
type Align = '' | 'center' | 'vertical-center' | 'horizontal-center';
export type IColumnDirection = 'row' | 'column';

export interface ColumnProps {
    /** Only affects right and left */
    noPadding?: boolean;
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
    noPadding = false,
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
                gridColumn(
                    noPadding,
                    direction,
                    align,
                    verticalStack,
                    horizontalStack
                ),
                cssOverrides,
            ]}
        >
            {children}
        </div>
    );
};
