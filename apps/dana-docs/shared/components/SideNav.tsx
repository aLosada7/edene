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
                    href="/getting-started/overview"
                    activeClassName="active"
                >
                    <SideNavItem {...props}>Overview</SideNavItem>
                </ActiveLink>
                <SideNavPrincipal title="Foundations">
                    <ActiveLink
                        href="/foundations/colors"
                        activeClassName="active"
                    >
                        <SideNavItem {...props}>Colors</SideNavItem>
                    </ActiveLink>
                </SideNavPrincipal>
                <SideNavPrincipal title="Components">
                    <ActiveLink
                        href="/components/button"
                        activeClassName="active"
                    >
                        <SideNavItem {...props}>Button</SideNavItem>
                    </ActiveLink>
                </SideNavPrincipal>
            </SideNavItems>
        </DanaSideNav>
    );
};
