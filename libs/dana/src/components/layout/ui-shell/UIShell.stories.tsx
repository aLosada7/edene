import { action } from '@storybook/addon-actions';

import css from '@emotion/css';
import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import {
    SideNav,
    SideNavProps,
    SideNavItems,
    SideNavPrincipal,
    SideNavItem,
    SideNavMenu,
    SideNavMenuItem,
    SideNavDivider,
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
import { Badge } from '@dana';

export default {
    component: SideNav,
    title: 'Components/Layout/UI Shell',
} as Meta;

const template = css`
    position: relative;
    width: 100%;
    display: flex;
`;

const main = css`
    margin-left: 4rem;
    padding: 2rem;
    background: #fff;
    will-change: margin-left;
`;

const sideNavHeader = css`
    background-color: #fff;
`;

export const FixedSideNav: Story<SideNavProps> = () => (
    <div css={template}>
        <SideNav width={64} aria-label="Side navigation">
            <SideNavItems>
                <SideNavPrincipal title="Principal">
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
                        isActive
                        aria-current="page"
                        badge={<Badge color="gray" text="7" />}
                    >
                        Link
                    </SideNavItem>
                </SideNavPrincipal>
            </SideNavItems>
        </SideNav>
        <main css={main}>
            <p>Some text</p>
        </main>
    </div>
);

export const FixedSideNavWDivider: Story<SideNavProps> = () => (
    <div css={template}>
        <SideNav width={64} aria-label="Side navigation">
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
                <SideNavDivider />
                <SideNavItem>Link</SideNavItem>
                <SideNavItem>Link</SideNavItem>
            </SideNavItems>
        </SideNav>
        <main css={main}>
            <p>Some text</p>
        </main>
    </div>
);

export const FixedSideNavWIcons: Story<SideNavProps> = () => (
    <div css={template}>
        <SideNav width={64} aria-label="Side navigation">
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
    </div>
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
            <HeaderGlobalAction aria-label="App" tooltipAlignment="end">
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
            <HeaderGlobalAction aria-label="App" tooltipAlignment="end">
                <Grid3x3GapIcon />
            </HeaderGlobalAction>
        </HeaderGlobalBar>
        <HeaderPanel aria-label="Header Panel" expanded></HeaderPanel>
    </Header>
);

export const HeaderBaseWSidenav: Story<HeaderProps> = () => {
    const [isSideNavExpanded, setIsSideNavExpanded] = useState(false);
    const onClickSideNavExpand = () => {
        action('onClickSideNavExpand');
        setIsSideNavExpanded(!isSideNavExpanded);
    };
    return (
        <Header isFixed aria-label="DANA Library Name">
            <HeaderMenuButton
                aria-label="Open menu"
                onClick={onClickSideNavExpand}
                variant="light"
                isActive={isSideNavExpanded}
            />
            <HeaderName href="#" prefix="DANA">
                [Library]
            </HeaderName>
            <SideNav
                width={64}
                aria-label="Side navigation"
                isChildOfHeader={true}
                expanded={isSideNavExpanded}
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
                <HeaderGlobalAction aria-label="App" tooltipAlignment="end">
                    <Grid3x3GapIcon />
                </HeaderGlobalAction>
            </HeaderGlobalBar>
        </Header>
    );
};
