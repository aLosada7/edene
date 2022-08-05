import { ReactNode, useState } from 'react';
import { css } from '@emotion/react';

import { HeaderMenuButton, Header, HeaderName } from '@edene/components';

import { SideNav } from './SideNav';

const headerHeight = 64;

const main = () => css`
    margin-top: ${headerHeight}px;

    min-height: 100vh;

    will-change: margin-left;
`;

export const Layout = ({ children }: { children: ReactNode }) => {
    const [sideNavOpen, setSideNavOpen] = useState(false);

    const toggleMenu = () => {
        setSideNavOpen(!sideNavOpen);
    };

    return (
        <>
            <Header isFixed aria-label="EDENE Library Name">
                <HeaderMenuButton
                    variant="light"
                    active={sideNavOpen}
                    aria-label="Open menu"
                    onClick={toggleMenu}
                    alwaysVisible
                />
                <HeaderName href="/">Edene</HeaderName>
                <SideNav open={sideNavOpen} onClose={toggleMenu} />
            </Header>
            <main css={main}>{children}</main>
        </>
    );
};
