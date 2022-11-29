import {
    Theme,
    defaultTheme,
    background,
    focusHalo,
    transitions,
    text,
    from,
} from '@edene/foundations';
import { css } from '@emotion/react';

export const aside = (
    fixed: boolean,
    open: boolean,
    width: number,
    mobileWidth?: number | 'full',
    headerHeight?: number
) => css`
    ${(fixed || headerHeight) &&
    `position: fixed;
    top: 0;
    bottom: 0;
    left: 0;`}

    ${asideWidth(fixed, open, width, mobileWidth, headerHeight)}
    transition: transform ${transitions.short};

    background-color: #fff;
    z-index: 100;

    ${!fixed && headerHeight && `top: ${headerHeight}px;`}
`;

const asideWidth = (
    fixed: boolean,
    open: boolean,
    width: number,
    mobileWidth?: number | 'full',
    headerHeight?: number
) => css`
    ${!mobileWidth && `width: ${width}px;`}

    ${mobileWidth &&
    typeof mobileWidth === 'number' &&
    `
    width: ${mobileWidth}px;`};

    ${mobileWidth &&
    mobileWidth === 'full' &&
    `
    width: 100%;
    ${
        headerHeight &&
        `
        transform: ${
            open
                ? 'translateX(0);'
                : `translateX(-100%);
        `
        }
    `
    }
    `}

    ${from.desktop} {
        width: ${width}px;
    }

    ${headerHeight &&
    `
            transform: ${open ? 'translateX(0)' : `translateX(-${width}px)`};`}
`;

export const sidenav = ({ expanded }: any) => css`
    max-width: 100%;
    width: 100%;

    top: 0;
    bottom: 0;
    left: 0;
    max-width: 100%;

    display: flex;
    flex-direction: column;

    background-color: transparent;
    z-index: 8000;
    overflow-y: scroll;

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

    span {
        margin-inline-end: 1rem;
    }
`;

export const sideNavIcon = css`
    margin-inline-end: 1rem;
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
    span {
        transform: rotate(90deg);
        transition: transform ${transitions.medium};
    }
`;

export const chevronIconUp = css`
    ${chevronIcon};
    span {
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

export const sideNavPrincipal = ({ theme = defaultTheme }) => css`
    padding-left: 1rem;
    margin-top: 1.5rem;

    span {
        ${text.xxsmall({ fontWeight: 'bold' })};
        color: ${theme.color};
        text-transform: uppercase;
    }
`;

export const navItemActive = (
    theme: Theme,
    expanded: boolean,
    hideIcon?: boolean
) => css`
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

export const navMenuLinkActive = ({ theme = defaultTheme }) => css`
    background-color: ${background.secondary};

    :before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 4px;
        background-color: ${theme.color};
        content: '';
    }

    span {
        font-weight: 600;
    }
`;

export const navMenuSubLink = css`
    ${navLink}

    height: 2rem;
    min-height: 2rem;
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
    margin-inline-start: 1rem;
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

export const sidenavHeader = (open: boolean) => css`
    ${!open && `display: none;`}
    ${open && `height: 100%;`}

    ${from.desktop} {
        position: absolute;
        display: block;
    }
`;

export const navOverlay = (overlay: boolean, headerHeight?: number) => css`
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

    // display only with certain conditions
    ${from.desktop || !overlay} {
        ${!headerHeight && `display: none;`}
    }
`;

export const navigationLevel = (level: number) => css`
    padding-left: calc(${level} * 0.5rem);
`;
