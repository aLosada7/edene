import { css } from '@emotion/react';
import { focusHalo } from '../../../foundations/accesibility';

export const radio = css`
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

export const radioInput = css`
    width: 1rem;
    margin-right: 0.4rem;
    height: fit-content;

    &:focus {
        outline: none;
    }
`;
