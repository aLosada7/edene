import { HTMLAttributes } from 'react';

import { Props } from '@edene/foundations';

import { breadcrumbItem, breadcrumbItemLink } from './styles';

export interface BreadcrumbItemProps
    extends HTMLAttributes<HTMLLIElement>,
        Props {
    /**
     * Url to redirect
     **/
    href?: string;
    /**
     * If the user is currently in this page
     **/
    active?: boolean;
}

export const BreadcrumbItem = ({
    href,
    active = false,
    cssOverrides,
    children,
    ...props
}: BreadcrumbItemProps) => (
    <li css={[breadcrumbItem({ active }), cssOverrides]} {...props}>
        {!active && href ? (
            <a css={breadcrumbItemLink} href={href}>
                {children}
            </a>
        ) : (
            <span>{children}</span>
        )}
    </li>
);
