import { css } from '@emotion/react';

export const img = (size: string) => css`
    border: 0;
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    // entry media
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;

    ${size === 'c' && `height: 304px !important;`}
    ${size === 'd' && `height: 194px !important;`}
    ${size === 'e' && `height: 124px !important;`}
`;
