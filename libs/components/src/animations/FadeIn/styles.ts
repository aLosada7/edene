import { css } from '@emotion/react';

export const fadeIn = (delay: string) => css`
    opacity: 0;

    animation-timing-function: ease;

    animation-delay: ${delay};
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-name: fadeIn;
    animation-fill-mode: both;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
