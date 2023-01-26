import { css } from '@emotion/react';

import { Theme } from '@edene/foundations';

import { AvatarShape, AvatarDotPosition } from './Avatar';

export const avatar = (
    shape: AvatarShape,
    size: number,
    { theme }: { theme: Theme }
) => css`
    position: relative;
    max-width: 12rem;
    min-width: ${size}px;
    width: ${size}px;
    height: ${size}px;
    cursor: pointer;
    font-size: 6rem;
    background-color: ${theme.black};
    color: ${theme.white};

    ${avatarShape(shape)}
`;

export const avatarImg = (shape: AvatarShape, outline?: boolean) => css`
    width: 100%;
    height: 100%;
    position: absolute;

    ${avatarShape(shape)}
    ${outline && `outline: thick double #32a1ce;`}
`;

const avatarShape = (shape: AvatarShape) => css`
    border-radius: ${shape === 'circle' ? '50%' : '14px'};
`;

export const avatarConnected = (
    dotPosition: AvatarDotPosition,
    shape: AvatarShape
) => css`
    display: block;
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    border: 2px solid #ffffff;
    background: green;

    ${dotPosition === 'top'} {
        ${shape === 'square'} {
            top: -0.25rem;
            right: -0.25rem;
        }

        ${shape === 'circle'} {
            top: 1rem;
            right: 1rem;
        }
    }

    ${dotPosition === 'bottom'} {
        ${shape === 'square'} {
            bottom: -0.25rem;
            right: -0.25rem;
        }

        ${shape === 'circle'} {
            bottom: 1rem;
            right: 1rem;
        }
    }
`;

export const avatarInitials = ({ theme }: { theme: Theme }) => css`
    background-color: ${theme.black};
    color: ${theme.white};
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;
