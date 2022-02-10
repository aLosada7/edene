import { css } from '@emotion/react';
import { background } from '../../../foundations';
import { focusHalo } from '../../../foundations/accesibility';
import { transitions } from '../../../foundations/animation';
import { from } from '../../../foundations/mq';

export const sidenav = ({ expanded, isChildOfHeader }: any) => css`
    position: fixed;
    z-index: 8000;
    top: 0;
    bottom: 0;
    left: 0;
    width: 0;
    display: flex;
    height: 100%;
    flex-direction: column;
    flex: 1 1 150px; // stretching (ocupy all the space) flex-grow flex-shrink flex-basis
    background-color: white;

    ${(expanded || !isChildOfHeader) &&
    `width: 16rem;
    max-width: 16rem;`}

    ${from.desktop} {
        width: 16rem;
        max-width: 16rem;
    }
`;

export const sideNavDivider = css`
    height: 1px;
    margin: 0.5rem 1rem;
    background-color: #e0e0e0;
`;

export const sidenavIcon = css`
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
    padding: 1rem 0 0;
    overflow-y: auto;
`;

export const navMenuLink = css`
    display: inline-block;
    padding: 0;
    border: 0;
    appearance: none;
    background: none;
    cursor: pointer;
    width: 100%;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.28572;
    letter-spacing: 0.16px;
    outline: 2 px solid transparent;
    outline-offset: -2px;
    display: flex;
    height: 2rem;
    align-items: center;
    padding: 0 1rem;
    color: #525252;
    transition: color 110ms, background-color 110ms, outline 110ms;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    :hover {
        background-color: ${background.secondary};
    }

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

export const navItem = css`
    overflow: hidden;
    width: auto;
    height: auto;
`;

export const navItemActive = (expanded: boolean) => css`
    button {
        position: relative;

        &[aria-expanded='false'] {
            background-color: ${background.secondary};
        }

        ${!expanded &&
        `:before {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 4px;
            background-color: #0f62fe;
            content: '';
        }`}
    }
`;

export const navLink = css`
    ${navMenuLink}

    text-decoration: none;
    font-family: Arial;
    font-stretch: 100%;
    word-spacing: 0px;

    :hover {
        background-color: ${background.secondary};
    }

    &:focus {
        ${focusHalo};
    }
`;

export const navMenuSubLink = css`
    ${navLink}

    height: 2rem;
    min-height: 2rem;
    position: relative;
    padding-left: 5.5rem;

    span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #525252;
        font-size: 0.875rem;
        letter-spacing: 0.1px;
        line-height: 1.25rem;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        font-weight: 400;
    }

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
