import { SerializedStyles } from '@emotion/react';
import React, { Children, cloneElement } from 'react';
import { sideNavPrincipal } from './styles';

export interface SideNavPrincipalProps {
    title: string;
    /** Received from parent */
    hideIcon?: boolean;
    /** Received from parent */
    activeColor?: string | null;
    /** Received from parent */
    hoverColor?: string | null;
    children: JSX.Element[];
    cssOverrides?: any;
}
export const SideNavPrincipal = ({
    title,
    hideIcon = false,
    activeColor = null,
    hoverColor = null,
    children,
    cssOverrides,
    ...props
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
