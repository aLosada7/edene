import { css } from '@emotion/react';

import ActiveLink from './ActiveLink';

import {
    SideNav as EdeneSideNav,
    SideNavItem,
    SideNavItems,
    SideNavPrincipal,
} from '@edene/components';

const sideNav = css`
    background-color: #fff;
`;

interface SideNavProps {
    open: boolean;
    onClose: () => void;
}

const COMPONENTS = [
    'Accordion',
    'Alert',
    'Badge',
    'Breadcrumb',
    'Button',
    'Tabs',
    'Text',
    'Title',
    'Grid',
    'Badge',
].sort((a, b) => a.localeCompare(b));

const ANIMATIONS = ['FadeIn'].sort((a, b) => a.localeCompare(b));

export const SideNav = ({ open, ...props }: SideNavProps) => {
    return (
        <EdeneSideNav
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
                <ActiveLink
                    href="/overview/overriding-styles"
                    activeClassName="active"
                >
                    <SideNavItem {...props}>Overriding Styles</SideNavItem>
                </ActiveLink>
                <SideNavPrincipal title="Components">
                    {COMPONENTS.map((component) => (
                        <ActiveLink
                            key={component}
                            href={`/components/${component.toLowerCase()}`}
                            activeClassName="active"
                        >
                            <SideNavItem {...props}>{component}</SideNavItem>
                        </ActiveLink>
                    ))}
                </SideNavPrincipal>
                <SideNavPrincipal title="Animations">
                    {ANIMATIONS.map((animation) => (
                        <ActiveLink
                            key={animation}
                            href={`/animations/${animation.toLowerCase()}`}
                            activeClassName="active"
                        >
                            <SideNavItem {...props}>{animation}</SideNavItem>
                        </ActiveLink>
                    ))}
                </SideNavPrincipal>
            </SideNavItems>
        </EdeneSideNav>
    );
};
