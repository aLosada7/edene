import { css } from '@emotion/react';

import { grays } from '@edene/foundations';

export const carousel = css`
    position: relative;
    width: 100%;
`;

export const carouselImage = css`
    max-width: 100%;
`;

export const dotList = css`
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const dot = (isSelected: boolean) => css`
    margin: 2px;
    cursor: pointer;
    height: ${isSelected ? '10' : '8'}px;
    width: ${isSelected ? '10' : '8'}px;
    background-color: ${grays[8]};
    border-radius: 50%;
    display: inline-block;
`;
