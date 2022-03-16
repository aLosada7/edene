import { css } from '@emotion/react';
import { grays } from '../../foundations/palette';

export const tabs = css`
    display: flex;
    width: auto;
    max-width: 100%;
    flex-direction: row;
    padding: 0;
    margin: 0;
    list-style: none;
    outline: 0;
    border-bottom: 2px solid ${grays[5]};
`;

export const tab = css`
    display: flex;
    position: relative;
    padding: 0;
    cursor: pointer;
`;

export const tabSelected = css`
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.28572;
    letter-spacing: 0.16px;
    color: #161616;

    ::after {
        content: '';
        border-bottom: 2px solid #0f62fe;
        width: 100%;
        position: absolute;
        bottom: -2px;
    }
`;
