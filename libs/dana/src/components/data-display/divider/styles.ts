import { css } from '@emotion/react';

export const divider = (dividerWidth?: number) => css`
    margin: 1rem 0;
    border-bottom-width: 1px;
    border-color: rgb(226, 232, 240);
    width: 100%;

    ${dividerWidth && `width: calc(${dividerWidth} * 0.25rem)`}
`;
