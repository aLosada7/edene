import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { css } from '@emotion/react';

import { from } from '@edene/foundations';

import { SideNav } from './SideNav';
import { Header } from './Header';
import { Settings } from '../settings/Settings';

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
    const [sideNavOpen, setSideNavOpen] = useState(window.innerWidth > 980);

    const toggleSideNav = () => setSideNavOpen(!sideNavOpen);

    return (
        <div>
            <Header
                sideNavWidth={sideNavWidth}
                isSideNavExpanded={sideNavOpen}
                onToggleSideNav={toggleSideNav}
            />
            <SideNav
                sideNavWidth={sideNavWidth}
                open={sideNavOpen}
                onClose={toggleSideNav}
            />
            <Settings />
            <main css={main(sideNavOpen)}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    );
};
