import { css } from '@emotion/react';

import { ObjectFit } from './Image';

export const image = (objectFit: ObjectFit, size?: string) => css`
    border: 0;
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    // entry media
    width: 100%;
    object-fit: ${objectFit};

    ${size === 'c' && `height: 304px !important;`}
    ${size === 'd' && `height: 194px !important;`}
    ${size === 'e' && `height: 124px !important;`}
`;
