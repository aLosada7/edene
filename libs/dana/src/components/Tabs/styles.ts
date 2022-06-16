import { css } from '@emotion/react';

import { ColorOptions, getBackgroundColor, textSans } from '@dana-foundations';

import { grays } from '../../foundations/palette';
import { defaultTheme } from '@dana-theme';
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
    ${textSans.small({ fontWeight: 'regular' })};
    padding: 0 1rem;
    display: flex;
    position: relative;
    cursor: pointer;
`;

export const tabSelected = (
    orientation: 'horizontal' | 'vertical',
    { color, theme = defaultTheme }: ColorOptions
) => css`
    color: ${getBackgroundColor({ theme, color })};

    :hover {
        color: ${getBackgroundColor({ theme, color })};
    }

    ::after {
        content: '';

        ${orientation === 'horizontal'
            ? `border-bottom: 2px solid ${getBackgroundColor({
                  theme,
                  color,
              })};
              bottom: -2px;`
            : `border-right: 2px solid ${getBackgroundColor({
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
