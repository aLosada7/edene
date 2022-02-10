import { navItem, navMenuSubLink } from './styles';
export interface SideNavMenuItemProps {
    href: string;
    children: React.ReactNode;
    'aria-current'?: any;
}

export const SideNavMenuItem = ({
    href,
    children,
    ...props
}: SideNavMenuItemProps) => {
    return (
        <li css={navItem}>
            <a
                css={[navMenuSubLink]}
                href={href}
                aria-current={props['aria-current']}
            >
                <span>{children}</span>
            </a>
        </li>
    );
};
