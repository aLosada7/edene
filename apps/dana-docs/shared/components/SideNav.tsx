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

const components = ['Accordion', 'Button', 'Tabs'];

export const SideNav = ({ open, ...props }: SideNavProps) => {
    return (
        <DanaSideNav
            mobileWidth="full"
            headerHeight={48}
            aria-label="Side navigation"
            cssOverrides={sideNav}
            onClose={props.onClose}
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
                    {components.map((component) => (
                        <ActiveLink
                            key={component}
                            href={`/components/${component.toLowerCase()}`}
                            activeClassName="active"
                        >
                            <SideNavItem {...props}>{component}</SideNavItem>
                        </ActiveLink>
                    ))}
                </SideNavPrincipal>
            </SideNavItems>
        </DanaSideNav>
    );
};
