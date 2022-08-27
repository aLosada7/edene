import { css } from '@emotion/react';
import { Story, Meta } from '@storybook/react';
import { Fragment, useState } from 'react';

import { Badge, Divider, Icon } from '@edene/components';

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

export default {
    component: SideNav,
    title: 'Components/UI Shell',
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
    <Fragment>
        <SideNav fixed width={256} aria-label="Side navigation">
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
                    badge={<Badge color="gray">7</Badge>}
                >
                    Link
                </SideNavItem>
            </SideNavItems>
        </SideNav>
        <main css={main}>
            <p>Some text</p>
        </main>
    </Fragment>
);

export const FixedSideNavWDivider: Story<SideNavProps> = () => (
    <Fragment>
        <SideNav fixed width={256} aria-label="Side navigation">
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
    </Fragment>
);

export const FixedSideNavWIcons: Story<SideNavProps> = () => (
    <Fragment>
        <SideNav fixed width={256} aria-label="Side navigation">
            <SideNavItems>
                <SideNavMenu icon="school" title="L0 menu">
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                </SideNavMenu>
                <SideNavMenu icon="school" title="L0 menu" isActive={true}>
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                    <SideNavMenuItem aria-current="page">
                        L0 menu item
                    </SideNavMenuItem>
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                </SideNavMenu>
                <SideNavMenu icon="school" title="L0 menu">
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                    <SideNavMenuItem>L0 menu item</SideNavMenuItem>
                </SideNavMenu>
                <SideNavItem icon="school">Link</SideNavItem>
                <SideNavItem icon="school">Link</SideNavItem>
            </SideNavItems>
        </SideNav>
        <main css={main}>
            <p>Some text</p>
        </main>
    </Fragment>
);

export const HeaderBase: Story<HeaderProps> = () => (
    <Header fixed aria-label="EDENE Library Name">
        <HeaderName href="#" prefix="EDENE">
            [Library]
        </HeaderName>
    </Header>
);

export const HeaderBaseWActions: Story<HeaderProps> = () => (
    <Header fixed aria-label="EDENE Library Name">
        <HeaderName href="#" prefix="EDENE">
            [Library]
        </HeaderName>
        <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Search">search</HeaderGlobalAction>
            <HeaderGlobalAction badge={7} aria-label="Notifications">
                notifications
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="App">apps</HeaderGlobalAction>
        </HeaderGlobalBar>
    </Header>
);

export const HeaderBaseWActionsAndPanel: Story<HeaderProps> = () => (
    <Header fixed aria-label="EDENE Library Name">
        <HeaderName href="#" prefix="EDENE">
            [Library]
        </HeaderName>
        <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Search">search</HeaderGlobalAction>
            <HeaderGlobalAction aria-label="Notifications">
                notifications
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="App">apps</HeaderGlobalAction>
        </HeaderGlobalBar>
        <HeaderPanel aria-label="Header Panel" expanded></HeaderPanel>
    </Header>
);

export const HeaderBaseWSidenav: Story<HeaderProps> = () => {
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
