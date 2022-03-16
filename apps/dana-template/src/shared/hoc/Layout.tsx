import { useState } from 'react';
import {
    Header,
    HeaderGlobalAction,
    HeaderGlobalBar,
    HeaderMenuButton,
    HeaderName,
    SideNav,
    SideNavItem,
    SideNavItems,
    SideNavMenu,
    SideNavMenuItem,
    BellIcon,
    Grid3x3GapIcon,
    SearchIcon,
    from,
    SideNavPrincipal,
} from '@dana';
import { Outlet } from 'react-router-dom';
import { css } from '@emotion/react';

const headerHeight = 48; // default
const sideNavWidth = 256;

const header = (isSideNavExpanded: boolean) => css`
    ${isSideNavExpanded && from.desktop} {
        margin-left: ${sideNavWidth}px;
    }
`;

const main = (isSideNavExpanded: boolean) => css`
    ${isSideNavExpanded && from.desktop} {
        margin-left: ${sideNavWidth}px;
    }
    margin-top: ${headerHeight}px;

    width: 100%;
    min-height: 100vh;

    background-color: hsl(210, 32%, 93%);
    will-change: margin-left;
`;

const aside = (isSideNavExpanded: boolean) =>
    css`
        ${!isSideNavExpanded && `display: none;`}
    `;

const sideNav = css`
    background-color: #fff;
`;

export default () => {
    const [isSideNavExpanded, setSideNavExpanded] = useState(
        window.innerWidth > 980
    );
    const handleSideNavExpand = () => setSideNavExpanded(!isSideNavExpanded);

    return (
        <>
            <Header
                isFixed
                cssOverrides={header(isSideNavExpanded)}
                aria-label="Dana Template"
            >
                <HeaderMenuButton
                    alwaysVisible
                    aria-label="Open menu"
                    onClick={handleSideNavExpand}
                    variant="light"
                    isActive={isSideNavExpanded}
                />
            </Header>
            <SideNav
                isFixed
                width={sideNavWidth}
                aria-label="Side navigation"
                onClick={handleSideNavExpand}
                expanded={isSideNavExpanded}
                cssOverrides={sideNav}
                cssOverridesAside={aside(isSideNavExpanded)}
            >
                <SideNavItems>
                    <SideNavPrincipal title="Components">
                        <SideNavMenu title="Forms">
                            <SideNavMenuItem href="/generalForm">
                                General Form (*)
                            </SideNavMenuItem>
                            <SideNavMenuItem href="javascript:void(0)">
                                Form Wizard (*)
                            </SideNavMenuItem>
                            <SideNavMenuItem href="javascript:void(0)">
                                Form Upload (*)
                            </SideNavMenuItem>
                        </SideNavMenu>
                    </SideNavPrincipal>
                    <SideNavPrincipal title="Templates">
                        <SideNavItem isActive href="templates/game-summary">
                            Game Summary
                        </SideNavItem>
                    </SideNavPrincipal>
                </SideNavItems>
            </SideNav>
            <main css={main(isSideNavExpanded)}>
                <Outlet />
            </main>
        </>
    );
};
