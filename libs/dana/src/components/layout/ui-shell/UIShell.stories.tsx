import { action } from '@storybook/addon-actions';

import css from '@emotion/css';
import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import {
    SideNav,
    SideNavProps,
    SideNavItems,
    SideNavItem,
    SideNavMenu,
    SideNavMenuItem,
    SideNavDivider,
    Header,
    HeaderProps,
    HeaderName,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SideNavLink,
    HeaderPanel,
    HeaderMenuButton,
} from '.';
import {
    SvgBell,
    SvgEye,
    SvgGrid3x3GapFill,
    SearchIcon,
} from '../../../foundations/icons';

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
    margin-left: 16rem;
    padding: 2rem;
    background: #fff;
    will-change: margin-left;
`;

export const FixedSideNav: Story<SideNavProps> = () => (
    <div css={template}>
        <SideNav isFixedNav aria-label="Side navigation">
            <SideNavItems>
                <SideNavMenu title="L0 menu">
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                </SideNavMenu>
                <SideNavMenu title="L0 menu" isActive={true}>
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                    <SideNavMenuItem
                        href="javascript:void(0)"
                        aria-current="page"
                    >
                        L0 menu item
                    </SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                </SideNavMenu>
                <SideNavMenu title="L0 menu">
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                </SideNavMenu>
                <SideNavItem href="javascript:void(0)">Link</SideNavItem>
                <SideNavItem href="javascript:void(0)">Link</SideNavItem>
            </SideNavItems>
        </SideNav>
        <main css={main}>
            <p>Some text</p>
        </main>
    </div>
);

export const FixedSideNavWDivider: Story<SideNavProps> = () => (
    <div css={template}>
        <SideNav isFixedNav aria-label="Side navigation">
            <SideNavItems>
                <SideNavMenu title="L0 menu">
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                </SideNavMenu>
                <SideNavMenu title="L0 menu" isActive={true}>
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                    <SideNavMenuItem
                        href="javascript:void(0)"
                        aria-current="page"
                    >
                        L0 menu item
                    </SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                </SideNavMenu>
                <SideNavMenu title="L0 menu">
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                </SideNavMenu>
                <SideNavDivider />
                <SideNavItem href="javascript:void(0)">Link</SideNavItem>
                <SideNavItem href="javascript:void(0)">Link</SideNavItem>
            </SideNavItems>
        </SideNav>
        <main css={main}>
            <p>Some text</p>
        </main>
    </div>
);

export const FixedSideNavWIcons: Story<SideNavProps> = () => (
    <div css={template}>
        <SideNav isFixedNav aria-label="Side navigation">
            <SideNavItems>
                <SideNavMenu icon={<SvgEye />} title="L0 menu">
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                </SideNavMenu>
                <SideNavMenu icon={<SvgEye />} title="L0 menu" isActive={true}>
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                    <SideNavMenuItem
                        href="javascript:void(0)"
                        aria-current="page"
                    >
                        L0 menu item
                    </SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                </SideNavMenu>
                <SideNavMenu icon={<SvgEye />} title="L0 menu">
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">
                        L0 menu item
                    </SideNavMenuItem>
                </SideNavMenu>
                <SideNavLink icon={<SvgEye />} href="javascript:void(0)">
                    Link
                </SideNavLink>
                <SideNavLink icon={<SvgEye />} href="javascript:void(0)">
                    Link
                </SideNavLink>
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
                <SvgBell />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="App" tooltipAlignment="end">
                <SvgGrid3x3GapFill />
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
                <SvgBell />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="App" tooltipAlignment="end">
                <SvgGrid3x3GapFill />
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
                isFixedNav
                aria-label="Side navigation"
                isChildOfHeader={true}
                expanded={isSideNavExpanded}
            >
                <SideNavItems>
                    <SideNavMenu title="L0 menu">
                        <SideNavMenuItem href="javascript:void(0)">
                            L0 menu item
                        </SideNavMenuItem>
                        <SideNavMenuItem href="javascript:void(0)">
                            L0 menu item
                        </SideNavMenuItem>
                        <SideNavMenuItem href="javascript:void(0)">
                            L0 menu item
                        </SideNavMenuItem>
                    </SideNavMenu>
                    <SideNavMenu title="L0 menu" isActive={true}>
                        <SideNavMenuItem href="javascript:void(0)">
                            L0 menu item
                        </SideNavMenuItem>
                        <SideNavMenuItem
                            href="javascript:void(0)"
                            aria-current="page"
                        >
                            L0 menu item
                        </SideNavMenuItem>
                        <SideNavMenuItem href="javascript:void(0)">
                            L0 menu item
                        </SideNavMenuItem>
                    </SideNavMenu>
                    <SideNavMenu title="L0 menu">
                        <SideNavMenuItem href="javascript:void(0)">
                            L0 menu item
                        </SideNavMenuItem>
                        <SideNavMenuItem href="javascript:void(0)">
                            L0 menu item
                        </SideNavMenuItem>
                        <SideNavMenuItem href="javascript:void(0)">
                            L0 menu item
                        </SideNavMenuItem>
                    </SideNavMenu>
                    <SideNavItem href="javascript:void(0)">Link</SideNavItem>
                    <SideNavItem href="javascript:void(0)">Link</SideNavItem>
                </SideNavItems>
            </SideNav>
            <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="Search">
                    <SearchIcon />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="Notifications">
                    <SvgBell />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="App" tooltipAlignment="end">
                    <SvgGrid3x3GapFill />
                </HeaderGlobalAction>
            </HeaderGlobalBar>
        </Header>
    );
};
