import { css } from '@emotion/react';

export const divider = (
    mt: number,
    mb: number,
    mh: number,
    dividerWidth?: number
) => css`
    height: 1px;
    margin: calc(${mt} * 0.25rem) calc(${mh} * 0.25rem) calc(${mb} * 0.25rem);
    background-color: #e0e0e0;

    ${dividerWidth && `width: calc(${dividerWidth} * 0.25rem)`}
`;
