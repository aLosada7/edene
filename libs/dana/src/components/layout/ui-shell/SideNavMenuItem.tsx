import { SerializedStyles } from '@emotion/react';
import useThemeContext from 'libs/dana/src/foundations/theme/useThemeContext';
import { cloneElement, LinkHTMLAttributes } from 'react';
import {
    navItem,
    navMenuSubLink,
    navMenuSubLinkText,
    sideNavBadge,
} from './styles';
export interface SideNavMenuItemProps
    extends LinkHTMLAttributes<HTMLAnchorElement> {
    href?: string;
    'aria-current'?: any;
    badge?: React.ReactElement;
    /** Received from parent */
    activeColor?: string | null;
    /** Received from parent */
    hoverColor?: string | null;
    cssOverrides?: SerializedStyles | SerializedStyles[];
    children: React.ReactNode;
}

export const SideNavMenuItem = ({
    href,
    cssOverrides,
    badge,
    activeColor = null,
    hoverColor = null,
    children,
    ...props
}: SideNavMenuItemProps) => {
    const theme = useThemeContext();

    return (
        <li
            css={navItem(
                theme,
                !!props['aria-current'],
                activeColor,
                hoverColor
            )}
        >
            <a
                css={[navMenuSubLink, cssOverrides]}
                href={href}
                aria-current={props['aria-current']}
            >
                <span css={navMenuSubLinkText}>{children}</span>
                {badge && cloneElement(badge, { cssOverrides: [sideNavBadge] })}
            </a>
        </li>
    );
};
