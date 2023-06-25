import { FC, LinkHTMLAttributes } from 'react';

import { useTheme, Props } from '@edene/foundations';

import {
    navigationLevel,
    navItem,
    navMenuSubLink,
    navMenuSubLinkText,
    navMenuLinkActive,
} from './styles';

export interface SideNavMenuItemProps
    extends LinkHTMLAttributes<HTMLAnchorElement>,
        Props {
    badge?: React.ReactElement;
    navigationChildren?: number;
    active?: boolean;
    children: React.ReactNode;
}

export const SideNavMenuItem: FC<SideNavMenuItemProps> = ({
    css,
    badge,
    navigationChildren = 0,
    active = false,
    children,
    ...props
}) => {
    const { theme } = useTheme();

    return (
        <li css={navItem({ theme })} aria-current={active ? 'page' : undefined}>
            <a
                css={[
                    navMenuSubLink,
                    active && navMenuLinkActive({ theme }),
                    css,
                ]}
                {...props}
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
            </a>
        </li>
    );
};
