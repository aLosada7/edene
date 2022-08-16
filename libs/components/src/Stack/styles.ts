import { css } from '@emotion/react';

import { StackDirection } from './Stack';

export const stack = (direction: StackDirection) => css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${direction};

    ${direction === 'row' && `gap: 0.5rem;`}
`;
