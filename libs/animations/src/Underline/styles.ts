import { css } from '@emotion/react';

export const underline = (delay: string, start: string) => css`
    position: relative;

    ::before {
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #000;
        transform: scaleX(0);
        ${start !== ' center' && `transform-origin: top ${start};`}
        transition: transform ${delay} ease;
    }

    :hover::before {
        transform: scaleX(1);
    }
`;
