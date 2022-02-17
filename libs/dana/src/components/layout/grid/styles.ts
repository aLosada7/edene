import { css } from '@emotion/react';
import { from } from '../../../foundations/mq';
import { IColumnDirection, ColSize } from './Col';
import { IRowAlign, IRowDirection } from './Row';

export const gridContainer = (
    marginTop: number,
    verticalPadding: number
) => css`
    max-width: 99rem;
    padding: 0 calc(${verticalPadding} * 0.25rem);
    margin-top: calc(${marginTop} * 0.25rem);

    > *:not(:first-of-type) {
        margin-top: 1rem;
    }
`;

export const gridRow = (
    align: IRowAlign,
    direction: IRowDirection,
    paddingHorizontal: number,
    paddingVertical: number
) => css`
    display: flex;
    flex-wrap: wrap;

    margin-right: -1rem;
    margin-left: -1rem;

    padding: calc(${paddingVertical} * 0.25rem)
        calc(${paddingHorizontal} * 0.25rem);

    ${direction === 'column' && `flex-direction: column;`}

    ${align === 'end-center' && `justify-content: end; align-items: center;`}

    ${align === 'space-between-center' &&
    `justify-content: space-between; align-items: center;`}
`;

export const gridColumn = (
    direction: IColumnDirection,
    align: string,
    verticalStack: number,
    horizontalStack: number
) => css`
    // For debugging purposes
    /* border: 1px solid red; */
    padding: 0 1rem;

    ${(direction === 'column' || verticalStack !== 0) &&
    `flex-direction: column;`}

    > *:not(:first-of-type) {
        margin-top: calc(${verticalStack} * 0.25rem);
        margin-left: calc(${horizontalStack} * 0.25rem);
    }

    ${gridColumnsAlign(align)}
`;

const flexWidth = {
    0: '0%',
    4: '16.6%',
    6: '25%',
    8: '33.3%',
    12: '50%',
    24: '100%',
    16: '66.6%',
};

export const gridColumnsAlign = (align: string) => css`
    display: flex;

    ${align === 'center'} {
        justify-content: center;
        align-items: center;
    }

    ${align === 'vertical-center'} {
        align-items: center;
    }

    ${align === 'horizontal-center'} {
        justify-content: center;
    }
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
    }
`;
