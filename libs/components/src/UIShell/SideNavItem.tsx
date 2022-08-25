import React, { LinkHTMLAttributes } from 'react';

import {
    Props,
    PolymorphicComponentProps,
    useThemeContext,
} from '@edene/foundations';

import { navItem, navLink, sideNavWithIcon, navMenuLinkActive } from './styles';
import { Icon } from '../icons';

export interface SharedSideNavItemProps
    extends LinkHTMLAttributes<HTMLAnchorElement>,
        Props {
    icon?: string;
    badge?: React.ReactElement;
    hideIcon?: boolean;
    onClose?: () => void;
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
        onClose,
        children,
        ...rest
    } = props;

    const { theme } = useThemeContext();

    const Element = component || 'a';

    return (
        <li css={[navItem({ theme }), cssOverrides]}>
            <Element css={[navLink, navMenuLinkActive({ theme })]} {...rest}>
                <div onClick={onClose}>
                    <span css={sideNavWithIcon}>
                        {icon && (
                            <Icon
                                size="small"
                                color="hsl(212, 20%, 68%)"
                                cssOverrides={sideNavWithIcon}
                            >
                                {icon}
                            </Icon>
                        )}
                        {children}
                    </span>
                </div>

                {badge}
            </Element>
        </li>
    );
}) as any;
