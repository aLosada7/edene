import { Fragment } from 'react';
import { SerializedStyles } from '@emotion/react';
import { Props } from '@edene/foundations';

import { sidenav, sidenavHeader, navOverlay, aside } from './styles';

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

export const SideNav = (props: SideNavProps) => {
    const {
        fixed = false,
        width = 256,
        mobileWidth,
        open = false,
        headerHeight,
        onClose,
        overlay = false,
        children,
        css: cssOverrides,
        cssAside,
        ...rest
    } = props;

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
                        cssOverrides,
                    ]}
                    {...rest}
                >
                    {children}
                </nav>
            </aside>
        </Fragment>
    );
};

export default SideNav;
