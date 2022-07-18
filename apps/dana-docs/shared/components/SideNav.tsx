import { css } from '@emotion/react';

import ActiveLink from './ActiveLink';

import {
    SideNav as DanaSideNav,
    SideNavItem,
    SideNavItems,
    SideNavPrincipal,
} from '@dana';

const sideNav = css`
    background-color: #fff;
`;

interface SideNavProps {
    open: boolean;
    onClose: () => void;
}

export const SideNav = ({ open, ...props }: SideNavProps) => {
    return (
        <DanaSideNav
            mobileWidth="full"
            aria-label="Side navigation"
            cssOverrides={sideNav}
            open={open}
        >
            <SideNavItems>
                <ActiveLink
                    href="/overview/getting-started"
                    activeClassName="active"
                >
                    <SideNavItem {...props}>Getting started</SideNavItem>
                </ActiveLink>
                <SideNavPrincipal title="Components">
                    <ActiveLink
                        href="/components/accordion"
                        activeClassName="active"
                    >
                        <SideNavItem {...props}>Accordion</SideNavItem>
                    </ActiveLink>
                    <ActiveLink
                        href="/components/breadcrumb"
                        activeClassName="active"
                    >
                        <SideNavItem {...props}>Breadcrumb</SideNavItem>
                    </ActiveLink>
                    <ActiveLink
                        href="/components/menu-button"
                        activeClassName="active"
                    >
                        <SideNavItem {...props}>MenuButton</SideNavItem>
                    </ActiveLink>
                </SideNavPrincipal>
            </SideNavItems>
        </DanaSideNav>
    );
};
