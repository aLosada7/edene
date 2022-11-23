import { css } from '@emotion/react';

import {
    defaultTheme,
    text,
    ThemeOptions,
    getColor,
    FontWeight,
    TextAlign,
} from '@edene/foundations';

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
    ${size === 'xxsm' && text.xxsmall({ fontWeight: 'regular' })}
    ${size === 'xsm' && text.xsmall({ fontWeight: 'regular' })}
    ${size === 'sm' && text.small({ fontWeight: 'regular' })}
    ${size === 'md' && text.regular({ fontWeight: 'regular' })}

    ${weight && `font-weight: ${weight};`}

    text-align: ${align};
`;

export const textColorCss = ({
    color,
    theme = defaultTheme,
}: ThemeOptions) => css`
    color: ${getColor({ theme, color })};
    fill: ${getColor({ theme, color })};
`;

export const flexText = css`
    display: flex;
    align-items: center;
`;
