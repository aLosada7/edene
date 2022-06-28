import { NavLink } from 'react-router-dom';
import { css } from '@emotion/react';

import {
    SideNav as DanaSideNav,
    SideNavItem,
    SideNavItems,
    SideNavMenu,
    SideNavMenuItem,
    SideNavPrincipal,
} from '@dana';

const aside = (isSideNavExpanded: boolean) =>
    css`
        ${!isSideNavExpanded && `display: none;`}
    `;

const sideNav = css`
    background-color: #fff;
`;

interface SideNavProps {
    sideNavWidth: number;
    expanded: boolean;
}

export const SideNav = ({ sideNavWidth, expanded }: SideNavProps) => {
    return (
        <DanaSideNav
            isFixed
            width={sideNavWidth}
            aria-label="Side navigation"
            expanded={expanded}
            cssOverrides={sideNav}
            cssOverridesAside={aside(expanded)}
        >
            <SideNavItems>
                <SideNavPrincipal title="Components">
                    <SideNavMenu title="Authentication">
                        <SideNavMenu title="Sign In">
                            <SideNavMenuItem
                                component={NavLink}
                                to="/form/signin/basic"
                            >
                                Basic
                            </SideNavMenuItem>
                            <SideNavMenuItem
                                component={NavLink}
                                to="/form/signin/modern"
                            >
                                Modern
                            </SideNavMenuItem>
                        </SideNavMenu>
                    </SideNavMenu>
                </SideNavPrincipal>
                <SideNavPrincipal title="Templates">
                    <SideNavItem
                        component={NavLink}
                        to="templates/game-summary"
                    >
                        Game Summary
                    </SideNavItem>
                </SideNavPrincipal>
            </SideNavItems>
        </DanaSideNav>
    );
};
