import { css } from '@emotion/react';

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
    onOverlayClicked: () => void;
}

export const SideNav = (props: SideNavProps) => {
    return (
        <DanaSideNav
            mobileWidth="full"
            aria-label="Side navigation"
            cssOverrides={sideNav}
            {...props}
        >
            <SideNavItems>
                <SideNavItem>Installation</SideNavItem>
                <SideNavPrincipal title="Foundations">
                    <SideNavItem>Colors</SideNavItem>
                </SideNavPrincipal>
                <SideNavPrincipal title="Components">
                    <SideNavItem>Icon</SideNavItem>
                </SideNavPrincipal>
            </SideNavItems>
        </DanaSideNav>
    );
};
