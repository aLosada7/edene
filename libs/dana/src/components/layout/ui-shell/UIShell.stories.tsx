import { css } from '@emotion/react';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Badge, Divider } from '@dana';

import {
    SideNav,
    SideNavProps,
    SideNavItems,
    SideNavItem,
    SideNavMenu,
    SideNavMenuItem,
    Header,
    HeaderProps,
    HeaderName,
    HeaderGlobalBar,
    HeaderGlobalAction,
    HeaderPanel,
    HeaderMenuButton,
} from '.';
import {
    BellIcon,
    GraduationIcon,
    Grid3x3GapIcon,
    SearchIcon,
} from '../../../foundations/icons';

export default {
    component: SideNav,
    title: 'Components/Layout/UI Shell',
    parameters: {
        layout: 'fullscreen',
    },
} as Meta;

const main = css`
    margin-left: 256px;

    width: 100%;
    min-height: 100vh;
`;

const sideNavHeader = css`
    background-color: #fff;
`;

export const FixedSideNav: Story<SideNavProps> = () => (
    <>
        <SideNav isFixed width={256} aria-label="Side navigation">
            <SideNavItems>
                <SideNavMenu title="L0 menu">
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                </SideNavMenu>
                <SideNavMenu title="L0 menu">
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                </SideNavMenu>
                <SideNavMenu title="L0 menu">
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                </SideNavMenu>
                <SideNavItem>Link</SideNavItem>
                <SideNavItem
                    aria-current="page"
                    badge={<Badge color="gray" text="7" />}
                >
                    Link
                </SideNavItem>
            </SideNavItems>
        </SideNav>
        <main css={main}>
            <p>Some text</p>
        </main>
    </>
);

export const FixedSideNavWDivider: Story<SideNavProps> = () => (
    <>
        <SideNav isFixed width={256} aria-label="Side navigation">
            <SideNavItems>
                <SideNavMenu title="L0 menu">
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                </SideNavMenu>
                <SideNavMenu title="L0 menu" isActive>
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                    <SideNavMenuItem aria-current="page">
                        L0 menu item
                    </SideNavMenuItem>
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                </SideNavMenu>
                <SideNavMenu title="L0 menu">
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                </SideNavMenu>
                <Divider mt={2} mb={2} mh={4} />
                <SideNavItem>Link</SideNavItem>
                <SideNavItem>Link</SideNavItem>
            </SideNavItems>
        </SideNav>
        <main css={main}>
            <p>Some text</p>
        </main>
    </>
);

export const FixedSideNavWIcons: Story<SideNavProps> = () => (
    <>
        <SideNav isFixed width={256} aria-label="Side navigation">
            <SideNavItems>
                <SideNavMenu icon={<GraduationIcon />} title="L0 menu">
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                </SideNavMenu>
                <SideNavMenu
                    icon={<GraduationIcon />}
                    title="L0 menu"
                    isActive={true}
                >
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                    <SideNavMenuItem aria-current="page">
                        L0 menu item
                    </SideNavMenuItem>
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                </SideNavMenu>
                <SideNavMenu icon={<GraduationIcon />} title="L0 menu">
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                </SideNavMenu>
                <SideNavItem icon={<GraduationIcon />}>Link</SideNavItem>
                <SideNavItem icon={<GraduationIcon />}>Link</SideNavItem>
            </SideNavItems>
        </SideNav>
        <main css={main}>
            <p>Some text</p>
        </main>
    </>
);

export const HeaderBase: Story<HeaderProps> = () => (
    <Header isFixed aria-label="DANA Library Name">
        <HeaderName href="#" prefix="DANA">
            [Library]
        </HeaderName>
    </Header>
);

export const HeaderBaseWActions: Story<HeaderProps> = () => (
    <Header isFixed aria-label="DANA Library Name">
        <HeaderName href="#" prefix="DANA">
            [Library]
        </HeaderName>
        <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Search">
                <SearchIcon />
            </HeaderGlobalAction>
            <HeaderGlobalAction badge={7} aria-label="Notifications">
                <BellIcon />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="App">
                <Grid3x3GapIcon />
            </HeaderGlobalAction>
        </HeaderGlobalBar>
    </Header>
);

export const HeaderBaseWActionsAndPanel: Story<HeaderProps> = () => (
    <Header isFixed aria-label="DANA Library Name">
        <HeaderName href="#" prefix="DANA">
            [Library]
        </HeaderName>
        <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Search">
                <SearchIcon />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="Notifications">
                <BellIcon />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="App">
                <Grid3x3GapIcon />
            </HeaderGlobalAction>
        </HeaderGlobalBar>
        <HeaderPanel aria-label="Header Panel" expanded></HeaderPanel>
    </Header>
);

export const HeaderBaseWSidenav: Story<HeaderProps> = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Header isFixed aria-label="DANA Library Name">
            <HeaderMenuButton
                variant="light"
                active={isOpen}
                aria-label="Open menu"
                onClick={toggleMenu}
                alwaysVisible
            />
            <HeaderName href="#" prefix="DANA">
                [Library]
            </HeaderName>
            <SideNav
                width={256}
                aria-label="Side navigation"
                open={isOpen}
                onClose={toggleMenu}
                cssOverrides={sideNavHeader}
            >
                <SideNavItems>
                    <SideNavMenu title="L0 menu">
                        <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                        <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                        <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                    </SideNavMenu>
                    <SideNavMenu title="L0 menu" isActive={true}>
                        <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                        <SideNavMenuItem aria-current="page">
                            L0 menu item
                        </SideNavMenuItem>
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
                    <SearchIcon />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="Notifications">
                    <BellIcon />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="App">
                    <Grid3x3GapIcon />
                </HeaderGlobalAction>
            </HeaderGlobalBar>
        </Header>
    );
};
