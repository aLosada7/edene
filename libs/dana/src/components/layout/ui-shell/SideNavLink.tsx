import { cloneElement } from 'react';
import { navItem, navLink, sidenavIcon } from './styles';
export interface SideNavLinkProps {
    href: string;
    icon?: React.ReactElement;
    children: React.ReactNode;
}

export const SideNavLink = ({
    href,
    icon,
    children,
    ...props
}: SideNavLinkProps) => {
    return (
        <li css={navItem}>
            <a css={navLink} href={href}>
                {icon ? (
                    <div css={sidenavIcon}>
                        {cloneElement(icon, { size: 'large' })}
                    </div>
                ) : null}
                <span>{children}</span>
            </a>
        </li>
    );
};
