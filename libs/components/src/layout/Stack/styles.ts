import { css } from '@emotion/react';

export const stack = (gap: number) => css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: calc(${gap} * 0.25rem);
`;
