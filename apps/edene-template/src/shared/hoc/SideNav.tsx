import { NavLink } from 'react-router-dom';
import { css } from '@emotion/react';

import {
    SideNav as EdeneSideNav,
    SideNavItem,
    SideNavItems,
    SideNavMenu,
    SideNavMenuItem,
    SideNavPrincipal,
} from '@edene/components';
import { transitions } from '@edene/foundations';

const aside = (open: boolean, width: number) => css`
    background-color: #fff;

    transform: ${open ? 'translateX(0)' : `translateX(-${width}px)`};
    transition: transform ${transitions.short};
`;

interface SideNavProps {
    sideNavWidth: number;
    open: boolean;
    onClose: () => void;
}

export const SideNav = ({ sideNavWidth, ...props }: SideNavProps) => {
    return (
        <EdeneSideNav
            width={sideNavWidth}
            aria-label="Side navigation"
            cssOverridesAside={aside(props.open, sideNavWidth)}
            {...props}
        >
            <SideNavItems>
                <SideNavPrincipal title="Applications">
                    <SideNavItem
                        component={NavLink}
                        to="applications/game-summary"
                        {...props}
                    >
                        Game Summary
                    </SideNavItem>
                    <SideNavItem
                        component={NavLink}
                        to="applications/flight-timeline"
                    >
                        Flight Timeline
                    </SideNavItem>
                    <SideNavItem
                        component={NavLink}
                        to="applications/contract-register"
                    >
                        Contract Register
                    </SideNavItem>
                </SideNavPrincipal>
                <SideNavPrincipal title="Pages">
                    <SideNavMenu title="Authentication">
                        <SideNavMenu title="Sign In">
                            <SideNavMenuItem
                                component={NavLink}
                                to="/pages/signin/classic"
                                {...props}
                            >
                                Basic
                            </SideNavMenuItem>
                        </SideNavMenu>
                    </SideNavMenu>
                </SideNavPrincipal>
            </SideNavItems>
        </EdeneSideNav>
    );
};
