import { css } from '@emotion/react';

export const group = (gap: number) => css`
    display: flex;
    flex-wrap: wrap;
    gap: calc(${gap} * 0.25rem);
`;
