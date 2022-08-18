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
    'Card',
    'Carousel',
    'Tabs',
    'Text',
    'Title',
    'Grid',
    'Select',
    'Radio',
    'TextInput',
    'Checkbox',
    'Image',
].sort((a, b) => a.localeCompare(b));

const ANIMATIONS = ['FadeIn'].sort((a, b) => a.localeCompare(b));

const HOOKS = ['useSwipe', 'useHover'].sort((a, b) => a.localeCompare(b));

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
                            href={`/components/${component
                                .charAt(0)
                                .toLowerCase()}${component.slice(1)}`}
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
                            href={`/animations/${animation
                                .charAt(0)
                                .toLowerCase()}${animation.slice(1)}`}
                            activeClassName="active"
                        >
                            <SideNavItem {...props}>{animation}</SideNavItem>
                        </ActiveLink>
                    ))}
                </SideNavPrincipal>
                <SideNavPrincipal title="Hooks">
                    {HOOKS.map((hook) => (
                        <ActiveLink
                            key={hook}
                            href={`/hooks/${hook
                                .charAt(0)
                                .toLowerCase()}${hook.slice(1)}`}
                            activeClassName="active"
                        >
                            <SideNavItem {...props}>{hook}</SideNavItem>
                        </ActiveLink>
                    ))}
                </SideNavPrincipal>
            </SideNavItems>
        </EdeneSideNav>
    );
};
