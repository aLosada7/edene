import { css } from '@emotion/react';
import { focusHalo } from '../../../foundations/accesibility';

export const checkbox = css`
    cursor: pointer;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    vertical-align: top;
    position: relative;

    &:focus {
        ${focusHalo};
    }
`;

export const checkboxInput = css`
    width: 1rem;
    margin-right: 0.4rem;

    &:focus {
        outline: none;
    }
`;
