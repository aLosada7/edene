import {
    Children,
    cloneElement,
    HTMLAttributes,
    useRef,
    useState,
} from 'react';

import { Icon } from '../icons';
import { useTheme, Props } from '@edene/foundations';

import {
    chevronIconDown,
    chevronIconUp,
    collapsedBody,
    expandedBody,
    navItem,
    navItemActive,
    navMenuLink,
    navSubmenuIcon,
    navigationLevel,
    sideNavIcon,
} from './styles';

export interface SideNavMenuProps
    extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'>,
        Props {
    title: string;
    active?: boolean;
    icon?: string;
    navigationChildren?: number;
    children: React.ReactElement | React.ReactElement[];
}

export const SideNavMenu = ({
    title,
    active = false,
    icon,
    css,
    children,
    /* from parent */
    navigationChildren = 0,
}: SideNavMenuProps) => {
    const { theme } = useTheme();
    const navigationLevelRef = useRef(navigationChildren + 1);
    const [expanded, setExpanded] = useState(false);
    const collapse = () => setExpanded(false);
    const expand = () => setExpanded(true);

    const handleClick = () => {
        expanded ? collapse() : expand();
    };

    return (
        <li
            css={[navItem({ theme }), active && navItemActive(theme, expanded)]}
            aria-current={active ? 'page' : undefined}
        >
            <button
                type="button"
                aria-expanded={expanded}
                onClick={handleClick}
                css={[navMenuLink, css]}
            >
                {icon && (
                    <Icon
                        size="small"
                        color="hsl(212, 20%, 68%)"
                        css={sideNavIcon}
                    >
                        {icon}
                    </Icon>
                )}
                <span css={[navigationLevel(navigationChildren)]}>{title}</span>
                <div
                    css={[
                        navSubmenuIcon,
                        expanded ? chevronIconUp : chevronIconDown,
                    ]}
                >
                    <Icon size="small">chevron_right</Icon>
                </div>
            </button>
            <ul
                css={expanded ? expandedBody : collapsedBody}
                hidden={!expanded}
            >
                {Array.isArray(children)
                    ? Children.map(children, (child) =>
                          cloneElement(child, {
                              navigationChildren: navigationLevelRef.current,
                          })
                      )
                    : cloneElement(children, {
                          navigationChildren: navigationLevelRef.current,
                      })}
            </ul>
        </li>
    );
};
