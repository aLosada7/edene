import { Children, cloneElement, ReactElement } from 'react';
import { Props } from '../../helpers';

import { breadcrumb } from './styles';

export interface BreadcrumbProps extends Props {
    children: ReactElement | ReactElement[];
}

export const Breadcrumb = ({
    cssOverrides,
    children,
    ...props
}: BreadcrumbProps) => (
    <nav {...props}>
        <ol css={breadcrumb}>
            {Children.map(children, (child) => {
                return cloneElement(child, {});
            })}
        </ol>
    </nav>
);
