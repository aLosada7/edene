import { sidenav, sidenavHeader, navOverlay } from './styles';
import React from 'react';
import { SerializedStyles } from '@emotion/react';
export interface SideNavProps {
    /** Means navbar is fixed. Each unit is multiplied by 0.25rem **/
    width?: number;
    expanded?: boolean;
    isChildOfHeader?: boolean;
    'aria-label': string;
    children: JSX.Element;
    cssOverrides?: SerializedStyles | SerializedStyles[];
}

export const SideNav = ({
    width = 0,
    expanded = false,
    isChildOfHeader = false,
    children,
    cssOverrides,
    ...props
}: SideNavProps) => {
    return (
        <aside style={{ width: '100%' }}>
            <div css={expanded ? navOverlay : null}></div>
            <nav
                css={[
                    sidenav({ width, expanded, isChildOfHeader }),
                    isChildOfHeader ? sidenavHeader : null,
                    cssOverrides,
                ]}
                aria-label={props['aria-label']}
            >
                {children}
            </nav>
        </aside>
    );
};

export default SideNav;
