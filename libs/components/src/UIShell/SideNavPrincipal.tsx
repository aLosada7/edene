import { Children, cloneElement, Fragment, ReactElement } from 'react';

import { useThemeContext, Props } from '@edene/foundations';

import { sideNavPrincipal } from './styles';

export interface SideNavPrincipalProps extends Props {
    title: string;
    /** Received from parent */
    hideIcon?: boolean;
    /** Received from parent */
    activeColor?: string | null;
    /** Received from parent */
    hoverColor?: string | null;
    children: ReactElement | ReactElement[];
}
export const SideNavPrincipal = ({
    title,
    hideIcon = false,
    activeColor = null,
    hoverColor = null,
    children,
    cssOverrides,
}: SideNavPrincipalProps) => {
    const { theme } = useThemeContext();

    return (
        <Fragment>
            <li css={[sideNavPrincipal(theme), cssOverrides]}>
                <span>{title}</span>
            </li>
            {Children.map(children, (child) => {
                return cloneElement(child, {
                    hideIcon,
                    activeColor,
                    hoverColor,
                });
            })}
        </Fragment>
    );
};
