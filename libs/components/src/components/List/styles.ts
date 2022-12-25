import { css } from '@emotion/react';

import { grays } from '@edene/foundations';

import { ListStyleType } from './List';

export const list = (styleType: ListStyleType) => css`
    list-style-position: inside;
    list-style-type: ${styleType};
    margin: 0;
    padding-left: 0;
    width: 100%;
`;

export const listItem = (borderBottom: boolean) => css`
    padding: 0.5rem;
    ${borderBottom && `border-bottom: 1px solid ${grays[7]};`}

    div {
        display: flex;
        justify-content: space-between;
        margin-inline-start: 0.25rem;
    }
`;

export const listItemActions = css`
    align-items: center;
`;
