import { css } from '@emotion/react';
import { border } from '../../../foundations';
import { focusHalo } from '../../../foundations/accesibility';
import { height } from '../../../foundations/size';
import { textSans } from '../../../foundations/typography/api';

export const inputWrapper = css`
    position: absolute;
`;

export const input = css`
    display: block;
    width: 100%;
    height: ${height.inputMedium}px;
    padding: 0;
    font-size: 1rem;
    line-height: 1.5;
    background-color: #fff;
    ${textSans.medium({ lineHeight: 'regular' })};
    padding: 0 1rem;
    border: 1px solid rgb(226, 232, 240);
    border-radius: 6px;
    text-indent: 10px;
    outline: transparent solid 2px;

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

export const leftIconInput = css`
    position: absolute;
    height: ${height.inputMedium}px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline-end: 0.5rem;
    width: 3rem;
    color: rgb(226, 232, 240);
`;

export const leftIconInInput = css`
    text-indent: 2.5rem;
`;
