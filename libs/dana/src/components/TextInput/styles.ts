import { css } from '@emotion/react';
import { text } from '../../foundations/palette';

export const inlineMessage = css`
    svg {
        transform: translate(-4px, -3px);
    }
`;

export const widthFluid = css`
    width: 100%;
`;

export const width30 = css`
    width: 40ex;
    max-width: 100%; /* prevent overflow on narrow viewports */
`;

export const width10 = css`
    width: 18ex;
`;

export const width4 = css`
    width: 9ex;
`;

export const successMessage = css`
    color: ${text.success};
`;

export const errorMessage = css`
    color: ${text.error};
`;
