import { css } from '@emotion/react';
import {
    colorsPalette,
    defaultTheme,
    headline,
    textSans,
} from '@dana-foundations';
import { IFontSize, ITextAlign } from './Text';

export const text = (
    mt: number,
    weight: number,
    size: IFontSize,
    text: ITextAlign
) => css`
    margin-top: calc(${mt} * 0.25rem);

    // from bbc
    ${size === 'xxsm' && textSans.xxsmall({ fontWeight: 'regular' })}
    ${size === 'sm' && textSans.small({ fontWeight: 'regular' })}
    ${size === 'md' && textSans.medium({ fontWeight: 'regular' })}
    ${size === 'lg' && textSans.large({ fontWeight: 'regular' })}

    ${size === 'h3' && headline.small({ fontWeight: 'bold' })}
    ${size === 'h4' && headline.xxsmall({ fontWeight: 'bold' })}
    ${size === 'h5' && headline.xxxsmall({ fontWeight: 'bold' })}

    ${weight !== 0 && `weight: ${weight}`};
    text-align: ${text};
`;

export const textColor = ({ theme = defaultTheme }, color: string) => css`
    ${color === 'primary' && `color: ${theme.primary.color}`}

    ${color === 'default' && `color: ${theme.default.color}`}

    ${color !== 'primary' &&
    color !== 'default' &&
    `color: ${(colorsPalette as any)[color].primary.color}`}
`;

export const flexText = css`
    display: flex;
    align-items: flex-start;
`;
