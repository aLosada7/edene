import { css } from '@emotion/react';
import { focusHalo } from '@dana-foundations';

export const optionWrapper = css`
    border: 1px solid rgba(0, 0, 0, 0.12);

    &:focus {
        ${focusHalo};
    }
`;
