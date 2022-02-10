import { navItems } from './styles';

export interface SideNavItemsProps {
    children: JSX.Element[];
}

export const SideNavItems = ({ children, ...props }: SideNavItemsProps) => {
    return <ul css={navItems}>{children}</ul>;
};
