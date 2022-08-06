import { SerializedStyles } from '@emotion/react';
import { cloneElement, LinkHTMLAttributes } from 'react';

import {
    PolymorphicComponentProps,
    useThemeContext,
    Props,
} from '@edene/foundations';

import {
    navigationLevel,
    navItem,
    navMenuSubLink,
    navMenuSubLinkText,
    sideNavBadge,
} from './styles';

export interface SharedSideNavMenuItemProps
    extends LinkHTMLAttributes<HTMLAnchorElement>,
        Props {
    badge?: React.ReactElement;
    navigationChildren?: number;
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
        children,
        ...rest
    } = props;

    const { theme } = useThemeContext();

    const Element = component || 'a';

    return (
        <li css={navItem(theme)}>
            <Element css={[navMenuSubLink({ theme }), cssOverrides]} {...rest}>
                <span
                    css={[
                        navMenuSubLinkText,
                        navigationLevel(navigationChildren),
                    ]}
                >
                    {children}
                </span>
                {badge && cloneElement(badge, { cssOverrides: [sideNavBadge] })}
            </Element>
        </li>
    );
}) as any;
