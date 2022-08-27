import {
    Children,
    cloneElement,
    HTMLAttributes,
    useRef,
    useState,
} from 'react';

import { Icon } from '../icons';
import { useThemeContext, Props } from '@edene/foundations';

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
    isActive?: boolean;
    icon?: string;
    navigationChildren?: number;
    children: React.ReactElement | React.ReactElement[];
}

export const SideNavMenu = ({
    title,
    isActive = false,
    icon,
    cssOverrides,
    children,
    /* from parent */
    navigationChildren = 0,
}: SideNavMenuProps) => {
    const { theme } = useThemeContext();
    const navigationLevelRef = useRef(navigationChildren + 1);
    const [expanded, setExpanded] = useState(false);
    const collapse = () => setExpanded(false);
    const expand = () => setExpanded(true);

    const handleClick = () => {
        expanded ? collapse() : expand();
    };

    return (
        <li
            css={[
                navItem({ theme }),
                isActive && navItemActive(theme, expanded),
            ]}
        >
            <button
                type="button"
                aria-expanded={expanded}
                onClick={handleClick}
                css={[navMenuLink, cssOverrides]}
            >
                {icon && (
                    <Icon
                        size="small"
                        color="hsl(212, 20%, 68%)"
                        cssOverrides={sideNavIcon}
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
