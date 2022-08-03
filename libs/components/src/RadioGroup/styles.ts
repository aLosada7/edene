import { css } from '@emotion/react';

import { focusHalo } from '@edene/foundations';

export const radioGroup = css`
    margin: 0;
`;

export const radio = css`
    width: auto;
    cursor: pointer;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: baseline;
    vertical-align: top;
    position: relative;

    &:focus {
        ${focusHalo};
    }
`;

export const radioInput = css`
    width: 1rem;
    margin-right: 0.4rem;
    height: fit-content;

    &:focus {
        outline: none;
    }
`;
