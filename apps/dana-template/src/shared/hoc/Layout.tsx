import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { css } from '@emotion/react';

import { from } from '@dana';

import { SideNav } from './SideNav';
import { Header } from './Header';

const headerHeight = 48; // default
const sideNavWidth = 256;

const main = (isSideNavExpanded: boolean) => css`
    ${isSideNavExpanded && from.desktop} {
        margin-left: ${sideNavWidth}px;
    }
    margin-top: ${headerHeight}px;

    min-height: 100vh;

    background-color: hsl(210, 32%, 93%);
    will-change: margin-left;
`;

export default () => {
    const [isSideNavExpanded, setSideNavExpanded] = useState(
        window.innerWidth > 980
    );
    const toggleSideNav = () => setSideNavExpanded(!isSideNavExpanded);

    const sideNavProps = {
        sideNavWidth,
        isSideNavExpanded,
        onToggleSideNav: toggleSideNav,
    };

    return (
        <>
            <Header
                sideNavWidth={sideNavWidth}
                isSideNavExpanded={isSideNavExpanded}
                onToggleSideNav={toggleSideNav}
            />
            <SideNav sideNavWidth={sideNavWidth} expanded={isSideNavExpanded} />
            <main css={main(isSideNavExpanded)}>
                <Outlet />
            </main>
        </>
    );
};
