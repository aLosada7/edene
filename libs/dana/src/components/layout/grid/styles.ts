import { css } from '@emotion/react';
import { from } from '../../../foundations/mq';
import { IColumnDirection, ColSize } from './Col';
import { IRowAlign, IRowDirection } from './Row';

export const gridContainer = (marginTop: number, noPadding: boolean) => css`
    margin-right: auto;
    margin-left: auto;
    max-width: 99rem;
    padding-right: 1rem;
    padding-left: 1rem;

    margin-top: calc(${marginTop} * 0.25rem);

    > *:not(:first-of-type) {
        margin-top: 1rem;
    }

    ${from.tablet} {
        padding-right: 2rem;
        padding-left: 2rem;
        ${noPadding === true && `padding: 0;`}
    }

    ${noPadding === true && `padding: 0;`}
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
    padding: 1rem 0.75rem;

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
    8: '32.6%',
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
    lg: ColSize,
    xl: ColSize | null
) => css`
    box-sizing: border-box;
    flex: 0 0 auto;

    flex-basis: ${flexWidth[sm]};
    min-width: ${flexWidth[sm]};

    ${from.phablet} {
        ${md} {
            flex-basis: ${flexWidth[md || 0]};
            min-width: ${flexWidth[md || 0]};
        }

        ${from.desktop} {
            flex-basis: ${flexWidth[lg]};
            min-width: ${flexWidth[lg]};
        }

        ${from.wide} {
            ${xl} {
                flex-basis: ${flexWidth[xl || 0]};
                min-width: ${flexWidth[xl || 0]};
            }
        }
    }
`;
