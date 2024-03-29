import { ReactNode } from 'react';
import { Props } from '@edene/foundations';

import { gridColumn,gridColumnSize } from './styles';

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
    align?: Align;
    direction?: IColumnDirection;
    gap?: number;
    children?: ReactNode;
}

export const Col = (props: ColumnProps) => {
    const {
        sm = 24,
        md = null,
        lg = null,
        xl = null,
        align = '',
        direction = 'row',
        css,
        gap,
        children,
        ...rest
    } = props;

    return (
        <div
            css={[
                gridColumnSize(sm, md, lg, xl, gap),
                gridColumn(direction, align),
                css,
            ]}
            {...rest}
        >
            {children}
        </div>
    );
};
