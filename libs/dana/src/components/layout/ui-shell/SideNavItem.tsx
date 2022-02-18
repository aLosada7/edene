import { SerializedStyles } from '@emotion/react';
import useThemeContext from 'libs/dana/src/foundations/theme/useThemeContext';
import React, { cloneElement, LinkHTMLAttributes } from 'react';
import {
    navItem,
    navLink,
    sideNavBadge,
    sideNavWithIcon,
    navItemActive,
} from './styles';

export interface SideNavItemProps
    extends LinkHTMLAttributes<HTMLAnchorElement> {
    href?: string;
    icon?: React.ReactElement;
    badge?: React.ReactElement;
    isActive?: boolean;
    /** Received from parent */
    hideIcon?: boolean;
    /** Received from parent */
    activeColor?: string | null;
    /** Received from parent */
    hoverColor?: string | null;
    cssOverrides?: SerializedStyles | SerializedStyles[];
    children: React.ReactNode;
}

export const SideNavItem = ({
    href,
    icon,
    badge,
    isActive = false,
    hideIcon = false,
    activeColor = null,
    hoverColor = null,
    cssOverrides,
    children,
    ...props
}: SideNavItemProps) => {
    const theme = useThemeContext();

    return (
        <li
            css={[
                navItem(theme, isActive, activeColor, hoverColor),
                isActive && navItemActive(false, activeColor, hideIcon),
                cssOverrides,
            ]}
        >
            <a css={navLink} href={href} {...props}>
                <span css={sideNavWithIcon}>
                    {icon && cloneElement(icon, { size: 'large' })}
                    {children}
                </span>

                {badge && cloneElement(badge, { cssOverrides: [sideNavBadge] })}
            </a>
        </li>
    );
};
