import { sidenav, sidenavHeader, navOverlay } from './styles';
import React from 'react';
export interface SideNavProps {
    children: JSX.Element;
    isFixedNav: boolean;
    expanded?: boolean;
    isChildOfHeader?: boolean;
    'aria-label': string;
}

export const SideNav = ({
    children,
    expanded = false,
    isChildOfHeader = false,
    ...props
}: SideNavProps) => {
    return (
        <>
            <div css={expanded ? navOverlay : null}></div>
            <nav
                css={[
                    sidenav({ expanded, isChildOfHeader }),
                    isChildOfHeader ? sidenavHeader : null,
                ]}
                aria-label={props['aria-label']}
            >
                {children}
            </nav>
        </>
    );
};

export default SideNav;
