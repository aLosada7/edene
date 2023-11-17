import { css } from '@emotion/react';

import {
    text,
    FontWeight,
    TextAlign,
    getColor,
    ThemeColor,
    defaultTheme,
} from '@edene/foundations';

import { TextSize } from './types';

export const textCss = (
    size: TextSize,
    textAlign: TextAlign,
    weight?: FontWeight
) => css`
    ${size === 'xxsmall' && text.xxsmall({ fontWeight: 'regular' })}
    ${size === 'xsmall' && text.xsmall({ fontWeight: 'regular' })}
    ${size === 'small' && text.small({ fontWeight: 'regular' })}
    ${size === 'regular' && text.regular({ fontWeight: 'regular' })}

    ${weight && `font-weight: ${weight};`}

    text-align: ${textAlign};
`;

export const textTheme = ({ theme = defaultTheme, color }: ThemeColor) => css`
    color: ${getColor({ theme, color, themeValue: theme?.text?.color })};
    fill: ${getColor({ theme, color, themeValue: theme?.text?.color })};
`;
