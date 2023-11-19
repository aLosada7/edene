import { Fragment } from 'react';
import { Props } from '@edene/foundations';
import { SerializedStyles } from '@emotion/react';

import { aside,navOverlay, sidenav, sidenavHeader } from './styles';

export interface SideNavProps extends Props {
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
    cssAside?: SerializedStyles | SerializedStyles[];
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
    css,
    cssAside,
    ...props
}: SideNavProps) => (
    <Fragment>
        {open && (
            <div css={navOverlay(overlay, headerHeight)} onClick={onClose} />
        )}
        <aside
            css={[
                aside(fixed, open, width, mobileWidth, headerHeight),
                cssAside,
            ]}
        >
            <nav
                css={[
                    sidenav({
                        width,
                        open,
                    }),
                    headerHeight ? sidenavHeader(open) : null,
                    css,
                ]}
            >
                {children}
            </nav>
        </aside>
    </Fragment>
);

export default SideNav;
