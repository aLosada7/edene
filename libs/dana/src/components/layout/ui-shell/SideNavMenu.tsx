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
    sidenavIcon,
} from './styles';

export interface SideNavMenuProps
    extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'>,
        Props {
    children: ReactElement[];
    title: string;
    isActive?: boolean;
    icon?: React.ReactElement;
}

export const SideNavMenu = ({
    children,
    title,
    isActive = false,
    icon,
    ...props
}: SideNavMenuProps) => {
    const [expanded, setExpanded] = useState(false);
    const collapse = () => setExpanded(false);
    const expand = () => setExpanded(true);

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        expanded ? collapse() : expand();
    }

    return (
        <li css={[navItem, isActive ? navItemActive(expanded) : null]}>
            <button
                type="button"
                aria-expanded={expanded}
                onClick={handleClick}
                css={[navMenuLink]}
            >
                {icon ? (
                    <div css={sidenavIcon}>
                        {cloneElement(icon, { size: 'large' })}
                    </div>
                ) : null}
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
                    return cloneElement(child, {});
                })}
            </ul>
        </li>
    );
};
