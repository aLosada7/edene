import { HTMLAttributes } from 'react';
import { Props } from '../../helpers';
import { breadcrumbItem, breadcrumbItemLink } from './styles';

export interface BreadcrumbItemProps
  extends HTMLAttributes<HTMLDivElement>,
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
  <li css={breadcrumbItem({ active })}>
    {!active && href ? (
      <a css={breadcrumbItemLink} href={href}>
        {children}
      </a>
    ) : (
      <span>{children}</span>
    )}
  </li>
);
