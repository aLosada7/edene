import { css } from '@emotion/react';
import { border } from '../../../foundations';
import { focusHalo } from '../../../foundations/accesibility';
import { height } from '../../../foundations/size';
import { textSans } from '../../../foundations/typography/api';

export const input = css`
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    height: ${height.inputMedium}px;
    ${textSans.medium({ lineHeight: 'regular' })};
    padding: 0 1rem;
    outline: transparent solid 2px;
    border: 1px solid rgb(226, 232, 240);
    border-radius: 6px;

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
    height: 100%;
    margin-inline-end: 0.5rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const leftIconInInput = css`
    padding: 0 3rem;
`;
