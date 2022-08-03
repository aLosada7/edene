import { SerializedStyles } from '@emotion/react';

import { sidenav, sidenavHeader, navOverlay, aside } from './styles';

export interface SideNavProps {
    /** Means navbar is fixed. Unit measured in px **/
    isFixed?: boolean;
    width?: number;
    mobileWidth?: number | 'full';
    open?: boolean;
    headerHeight?: number;
    'aria-label': string;
    onClose?: () => void;
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
    onClose,
    children,
    cssOverrides,
    cssOverridesAside,
    ...props
}: SideNavProps) => (
    <>
        {!isFixed && headerHeight && (
            <div css={navOverlay(open)} onClick={onClose} />
        )}
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
