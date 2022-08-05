import { Children, cloneElement } from 'react';

import { navItems } from './styles';

export interface SideNavItemsProps {
    /** Only for SideNavItems (first level) */
    hideIcon?: boolean;
    activeColor?: string | null;
    hoverColor?: string | null;
    children: JSX.Element | JSX.Element[];
}

export const SideNavItems = ({
    hideIcon = false,
    activeColor = null,
    hoverColor = null,
    children,
}: SideNavItemsProps) => {
    return (
        <ul css={navItems}>
            {Children.map(children, (child) => {
                return cloneElement(child, {
                    hideIcon,
                    activeColor,
                    hoverColor,
                });
            })}
        </ul>
    );
};
