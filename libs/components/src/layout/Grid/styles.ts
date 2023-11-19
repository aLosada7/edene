import { from } from '@edene/foundations';
import { css } from '@emotion/react';

import { Align,ColSize, IColumnDirection } from './Col';
import { RowAlign, RowDirection } from './Row';

export const gridContainer = css`
    max-width: 1224px;
    margin-left: auto;
    margin-right: auto;

    padding-left: 6vw;
    padding-right: 6vw;

    padding-top: 1rem;
    padding-bottom: 1rem;

    ${from.desktop} {
        padding-left: 3vw;
        padding-right: 3vw;
    }

    > *:not(:first-of-type) {
        margin-top: 1rem;
    }
`;

export const gridRow = ({
    align,
    direction,
    px: paddingHorizontal,
    py: paddingVertical,
    noGlutters,
    gap,
}: {
    direction: RowDirection;
    align?: RowAlign;
    px: number;
    py: number;
    noGlutters?: boolean;
    gap?: number;
}) => css`
    display: flex;
    flex-wrap: wrap;

    margin-right: -1rem;
    margin-left: -1rem;

    padding: calc(${paddingVertical} * 0.25rem)
        calc(${paddingHorizontal} * 0.25rem);

    ${direction === 'column' && `flex-direction: column;`}

    ${align &&
    `justify-content: ${
        align.split('-').length === 2
            ? align.split('-')[0]
            : align.split('-').slice(0, -1).join('-')
    };
        align-items: ${
            align.split('-').length === 2
                ? align.split('-')[1]
                : align.split('-').slice(-1)
        };`}

    ${noGlutters && `margin: 0`};

    ${gap && `gap: calc(${gap} * 0.25rem)}`};
`;

export const gridColumn = (direction: IColumnDirection, align: Align) => css`
    display: flex;
    padding: 1rem;

    ${direction === 'column' && `flex-direction: column;`}

    ${gridColumnsAlign(align)}
`;

const flexWidth = {
    0: '0%',
    2: '8.3%',
    3: '12.45%',
    4: '16.6%',
    6: '25%',
    8: '33.3%',
    12: '50%',
    16: '66.6%',
    18: '75%',
    20: '83.3%',
    21: '87.45',
    22: '91.6%',
    24: '100%',
};

export const gridColumnsAlign = (align: Align) => css`
    display: flex;

    ${align === 'center' &&
    `
        justify-content: center;
        align-items: center;`}

    ${align === 'vertical-center' &&
    `
        align-items: center;
    `}

    ${align === 'horizontal-center' &&
    `
        justify-content: center;
    `}

    ${from.phablet} {
        ${align === 'horizontal-end' &&
        `
        justify-content: end;
    `}
    }
`;

export const gridColumnSize = (
    sm: ColSize,
    md: ColSize | null,
    lg: ColSize | null,
    xl: ColSize | null,
    gap?: number
) => css`
    box-sizing: border-box;
    flex: 0 0 auto;

    flex-basis: ${flexWidth[sm]};
    min-width: ${flexWidth[sm]};

    ${from.phablet} {
        ${md &&
        `flex-basis: ${flexWidth[md]};
            min-width: ${flexWidth[md]};`}
    }

    ${from.desktop} {
        ${lg &&
        `flex-basis: ${flexWidth[lg]};
            min-width: ${flexWidth[lg]};`}
    }

    ${from.wide} {
        ${xl &&
        `flex-basis: ${flexWidth[xl]};
            min-width: ${flexWidth[xl]};`}
    }

    ${gap && `gap: calc(${gap} * 0.25rem)`}
`;
