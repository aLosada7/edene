import React, { FC, LinkHTMLAttributes } from 'react';

import { Props, useTheme } from '@edene/foundations';

import { navItem, navLink, sideNavWithIcon, navMenuLinkActive } from './styles';
import { Icon } from '../icons';

export interface SideNavItemProps
    extends LinkHTMLAttributes<HTMLAnchorElement>,
        Props {
    icon?: string;
    badge?: React.ReactElement;
    onClose?: () => void;
    active?: boolean;
    children: React.ReactNode;
}

export const SideNavItem: FC<SideNavItemProps> = ({
    icon,
    badge,
    css,
    onClose,
    active = false,
    children,
    ...props
}) => {
    const { theme } = useTheme();

    return (
        <li
            css={[navItem({ theme }), css]}
            aria-current={active ? 'page' : undefined}
        >
            <a
                css={[navLink, active && navMenuLinkActive({ theme })]}
                {...props}
            >
                <div onClick={onClose}>
                    <span css={sideNavWithIcon}>
                        {icon && (
                            <Icon
                                size="small"
                                color="hsl(212, 20%, 68%)"
                                css={sideNavWithIcon}
                            >
                                {icon}
                            </Icon>
                        )}
                        {children}
                    </span>
                </div>

                {badge}
            </a>
        </li>
    );
};
