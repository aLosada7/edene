import { useState } from 'react';
import { css } from '@emotion/react';

import { Icon, MenuButton } from '@edene/components';

const sidebar = (open: boolean) => css`
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 72px;
    height: 100%;
    background: #6d10db;
    transition: width 0.4s;

    ${open && `width: 260px;`}
`;

const button = css`
    background: transparent;
    border: 0;
    padding: 0;
    cursor: pointer;
`;

const sidebarInner = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
`;

const sidebarHeader = css`
    display: flex;
    align-items: center;
    height: 72px;
    padding: 0 1.25rem 0 0;
    background: rgba(0, 0, 0, 0.1);
`;

const sidebarBurguer = css`
    width: 72px;
    height: 72px;
    display: grid;
    place-items: center;
`;

const sidebarMenu = css`
    display: grid;

    > button {
        display: flex;
        gap: 28px;
        align-items: center;
        height: 60px;
        font-family: 'Poppins';
        font-size: 16px;
        font-weight: 200;
        letter-spacing: 2px;
        line-height: 1;
        padding: 0 25px;

        .has-border {
            padding-bottom: 1rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
            margin-bottom: 1rem;
        }

        > span {
            color: #f9f9f9;
        }
    }
`;

export const Sidebar = () => {
    const [sidenavOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () =>
        setSidebarOpen((prevSideNavOpen) => !prevSideNavOpen);

    return (
        <nav css={sidebar(sidenavOpen)}>
            <div css={sidebarInner}>
                <header css={sidebarHeader}>
                    <MenuButton
                        type="button"
                        cssOverrides={sidebarBurguer}
                        onClick={toggleSidebar}
                    ></MenuButton>
                    Edene
                </header>
                <nav css={sidebarMenu}>
                    <button css={button} type="button">
                        <Icon>home</Icon>
                        <span>Home</span>
                    </button>
                    <button css={button} type="button" className="has-border">
                        <Icon>settings</Icon>
                        <span>Settings</span>
                    </button>
                    <button css={button} type="button">
                        <Icon>speaker</Icon>
                        <span>AudioVibe</span>
                    </button>
                    <button css={button} type="button">
                        <Icon>lock</Icon>
                        <span>Security</span>
                    </button>
                </nav>
            </div>
        </nav>
    );
};
