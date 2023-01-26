import { css } from '@emotion/react';
import { Theme, from, shadows } from '@edene/foundations';

export const header = ({ theme }: { theme: Theme }) => css`
    z-index: 50;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    border-bottom: 1 px solid ${theme.header.background};
    background-color: ${theme.header.background};
`;

export const headerPosition = (fixed: boolean) => css`
    ${fixed === true && `position: fixed;`}
`;

export const headerHeight = (height: number) =>
    css`
        height: ${height}px;
    `;

export const headerName = ({ theme }: { theme: Theme }) => css`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.28572;
    letter-spacing: 0.16px;
    -webkit-font-smoothing: antialiased;
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 2rem 0 1rem;
    border: 0.125rem solid transparent;
    font-weight: 600;
    letter-spacing: 0.1px;
    line-height: 1.25rem;
    outline: none;
    text-decoration: none;
    transition: border-color 110ms;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: ${theme.header.text};
`;

export const headerGlobalBar = css`
    display: flex;
    height: 100%;
    flex: 1 1 0%;
    justify-content: flex-end;
`;

export const headerGlobalAction = ({ theme }: { theme: Theme }) => css`
    padding: 0;
    border: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: none;
    cursor: pointer;
    width: 100%;
    width: 3rem;
    border: 0.0625rem solid transparent;
    transition: background-color 110ms, border-color 110ms;
    position: relative;

    :last-child {
        div {
            //transform: translateX(-100px);
        }
    }

    svg {
        fill: ${theme.header.headerGlobalAction.fill};
    }
`;

export const headerGlobalActionAriaLabel = css`
    :hover {
        background-color: #353535;

        ::before {
            opacity: 1;
        }

        div {
            opacity: 1;
        }
    }

    ::before {
        position: absolute;
        content: '';
        bottom: -0.5rem;
        border-width: 0 0.25rem 0.3125rem 0.25rem;
        border-color: transparent transparent #393939 transparent;
        width: 0;
        height: 0;
        border-style: solid;
        transform: translate(125%, 100%);
        opacity: 0;
    }
`;

export const actionAssistiveText = css`
    overflow: hidden;
    margin: -1px;
    bottom: -2.25rem;
    left: 50%;
    box-shadow: 0 2px 6px rgb(0 0 0 / 30%);
    z-index: 6000;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    min-width: 1.5rem;
    max-width: 13rem;
    height: auto;
    padding: 0.1875rem 1rem;
    background-color: #393939;
    border-radius: 0.125rem;
    color: #fff;
    font-weight: 400;
    text-align: left;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.28572;
    letter-spacing: 0.16px;
    position: absolute;
    z-index: 6000;
    display: flex;
    align-items: center;
    opacity: 0;
    pointer-events: none;
`;

export const headerPanel = (backgroundColor: string, textColor: string) => css`
    position: fixed;
    z-index: 8000;
    top: 3rem;
    right: 0;
    bottom: 0;
    overflow: hidden;
    width: 0;
    border: none;
    height: fit-content;
    background-color: ${backgroundColor};
    color: ${textColor};
    padding: 1rem 0;
    display: flex;
    align-items: center;
    box-shadow: ${shadows.light};
`;

export const headerPanelExpanded = css`
    width: 16rem;
    min-height: 255px;
    border-bottom-left-radius: 8px;
`;

export const headerMenuButton = (alwaysVisible: boolean) => css`
    width: 1rem;

    ${!alwaysVisible && from.desktop} {
        display: none;
    }
`;

export const headerIconBadge = css`
    position: absolute;
    top: 4px;
    right: 4px;
`;
