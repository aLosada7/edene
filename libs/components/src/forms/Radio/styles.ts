import { focusHalo } from '@edene/foundations';
import { css } from '@emotion/react';

export const radioGroup = (inline?: boolean) => css`
    margin: 0;

    ${inline &&
    `*:not(:first-of-type) {
        margin-inline-start: 0.75rem;
    }`}
`;

export const radio = css`
    width: auto;
    cursor: pointer;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: baseline;
    vertical-align: top;
    position: relative;
    align-items: center;

    &:focus {
        ${focusHalo};
    }

    span {
        margin-inline-start: 0.25rem;
    }
`;

export const radioInput = css`
    width: 1rem;
    margin-right: 0.4rem;
    height: auto;
    margin: 0;

    &:focus {
        outline: none;
    }
`;
