import { css } from '@emotion/react';

import { ImageObjectFit, ImageSize } from './types';

const sizes: { [key in ImageSize]: number } = {
    c: 304,
    d: 194,
    e: 124,
};

export const image = (objectFit: ImageObjectFit, size?: ImageSize) => css`
    border: 0;
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    // entry media
    width: 100%;
    object-fit: ${objectFit};

    ${size && `height: ${sizes[size]}px !important;`}
`;
