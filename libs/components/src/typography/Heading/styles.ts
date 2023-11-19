import {
    defaultTheme,
    FontWeight,
    getColor,
    heading,
    TextAlign,
    ThemeColor,
} from '@edene/foundations';
import { css } from '@emotion/react';

import { HeadingType } from './types';

export const headingCss = (
    size: HeadingType,
    fontWeight: FontWeight,
    textAlign: TextAlign
) => css`
    ${size === 'h1' && heading.h1({ fontWeight })}
    ${size === 'h2' && heading.h2({ fontWeight })}
    ${size === 'h3' && heading.h3({ fontWeight })}
    ${size === 'h4' && heading.h4({ fontWeight })}
    ${size === 'h5' && heading.h5({ fontWeight })}
    ${size === 'h6' && heading.h6({ fontWeight })}

    text-align: ${textAlign};
`;

export const headingTheme = ({
    theme = defaultTheme,
    color,
}: ThemeColor) => css`
    color: ${getColor({ theme, color, themeValue: theme?.text?.color })};
    fill: ${getColor({ theme, color, themeValue: theme?.text?.color })};

    span {
        color: ${getColor({ theme, color, themeValue: theme?.text?.color })};
    }
`;
