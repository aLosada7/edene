import { css } from '@emotion/react';
import { colorsPalette } from '../../foundations';
import { IBadgeColor } from './Badge';

export const badge = (color: IBadgeColor, variant: string) => css`
    font-size: 10px;
    font-weight: 600;
    line-height: 13px;
    padding: 2px 6px;
    background: #1abb9c;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    width: fit-content;

    ${variant === 'success' &&
    `
    background-color: rgb(220, 252, 231);
    color: rgb(22, 101, 52);`}

    background-color: ${colorsPalette[color].background};
    border: 1px solid ${colorsPalette[color].background};
    color: ${colorsPalette[color].color};
`;
