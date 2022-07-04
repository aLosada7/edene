import React from 'react';
import { SerializedStyles } from '@emotion/react';

import { sidenav, sidenavHeader, navOverlay, aside } from './styles';
import { from } from '@dana-foundations';

export interface SideNavProps {
    /** Means navbar is fixed. Unit measured in px **/
    isFixed?: boolean;
    width?: number;
    mobileWidth?: number | 'full';
    open?: boolean;
    headerHeight?: number;
    'aria-label': string;
    onOverlayClicked?: () => void;
    children: JSX.Element;
    cssOverrides?: SerializedStyles | SerializedStyles[];
    cssOverridesAside?: SerializedStyles | SerializedStyles[];
}

export const SideNav = ({
    isFixed = false,
    width = 256,
    mobileWidth,
    open = false,
    headerHeight,
    onOverlayClicked,
    children,
    cssOverrides,
    cssOverridesAside,
    ...props
}: SideNavProps) => (
    <>
        <div css={navOverlay(open)} onClick={onOverlayClicked} />
        <aside
            css={[
                aside(isFixed, open, width, mobileWidth, headerHeight),
                cssOverridesAside,
            ]}
        >
            <nav
                css={[
                    sidenav({
                        width,
                        open,
                    }),
                    headerHeight ? sidenavHeader(open, headerHeight) : null,
                    cssOverrides,
                ]}
                aria-label={props['aria-label']}
            >
                {children}
            </nav>
        </aside>
    </>
);

export default SideNav;
