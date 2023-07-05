import { ThemeColor, getColor } from '@edene/foundations';
import { css } from '@emotion/react';

export const divider = (
    width: string,
    mt: number,
    mb: number,
    mh: number
) => css`
    width: ${width};
    height: 1px;

    margin: calc(${mt} * 0.25rem) calc(${mh} * 0.25rem) calc(${mb} * 0.25rem);
`;

export const dividerThemeColor = ({ theme, color }: ThemeColor) => css`
    background-color: ${getColor({ theme, color })};
`;
