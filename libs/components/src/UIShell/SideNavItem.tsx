import { ReactElement, ReactNode } from 'react';

import { Props, PolymorphicComponentProps, useTheme } from '@edene/foundations';

import { navItem, navLink, sideNavWithIcon, navMenuLinkActive } from './styles';
import { Icon } from '../icons';

export interface SharedSideNavItemProps extends Props {
    icon?: string;
    badge?: ReactElement;
    onClose?: () => void;
    active?: boolean;
    children: ReactNode;
}

export type SideNavItemProps<C> = PolymorphicComponentProps<
    C,
    SharedSideNavItemProps
>;

type SideNavItemComponent = <C = 'a'>(
    props: SideNavItemProps<C>
) => ReactElement;

export const SideNavItem: SideNavItemComponent = (({
    as: Element = 'a',
    icon,
    badge,
    css,
    onClose,
    active = false,
    children,
    ...props
}: SideNavItemProps<'a'>) => {
    const { theme } = useTheme();

    return (
        <li
            css={[navItem({ theme }), css]}
            aria-current={active ? 'page' : undefined}
        >
            <Element
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
            </Element>
        </li>
    );
}) as any;
