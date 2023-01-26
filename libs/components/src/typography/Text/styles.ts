import { css } from '@emotion/react';

import { defaultTheme, text, FontWeight, TextAlign } from '@edene/foundations';

import { ITextFontSize } from './Text';

export const textCss = (
    mt: number,
    mb: number,
    ml: number,
    size: ITextFontSize,
    align: TextAlign,
    weight?: FontWeight
) => css`
    margin-top: calc(${mt} * 0.25rem);
    margin-bottom: calc(${mb} * 0.25rem);
    margin-left: calc(${ml} * 0.25rem);

    // from bbc
    ${size === 'xxsmall' && text.xxsmall({ fontWeight: 'regular' })}
    ${size === 'xsmall' && text.xsmall({ fontWeight: 'regular' })}
    ${size === 'small' && text.small({ fontWeight: 'regular' })}
    ${size === 'regular' && text.regular({ fontWeight: 'regular' })}

    ${weight && `font-weight: ${weight};`}

    text-align: ${align};
`;

export const textColor = (
    themeColor = defaultTheme.text.color,
    color?: string
) => css`
    color: ${color || themeColor};
    fill: ${color || themeColor};
`;

export const flexText = css`
    display: flex;
    align-items: center;
`;
