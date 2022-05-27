import { css } from '@emotion/react';
import { focusHalo } from '../../../foundations/accesibility';

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

export const checkboxInput = css`
    width: 1rem;
    position: absolute;
    margin-top: 0.3rem;
    margin-left: -24px;
    height: auto;
    position: absolute;
    top: 0;

    &:focus {
        outline: none;
    }
`;
