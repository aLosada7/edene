import { Theme } from '@dana-theme';
import { css } from '@emotion/react';
import { defaultTheme } from 'libs/dana/src/foundations/theme/defaultTheme';
import { textSans } from 'libs/dana/src/foundations/typography/api';
import { background, grays } from '../../../foundations';
import { focusHalo } from '../../../foundations/accesibility';
import { transitions } from '../../../foundations/animation';
import { from } from '../../../foundations/mq';

export const aside = (
    expanded: boolean,
    width: number,
    headerHeight?: number
) => css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: ${width}px;
    z-index: 100;
    background-color: #fff;

    ${!headerHeight && expanded && `z-index: 50;`}

    ${expanded && from.desktop} {
        display: block;
    }
`;

export const sidenav = ({ width, expanded }: any) => css`
    z-index: 8000;
    max-width: 100%;
    width: ${width}px;
    top: 0;
    bottom: 0;
    left: 0;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    background-color: transparent;

    ${expanded && `position: absolute;`}
`;

export const sideNavDivider = css`
    height: 1px;
    margin: 0.5rem 1rem;
    background-color: #e0e0e0;
`;

export const sideNavWithIcon = css`
    display: flex;
    flex: 0 0 1rem;
    align-items: center;
    justify-content: center;

    margin-right: 1.5rem;
`;

export const navItems = css`
    overflow: hidden;
    list-style-type: none;
    flex: 1 1 0%;
    padding: 0;
    margin: 0;
    overflow-y: auto;
`;

export const navMenuLink = css`
    width: 100%;
    padding: 0;
    border: 0;
    appearance: none;
    background: none;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.28572;
    letter-spacing: 0.16px;
    outline: 2 px solid transparent;
    outline-offset: -2px;
    display: flex;
    min-height: 2rem;
    align-items: center;
    padding: 0 1rem;
    color: hsl(212, 20%, 13%);
    transition: color 110ms, background-color 110ms, outline 110ms;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;

    &:focus {
        ${focusHalo};
    }

    svg {
        margin-right: 0.5rem;
    }
`;

const chevronIcon = css`
    svg {
        margin-left: 0.25rem;
        transition: ${transitions.medium};
    }
`;

export const navSubmenuIcon = css`
    display: flex;
    flex: 1;
    justify-content: flex-end;
`;

export const chevronIconDown = css`
    ${chevronIcon};
    svg {
        transform: rotate(90deg);
        transition: transform ${transitions.medium};
    }
`;

export const chevronIconUp = css`
    ${chevronIcon};
    svg {
        transform: rotate(270deg);
        transition: transform ${transitions.medium};
    }
`;

export const navItem = ({ theme = defaultTheme }) => css`
    overflow: hidden;
    width: auto;
    height: auto;

    background-color: ${theme.sideNav.background};
`;

export const sideNavPrincipal = (theme: Theme) => css`
    padding-left: 1rem;
    margin-top: 1.5rem;

    span {
        ${textSans.xxsmall({ fontWeight: 'bold' })};
        color: ${theme.color};
        text-transform: uppercase;
    }
`;

export const navItemActive = (expanded: boolean, hideIcon?: boolean) => css`
    button,
    a {
        position: relative;

        ${!expanded &&
        !hideIcon &&
        `
        :before {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 4px;
            background-color: #0f62fe;
            content: '';
        }`}
    }

    button[aria-expanded='false'] {
        background-color: ${background.secondary};
    }
`;

export const navLink = css`
    ${navMenuLink}

    position: relative;
    width: inherit;
    justify-content: space-between;

    text-decoration: none;
    font-family: Arial;
    font-stretch: 100%;
    word-spacing: 0px;
    -webkit-font-smoothing: antialiased;

    &:focus {
        ${focusHalo};
    }
`;

export const navMenuLinkActive = css`
    &[aria-current='page'],
    &.active {
        background-color: ${background.secondary};

        :before {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 4px;
            background-color: #0f62fe;
            content: '';
        }

        span {
            font-weight: 600;
        }
    }
`;

export const navMenuSubLink = css`
    ${navLink}

    height: 2rem;
    min-height: 2rem;

    ${navMenuLinkActive}
`;

export const navMenuSubLinkText = css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #525252;
    letter-spacing: 0.1px;
    line-height: 1.25rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-weight: 400;
`;

export const expandedBody = css`
    max-height: 93.75rem;
    transition: max-height ${transitions.medium};
    overflow: hidden;
    height: auto;
    padding: 0;
`;

export const collapsedBodyStyles = css`
    max-height: 0;
    /*
	TODO:
	This transition is being ignored as the hidden
	attribute is applied immediately

	transition: max-height ${transitions.medium};
	*/
    overflow: hidden;
`;
export const collapsedBody = css`
    ${collapsedBodyStyles};
`;

export const sidenavHeader = (expanded: boolean, headerHeight: number) => css`
    top: ${headerHeight}px;

    ${!expanded && `display: none;`}
    ${expanded && `height: 100vh;`}

    ${from.desktop} {
        position: absolute;
        display: block;
    }
`;

export const navOverlay = css`
    position: fixed;
    top: 3rem;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(22, 22, 22, 0.5);
    opacity: 1;
    z-index: 100;
    transition: opacity ${transitions.medium},
        background-color ${transitions.medium};

    ${from.desktop} {
        width: 0;
        height: 0;
        opacity: 0;
    }
`;

export const sideNavBadge = css`
    min-width: 25px;
`;

export const navigationLevel = (level: number) => css`
    padding-left: calc(${level} * 0.5rem);
`;
