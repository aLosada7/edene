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
import { transitions } from 'libs/dana/src/foundations/animation';

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
        <DanaSideNav
            width={sideNavWidth}
            aria-label="Side navigation"
            cssOverridesAside={aside(props.open, sideNavWidth)}
            {...props}
        >
            <SideNavItems>
                <SideNavPrincipal title="Components">
                    <SideNavMenu title="Authentication">
                        <SideNavMenu title="Sign In">
                            <SideNavMenuItem
                                component={NavLink}
                                to="/form/signin/basic"
                                {...props}
                            >
                                Basic
                            </SideNavMenuItem>
                            <SideNavMenuItem
                                component={NavLink}
                                to="/form/signin/modern"
                                {...props}
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
                        {...props}
                    >
                        Game Summary
                    </SideNavItem>
                </SideNavPrincipal>
            </SideNavItems>
        </DanaSideNav>
    );
};
