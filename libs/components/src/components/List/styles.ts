import { grays } from '@edene/foundations';
import { css } from '@emotion/react';

import { ListStyleType } from './types';

export const list = (styleType: ListStyleType, withSeparation: boolean) => css`
    list-style-position: inside;
    list-style-type: ${styleType};
    margin: 0;
    padding-left: 0;
    width: 100%;

    ${withSeparation &&
    `> *:not(:last-child) { border-bottom: 1px solid ${grays[7]};}`}
`;

export const listItem = css`
    padding: 0.5rem 1rem;
`;

export const listItemActions = css`
    align-items: center;
`;
