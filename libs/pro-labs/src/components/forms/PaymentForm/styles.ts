import { focusHalo } from '@edene/foundations';
import { css } from '@emotion/react';

export const optionWrapper = css`
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    margin: 12px 0;
    padding: 12px;

    &:focus-within {
        ${focusHalo};
    }
`;

export const onlyRadio = css`
    margin-bottom: 0;
`;
