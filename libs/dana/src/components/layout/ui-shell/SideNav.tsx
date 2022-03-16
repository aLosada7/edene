import { sidenav, sidenavHeader, navOverlay, aside } from './styles';
import React from 'react';
import { SerializedStyles } from '@emotion/react';
import { headerHeight } from './stylesHeader';
export interface SideNavProps {
    /** Means navbar is fixed. Unit measured in px **/
    isFixed?: boolean;
    width?: number;
    expanded?: boolean;
    headerHeight?: number;
    'aria-label': string;
    onClick?: any;
    children: JSX.Element;
    cssOverrides?: SerializedStyles | SerializedStyles[];
    cssOverridesAside?: SerializedStyles | SerializedStyles[];
}

export const SideNav = ({
    isFixed = false,
    width = 256,
    expanded = false,
    onClick,
    children,
    cssOverrides,
    cssOverridesAside,
    ...props
}: SideNavProps) => {
    const SideNavWrapper = ({ children }: any) => {
        if (!isFixed) return <>{children}</>;

        return (
            <aside
                css={[
                    aside(expanded, width, props.headerHeight),
                    cssOverridesAside,
                ]}
            >
                {children}
            </aside>
        );
    };

    return (
        <>
            <div css={expanded ? navOverlay : null} onClick={onClick}></div>
            <SideNavWrapper isFixed={isFixed} width={width}>
                <nav
                    css={[
                        sidenav({
                            width,
                            expanded,
                        }),
                        props.headerHeight
                            ? sidenavHeader(expanded, props.headerHeight)
                            : null,
                        cssOverrides,
                    ]}
                    aria-label={props['aria-label']}
                >
                    {children}
                </nav>
            </SideNavWrapper>
        </>
    );
};

export default SideNav;
