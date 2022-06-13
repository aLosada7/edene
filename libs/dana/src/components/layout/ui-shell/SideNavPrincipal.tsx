import React, { Children, cloneElement, ReactElement } from 'react';
import { sideNavPrincipal } from './styles';

export interface SideNavPrincipalProps {
    title: string;
    /** Received from parent */
    hideIcon?: boolean;
    /** Received from parent */
    activeColor?: string | null;
    /** Received from parent */
    hoverColor?: string | null;
    children: ReactElement | ReactElement[];
    cssOverrides?: any;
}
export const SideNavPrincipal = ({
    title,
    hideIcon = false,
    activeColor = null,
    hoverColor = null,
    children,
    cssOverrides,
}: SideNavPrincipalProps) => {
    return (
        <>
            <li css={[sideNavPrincipal, cssOverrides]}>
                <span>{title}</span>
            </li>
            {Children.map(children, (child) => {
                return cloneElement(child, {
                    hideIcon,
                    activeColor,
                    hoverColor,
                });
            })}
        </>
    );
};
