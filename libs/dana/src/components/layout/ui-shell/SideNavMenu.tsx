import { SerializedStyles } from '@emotion/react';
import useThemeContext from 'libs/dana/src/foundations/theme/useThemeContext';
import {
    Children,
    cloneElement,
    HTMLAttributes,
    ReactElement,
    useState,
} from 'react';
import { SvgChevronRight } from '../../../foundations/icons';
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
} from './styles';

export interface SideNavMenuProps
    extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'>,
        Props {
    children: ReactElement[];
    title: string;
    isActive?: boolean;
    /** Received from parent */
    activeColor?: string | null;
    /** Received from parent */
    hoverColor?: string | null;
    cssOverrides?: SerializedStyles | SerializedStyles[];
    icon?: React.ReactElement;
}

export const SideNavMenu = ({
    title,
    isActive = false,
    icon,
    activeColor = null,
    hoverColor = null,
    cssOverrides,
    children,
    ...props
}: SideNavMenuProps) => {
    const theme = useThemeContext();
    const [expanded, setExpanded] = useState(false);
    const collapse = () => setExpanded(false);
    const expand = () => setExpanded(true);

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        expanded ? collapse() : expand();
    }

    return (
        <li
            css={[
                navItem(theme, isActive, activeColor, hoverColor),
                isActive && navItemActive(expanded),
            ]}
        >
            <button
                type="button"
                aria-expanded={expanded}
                onClick={handleClick}
                css={[navMenuLink, cssOverrides]}
            >
                {icon && cloneElement(icon, { size: 'large' })}
                <span>{title}</span>
                <div
                    css={[
                        navSubmenuIcon,
                        expanded ? chevronIconUp : chevronIconDown,
                    ]}
                >
                    <SvgChevronRight size="small" />
                </div>
            </button>
            <ul
                css={expanded ? expandedBody : collapsedBody}
                hidden={!expanded}
            >
                {Children.map(children, (child) => {
                    return cloneElement(child, { activeColor, hoverColor });
                })}
            </ul>
        </li>
    );
};
