import React, { cloneElement, LinkHTMLAttributes } from 'react';

import { PolymorphicComponentProps } from '@dana-theme';

import { Props } from '../../../helpers';
import useThemeContext from 'libs/dana/src/foundations/theme/useThemeContext';
import {
    navItem,
    navLink,
    sideNavBadge,
    sideNavWithIcon,
    navMenuLinkActive,
} from './styles';

export interface SharedSideNavItemProps
    extends LinkHTMLAttributes<HTMLAnchorElement>,
        Props {
    icon?: React.ReactElement;
    badge?: React.ReactElement;
    hideIcon?: boolean;
    children: React.ReactNode;
}

export type SideNavItemProps<C> = PolymorphicComponentProps<
    C,
    SharedSideNavItemProps
>;

type SideNavItemComponent = <C = 'a'>(
    props: SideNavItemProps<C>
) => React.ReactElement;

export const SideNavItem: SideNavItemComponent = ((
    props: SideNavItemProps<'a'>
) => {
    const {
        component,
        icon,
        badge,
        hideIcon = false,
        cssOverrides,
        children,
        ...rest
    } = props;

    const theme = useThemeContext();

    const Element = component || 'a';

    return (
        <li css={[navItem(theme), cssOverrides]}>
            <Element css={[navLink, navMenuLinkActive]} {...rest}>
                <span css={sideNavWithIcon}>
                    {icon &&
                        cloneElement(icon, {
                            size: 'small',
                            color: 'hsl(212, 20%, 68%)',
                        })}
                    {children}
                </span>

                {badge && cloneElement(badge, { cssOverrides: [sideNavBadge] })}
            </Element>
        </li>
    );
}) as any;
