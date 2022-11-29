import { css } from '@emotion/react';

import {
    grays,
    defaultTheme,
    ThemeOptions,
    getColor,
    text,
} from '@edene/foundations';

import { TabsOrientation } from './useTabs';

export const tabs = (orientation: TabsOrientation) => css`
    display: ${orientation === 'horizontal' ? 'block' : 'flex'};
`;

export const tabList = (orientation: TabsOrientation) => css`
    display: flex;
    width: auto;
    max-width: 100%;
    flex-direction: row;
    padding: 0;
    margin: 0;
    list-style: none;
    outline: 0;
    ${orientation === 'horizontal'
        ? `border-bottom: 2px solid ${grays[5]};`
        : `border-right: 2px solid ${grays[5]};`}

    ${orientation === 'vertical' &&
    `flex-flow: column wrap;
    align-items: flex-start;`}
`;

export const tab = css`
    ${text.small({ fontWeight: 'regular' })};
    display: flex;
    position: relative;
    cursor: pointer;
`;

export const tabSelected = (
    orientation: 'horizontal' | 'vertical',
    { color, theme = defaultTheme }: ThemeOptions
) => css`
    color: ${getColor({ theme, color })};

    :hover {
        color: ${getColor({ theme, color })};
    }

    ::after {
        content: '';

        ${orientation === 'horizontal'
            ? `border-bottom: 2px solid ${getColor({
                  theme,
                  color,
              })};
              bottom: -2px;`
            : `border-right: 2px solid ${getColor({
                  theme,
                  color,
              })};
              right: -2px;
              height: 100%;`}

        width: 100%;
        position: absolute;
    }
`;

export const tabHidden = css`
    display: none;
`;

export const tabPanel = (orientation: TabsOrientation) => css`
    ${orientation === 'horizontal' ? `padding-top: 10px` : `padding-left: 10px`}
`;
