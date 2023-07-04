import { css } from '@emotion/react';
import { border, focusHalo, grays, height, text } from '@edene/foundations';

export const inputWrapper = css`
    position: absolute;
`;

const inputPlaceHolderColor = css`
    ::placeholder {
        color: #adb5bd;
        opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
        /* Internet Explorer 10-11 & Microsoft Edge */
        color: #adb5bd;
    }
`;

export const input = css`
    display: block;
    width: 100%;
    height: ${height.inputMedium}px;
    padding: 0;
    font-size: 1rem;
    line-height: 1.5;
    background-color: transparent;
    ${text.regular({ lineHeight: 'regular' })};
    padding: 1px 0.75rem;
    box-sizing: border-box;
    border: 1px solid ${grays[5]};
    border-radius: 6px;
    outline: transparent solid 2px;
    ${inputPlaceHolderColor};

    &:focus {
        ${focusHalo};
    }
`;

export const successInput = css`
    border: 2px solid ${border.success};
`;

export const errorInput = css`
    border: 2px solid ${border.error};
`;

export const iconLeftInput = css`
    position: absolute;
    width: ${height.inputMedium}px;
    height: ${height.inputMedium}px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline-end: 0.5rem;
    color: rgb(226, 232, 240);
    padding: 2px 0;
    margin: 0;
`;

export const iconLeftInInput = css`
    padding-left: ${height.inputMedium}px; // start writing (same as input)
`;
