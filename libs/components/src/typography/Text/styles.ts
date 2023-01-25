import { css, SerializedStyles } from '@emotion/react';

import {
    defaultTheme,
    text,
    ThemeOptions,
    getColor,
    FontWeight,
    TextAlign,
} from '@edene/foundations';

import { TextSize } from './types';

const textSizeXXSmall = css`
    ${text.xxsmall({ fontWeight: 'regular' })}
`;
const textSizeXSmall = css`
    ${text.xsmall({ fontWeight: 'regular' })}
`;
const textSizeSmall = css`
    ${text.small({ fontWeight: 'regular' })}
`;
const textSizeRegular = css`
    ${text.regular({ fontWeight: 'regular' })}
`;

const sizes: { [key in TextSize]: SerializedStyles } = {
    xxsmall: textSizeXXSmall,
    xsmall: textSizeXSmall,
    small: textSizeSmall,
    regular: textSizeRegular,
};

export const textCss = (
    mt: number,
    mb: number,
    ml: number,
    size: TextSize,
    align: TextAlign,
    weight?: FontWeight
) => css`
    margin-top: calc(${mt} * 0.25rem);
    margin-bottom: calc(${mb} * 0.25rem);
    margin-left: calc(${ml} * 0.25rem);

    // from bbc
    ${sizes[size]}

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
