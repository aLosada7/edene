import useThemeContext from 'libs/dana/src/foundations/theme/useThemeContext';
import {
    Children,
    cloneElement,
    HTMLAttributes,
    useRef,
    useState,
} from 'react';
import { ChevronRightIcon } from '../../../foundations/icons';
import { Props } from '../../../helpers/types';
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
} from './styles';

export interface SideNavMenuProps
    extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'>,
        Props {
    title: string;
    isActive?: boolean;
    /** Received from parent */
    activeColor?: string | null;
    /** Received from parent */
    hoverColor?: string | null;
    icon?: React.ReactElement;
    navigationChildren?: number;
    children: React.ReactElement | React.ReactElement[];
}

export const SideNavMenu = ({
    title,
    isActive = false,
    icon,
    activeColor = null,
    hoverColor = null,
    cssOverrides,
    children,
    /* from parent */
    navigationChildren = 0,
    ...props
}: SideNavMenuProps) => {
    const theme = useThemeContext();
    const navigationLevelRef = useRef(navigationChildren + 1);
    const [expanded, setExpanded] = useState(false);
    const collapse = () => setExpanded(false);
    const expand = () => setExpanded(true);

    const handleClick = () => {
        expanded ? collapse() : expand();
    };

    return (
        <li css={[navItem(theme), isActive && navItemActive(expanded)]}>
            <button
                type="button"
                aria-expanded={expanded}
                onClick={handleClick}
                css={[navMenuLink, cssOverrides]}
            >
                {icon &&
                    cloneElement(icon, {
                        size: 'small',
                        color: 'hsl(212, 20%, 68%)',
                    })}
                <span css={[navigationLevel(navigationChildren)]}>{title}</span>
                <div
                    css={[
                        navSubmenuIcon,
                        expanded ? chevronIconUp : chevronIconDown,
                    ]}
                >
                    <ChevronRightIcon size="small" />
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
