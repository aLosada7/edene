import { css } from '@emotion/react';

import { from } from '../../../foundations/mq';
import { IColumnDirection, ColSize, Align } from './Col';
import { DanaScale } from './Container';
import { IRowAlign, IRowDirection } from './Row';

export const gridContainer = (
    marginTop: DanaScale,
    verticalPadding: DanaScale,
    horizontalPadding: DanaScale
) => css`
    max-width: 1224px;
    margin-left: auto;
    margin-right: auto;

    padding-left: 6vw;
    padding-right: 6vw;

    ${verticalPadding !== 0 &&
    `padding-top: calc(${verticalPadding} * 0.25rem); padding-bottom: calc(${verticalPadding} * 0.25rem);`}

    ${from.desktop} {
        padding-left: 3vw;
        padding-right: 3vw;

        ${horizontalPadding !== 0 &&
        `padding-right: calc(${horizontalPadding} * 0.25rem); padding-left: calc(${horizontalPadding} * 0.25rem);`}
        margin-top: calc(${marginTop} * 0.25rem);
    }

    > *:not(:first-of-type) {
        margin-top: 1rem;
    }
`;

export const gridRow = (
    align: IRowAlign,
    direction: IRowDirection,
    paddingHorizontal: number,
    paddingVertical: number,
    noGlutters: boolean
) => css`
    display: flex;
    flex-wrap: wrap;

    margin-right: -1rem;
    margin-left: -1rem;

    padding: calc(${paddingVertical} * 0.25rem)
        calc(${paddingHorizontal} * 0.25rem);

    ${direction === 'column' && `flex-direction: column;`}

    ${align === 'start-center' &&
    `justify-content: start; align-items: center;`}

    ${align === 'end-center' && `justify-content: end; align-items: center;`}

    ${align === 'space-between-center' &&
    `justify-content: space-between; align-items: center;`}

    ${noGlutters && `margin: 0`}
`;

export const gridColumn = (
    direction: IColumnDirection,
    align: Align,
    verticalStack: number,
    horizontalStack: number
) => css`
    // For debugging purposes
    /* border: 1px solid red; */
    padding: 0 1rem;

    ${(direction === 'column' || verticalStack !== 0) &&
    `flex-direction: column;`}

    ${verticalStack !== 0 &&
    `> *:not(:first-of-type) {
        margin-top: calc(${verticalStack} * 0.25rem);`}

${horizontalStack !== 0 &&
    `> * { margin-right: calc(${horizontalStack} * 0.25rem);}`}


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

${align === 'horizontal-end' &&
    `
        justify-content: end;
    `}
`;

export const gridColumnSize = (
    sm: ColSize,
    md: ColSize | null,
    lg: ColSize | null,
    xl: ColSize | null
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
`;
