import { focusHalo } from '@edene/foundations';
import { css } from '@emotion/react';

export const checkbox = css`
    position: relative;
    display: block;
`;

export const checkboxLabel = css`
    margin-left: 24px;
    display: flex;
    flex-direction: column-reverse;
    align-items: space-around;
    position: relative;

    &:focus {
        ${focusHalo};
    }
`;

export const checkboxInput = (label: boolean) => css`
    height: auto;
    top: 0;

    ${label &&
    `
        width: 1rem;
        margin-left: -24px;
        margin-top: 0.3rem;
        position: absolute;`}

    &:focus {
        outline: none;
    }
`;
