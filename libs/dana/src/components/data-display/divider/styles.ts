import { css } from '@emotion/react';

export const divider = (dividerWidth?: number) => css`
    height: 1px;
    margin: 0.5rem 1rem;
    background-color: #e0e0e0;

    ${dividerWidth && `width: calc(${dividerWidth} * 0.25rem)`}
`;
