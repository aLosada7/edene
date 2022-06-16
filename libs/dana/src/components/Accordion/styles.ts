import { css } from '@emotion/react';
import { background, grays } from '../../foundations';
import { focusHalo, visuallyHidden } from '../../foundations/accesibility';
import { transitions } from '../../foundations/animation';
import { from, until } from '../../foundations/mq';
import { shadows } from '../../foundations/shadows';

import { textSans } from '../../foundations/typography/api';

export const accordion = (variant: string) => css`
    padding: 0;

    ${variant === 'bordered' &&
    `
    box-shadow: ${shadows.primary};
    border-radius: .5rem;
    `}
`;

export const accordionRow = (variant: string) => css`
    border-top: 1px solid rgb(226, 232, 240);
    list-style-type: none;

    :last-child {
        border-bottom: 1px solid rgb(226, 232, 240);
    }

    ${variant === 'bordered' &&
    `
    :not(:first-child) { border-top: 1px solid ${grays[8]}; }`}
`;

const buttonStyles = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.625rem;
    cursor: pointer;
`;

export const button = () => css`
    ${buttonStyles};
    // color:;

    /* user agent overrides */
    background: none;
    outline: none;
    border: none;
    text-align: left;
    color: black;
    border-radius: 0;

    :hover {
        background-color: ${background.secondary};
    }

    &:focus {
        ${focusHalo};
    }
`;

export const toggle = css`
    width: auto;
    display: flex;
    align-items: center;
`;

export const toggleLabel = css`
    ${textSans.small({ fontWeight: 'regular' })};

    ${until.tablet} {
        ${visuallyHidden}
    }
`;

const chevronIcon = css`
    svg {
        /* TODO: think about icon sizing */
        width: 18px;
        height: 18px;

        ${from.tablet} {
            width: 26px;
            height: 26px;
        }
        margin-left: 0.25rem;
        transition: ${transitions.short};
    }
`;

export const chevronIconDown = css`
    ${chevronIcon};
    svg {
        transform: rotate(90deg);
        transition: transform ${transitions.short};
    }
`;

export const chevronIconUp = css`
    ${chevronIcon};
    svg {
        transform: rotate(270deg);
        transition: transform ${transitions.short};
    }
`;

export const toggleIconWithLabel = css`
    svg {
        width: 18px;
        height: 18px;
    }
`;

export const labelText = css`
    ${textSans.small({ fontWeight: 'regular' })};
    margin-right: 1rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const expandedBodyStyles = css`
    /*
	TODO:
	Hardcoded max-height because auto is invalid.
	If content is longer, we'll need to set overflow: auto
	but only after max-height has been reached.
	Otherwise, for short content we'll always see a flash
	of a scrollbar as the row height is transitioning
	*/
    max-height: 500px;
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

	transition: max-height ${transitions.short};
	*/
    overflow: hidden;
`;
export const collapsedBody = css`
    ${collapsedBodyStyles};
`;

export const expandedBodyChildren = css`
    ${textSans.small({ fontWeight: 'regular' })};
    padding: 0.5rem 1rem;

    ${from.tablet} {
        padding-right: 25%;
    }
`;
