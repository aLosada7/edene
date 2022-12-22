import { SerializedStyles } from '@emotion/react';
import { LinkHTMLAttributes } from 'react';

import { PolymorphicComponentProps, useTheme, Props } from '@edene/foundations';

import {
    navigationLevel,
    navItem,
    navMenuSubLink,
    navMenuSubLinkText,
    navMenuLinkActive,
} from './styles';

export interface SharedSideNavMenuItemProps
    extends LinkHTMLAttributes<HTMLAnchorElement>,
        Props {
    badge?: React.ReactElement;
    navigationChildren?: number;
    active?: boolean;
    cssOverrides?: SerializedStyles | SerializedStyles[];
    children: React.ReactNode;
}

export type SideNavMenuItemProps<C> = PolymorphicComponentProps<
    C,
    SharedSideNavMenuItemProps
>;

type SideNavMenuItemComponent = <C = 'a'>(
    props: SideNavMenuItemProps<C>
) => React.ReactElement;

export const SideNavMenuItem: SideNavMenuItemComponent = ((
    props: SideNavMenuItemProps<'a'>
) => {
    const {
        component,
        cssOverrides,
        badge,
        navigationChildren = 0,
        active = false,
        children,
        ...rest
    } = props;

    const { theme } = useTheme();

    const Element = component || 'a';

    return (
        <li css={navItem({ theme })} aria-current={active ? 'page' : undefined}>
            <Element
                css={[
                    navMenuSubLink,
                    active && navMenuLinkActive({ theme }),
                    cssOverrides,
                ]}
                {...rest}
            >
                <span
                    css={[
                        navMenuSubLinkText,
                        navigationLevel(navigationChildren),
                    ]}
                >
                    {children}
                </span>
                {badge}
            </Element>
        </li>
    );
}) as any;
