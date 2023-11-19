import { NavLink } from 'react-router-dom';
import {
    SideNav as EdeneSideNav,
    SideNavItem,
    SideNavItems,
    SideNavMenu,
    SideNavPrincipal,
} from '@edene/components';
import { transitions } from '@edene/foundations';
import { css } from '@emotion/react';

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
const APPLICATIONS = [
    'Game Summary',
    'Flight Timeline',
    'Contract Register',
    'Music Products',
];

export const SideNav = ({ sideNavWidth, ...props }: SideNavProps) => {
    return (
        <EdeneSideNav
            fixed
            overlay
            width={sideNavWidth}
            aria-label="Side navigation"
            cssAside={aside(props.open, sideNavWidth)}
            {...props}
        >
            <SideNavItems>
                <SideNavPrincipal title="Dashboards">
                    {DASHBOARDS.map((dashboard) => (
                        <SideNavItem
                            key={dashboard}
                            as={NavLink}
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
                            as={NavLink}
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
                        <SideNavItem as={NavLink} to="/pages/signIn" {...props}>
                            Sign In
                        </SideNavItem>
                        <SideNavItem
                            as={NavLink}
                            to="/pages/unlockSession"
                            {...props}
                        >
                            Unlock session
                        </SideNavItem>
                    </SideNavMenu>
                </SideNavPrincipal>
            </SideNavItems>
        </EdeneSideNav>
    );
};
