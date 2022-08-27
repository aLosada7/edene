import { SerializedStyles } from '@emotion/react';
import { Fragment } from 'react';

import { sidenav, sidenavHeader, navOverlay, aside } from './styles';

export interface SideNavProps {
    /** Means navbar is fixed. Unit measured in px **/
    fixed?: boolean;
    width?: number;
    /** use not recommended */
    mobileWidth?: number | 'full';
    open?: boolean;
    headerHeight?: number;
    'aria-label': string;
    onClose?: () => void;
    /** Introduces an overlay to sidenav with sizes smaller than desktop */
    overlay?: boolean;
    children: JSX.Element;
    cssOverrides?: SerializedStyles | SerializedStyles[];
    cssOverridesAside?: SerializedStyles | SerializedStyles[];
}

export const SideNav = ({
    fixed = false,
    width = 256,
    mobileWidth,
    open = false,
    headerHeight,
    onClose,
    overlay = false,
    children,
    cssOverrides,
    cssOverridesAside,
    ...props
}: SideNavProps) => {
    return (
        <Fragment>
            {open && (
                <div
                    css={navOverlay(overlay, headerHeight)}
                    onClick={onClose}
                />
            )}
            <aside
                css={[
                    aside(fixed, open, width, mobileWidth, headerHeight),
                    cssOverridesAside,
                ]}
            >
                <nav
                    css={[
                        sidenav({
                            width,
                            open,
                        }),
                        headerHeight ? sidenavHeader(open) : null,
                        cssOverrides,
                    ]}
                    aria-label={props['aria-label']}
                >
                    {children}
                </nav>
            </aside>
        </Fragment>
    );
};

export default SideNav;
