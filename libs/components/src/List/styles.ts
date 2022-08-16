import { css } from '@emotion/react';

import { grays } from '@edene/foundations';

export const list = css`
    list-style-type: none;
    width: 100%;
`;

export const listItem = (borderBottom: boolean) => css`
    padding: 12px 24px;
    display: flex;
    justify-content: space-between;
    ${borderBottom && `border-bottom: 1px solid ${grays[7]};`}
`;
