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
    background-color: #e0e0e0;
`;
