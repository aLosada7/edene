import { navItem, navLink } from './styles';

export interface SideNavItemProps {
    href: string;
    children: React.ReactNode;
}

export const SideNavItem = ({ href, children, ...props }: SideNavItemProps) => {
    return (
        <li css={navItem}>
            <a css={navLink} href={href}>
                <span>{children}</span>
            </a>
        </li>
    );
};
