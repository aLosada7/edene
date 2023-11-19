import {
    defaultTheme,
    FontWeight,
    getColor,
    text,
    TextAlign,
    ThemeColor,
} from '@edene/foundations';
import { css } from '@emotion/react';

import { TextType } from './types';

export const textCss = (
    type: TextType,
    textAlign: TextAlign,
    weight?: FontWeight
) => css`
    ${type === 'xxsmall' && text.xxsmall({ fontWeight: 'regular' })}
    ${type === 'xsmall' && text.xsmall({ fontWeight: 'regular' })}
    ${type === 'small' && text.small({ fontWeight: 'regular' })}
    ${type === 'regular' && text.regular({ fontWeight: 'regular' })}

    ${weight && `font-weight: ${weight};`}

    text-align: ${textAlign};
`;

export const textTheme = ({ theme = defaultTheme, color }: ThemeColor) => css`
    color: ${getColor({ theme, color, themeValue: theme?.text?.color })};
    fill: ${getColor({ theme, color, themeValue: theme?.text?.color })};
`;
