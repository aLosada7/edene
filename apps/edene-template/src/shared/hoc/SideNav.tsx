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

const DASHBOARDS = ['Education', 'Report'];
const APPLICATIONS = ['Game Summary', 'Flight Timeline', 'Contract Register'];

export const SideNav = ({ sideNavWidth, ...props }: SideNavProps) => {
    return (
        <EdeneSideNav
            fixed
            overlay
            width={sideNavWidth}
            aria-label="Side navigation"
            cssOverridesAside={aside(props.open, sideNavWidth)}
            {...props}
        >
            <SideNavItems>
                <SideNavPrincipal title="Dashboards">
                    {DASHBOARDS.map((dashboard) => (
                        <SideNavItem
                            key={dashboard}
                            component={NavLink}
                            to={`dashboards/${dashboard
                                .replace(' ', '-')
                                .toLowerCase()}`}
                            {...props}
                        >
                            {dashboard}
                        </SideNavItem>
                    ))}
                </SideNavPrincipal>
                <SideNavPrincipal title="Applications">
                    {APPLICATIONS.map((application) => (
                        <SideNavItem
                            key={application}
                            component={NavLink}
                            to={`applications/${application
                                .replace(' ', '-')
                                .toLowerCase()}`}
                            {...props}
                        >
                            {application}
                        </SideNavItem>
                    ))}
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
