import { css } from '@emotion/react';
import { Story, Meta } from '@storybook/react';
import { useState } from 'react';

import {
    SideNav,
    SideNavItems,
    SideNavItem,
    SideNavMenu,
    SideNavMenuItem,
    Header,
    HeaderProps,
    HeaderName,
    HeaderGlobalBar,
    HeaderGlobalAction,
    HeaderMenuButton,
} from '.';

export default {
    component: SideNav,
    title: 'UI Shell',
    parameters: {
        layout: 'fullscreen',
    },
} as Meta;

const sideNavHeader = css`
    background-color: #fff;
`;

export const Default: Story<HeaderProps> = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Header fixed aria-label="EDENE Library Name">
            <HeaderMenuButton
                variant="light"
                active={isOpen}
                aria-label="Open menu"
                onClick={toggleMenu}
                alwaysVisible
            />
            <HeaderName href="#" prefix="EDENE">
                [Library]
            </HeaderName>
            <SideNav
                headerHeight={48}
                aria-label="Side navigation"
                open={isOpen}
                onClose={toggleMenu}
                css={sideNavHeader}
            >
                <SideNavItems>
                    <SideNavMenu title="L0 menu">
                        <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                        <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                        <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                    </SideNavMenu>
                    <SideNavMenu title="L0 menu" active>
                        <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                        <SideNavMenuItem active>L0 menu item</SideNavMenuItem>
                        <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                    </SideNavMenu>
                    <SideNavMenu title="L0 menu">
                        <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                        <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                        <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                    </SideNavMenu>
                    <SideNavItem>Link</SideNavItem>
                    <SideNavItem>Link</SideNavItem>
                </SideNavItems>
            </SideNav>
            <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="Search">
                    search
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="Notifications">
                    notifications
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="App">apps</HeaderGlobalAction>
            </HeaderGlobalBar>
        </Header>
    );
};
