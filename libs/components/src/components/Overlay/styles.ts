import { css } from '@emotion/react';

import { transitions } from '@edene/foundations';

export const overlay = css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background-color: rgba(22, 22, 22, 0.5);
    opacity: 1;
    transition: opacity ${transitions.medium},
        background-color ${transitions.medium};
`;
