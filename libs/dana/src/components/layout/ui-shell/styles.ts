import { css } from '@emotion/react';
import { defaultTheme } from 'libs/dana/src/foundations/theme/defaultTheme';
import { textSans } from 'libs/dana/src/foundations/typography/api';
import { background } from '../../../foundations';
import { focusHalo } from '../../../foundations/accesibility';
import { transitions } from '../../../foundations/animation';
import { from } from '../../../foundations/mq';

export const sidenav = ({ width, expanded, isChildOfHeader }: any) => css`
    z-index: 8000;
    max-width: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    width: 0;
    display: flex;
    height: 100%;
    flex-direction: column;
    flex: 1 1 150px; // stretching (ocupy all the space) flex-grow flex-shrink flex-basis
    background-color: transparent;

    ${width !== 0 &&
    (expanded || !isChildOfHeader) &&
    `position: fixed;
    width: calc(${width} * 0.25rem);
    max-width: calc(${width} * 0.25rem)`}

    ${width === 0 && `width: 100%;`}

    ${from.desktop && width !== 0} {
        width: 16rem;
        max-width: 16rem;
    }
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
    color: #525252;
    transition: color 110ms, background-color 110ms, outline 110ms;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;

    &:focus {
        ${focusHalo};
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

export const navItem = (
    { theme = defaultTheme },
    isActive: boolean,
    activeColor: string | null,
    hoverColor: string | null
) => css`
    overflow: hidden;
    width: auto;
    height: auto;

    background-color: ${theme.sideNav.background};

    ${isActive &&
    (activeColor
        ? `background-color: ${activeColor}`
        : `background-color: ${theme.sideNav.active}`)};

    ${isActive} {
        :hover {
            background-color: ${hoverColor ? hoverColor : theme.sideNav.hover};
        }
    }
`;

export const sideNavPrincipal = () => css`
    margin-bottom: 0.5rem;

    span {
        ${textSans.xxsmall({ fontWeight: 'bold' })};
        color: rgb(82, 82, 82);
        text-transform: uppercase;
    }
`;

export const navItemActive = (
    expanded: boolean,
    activeColor?: string | null,
    hideIcon?: boolean
) => css`
    button,
    a {
        position: relative;

        ${!expanded &&
        !activeColor &&
        `background-color: ${background.secondary};`}

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

export const navMenuSubLink = css`
    ${navLink}

    height: 2rem;
    min-height: 2rem;
    position: relative;
    padding-left: 2rem;

    &[aria-current='page'] {
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

const expandedBodyStyles = css`
    max-height: 93.75rem;
    transition: max-height ${transitions.medium};
    overflow: hidden;
    height: auto;
`;

export const expandedBody = css`
    ${expandedBodyStyles};
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

export const sidenavHeader = css`
    top: 3rem;
`;

export const navOverlay = css`
    position: fixed;
    top: 3rem;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(22, 22, 22, 0.5);
    opacity: 1;
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
