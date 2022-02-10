import { colorsPalette, from } from '@dana';
import { css } from '@emotion/react';
import { defaultTheme } from '../../foundations/theme/defaultTheme';
import { IFontSize, IFontWeight, ITextAlign } from './Text';

export const text = (
    mt: number,
    weight: IFontWeight,
    size: IFontSize,
    text: ITextAlign
) => css`
    margin-top: calc(${mt} * 0.25rem);

    ${weight === 'medium' && 'font-weight: 500;'}

    ${size === 'sm' && 'font-size: 0.5rem;'}
    ${size === 'md' && 'font-size: 0.75rem;'}
    ${size === 'lg' && 'font-size: 1rem;'}

    // from bbc
    ${size === 'h3' && 'font-size: 24px;'}

    ${from.tablet} {
        ${size === 'h3' && 'font-size: 28px;'}
    }

    text-align: ${text};
`;

export const textColor = ({ theme = defaultTheme }, color: string) => css`
    ${color === 'primary' && `color: ${theme.primary.background}`}

    ${color === 'default' && `color: ${theme.default.background}`}

    ${color !== 'primary' &&
    color !== 'default' &&
    `color: ${(colorsPalette as any)[color].primary.background}`}
`;

export const flexText = css`
    display: flex;
    align-items: flex-start;
`;
