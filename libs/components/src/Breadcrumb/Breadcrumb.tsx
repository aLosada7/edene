import { Children, cloneElement, ReactElement } from 'react';
import { Props } from '@edene/foundations';

import { breadcrumb } from './styles';

export interface BreadcrumbProps extends Props {
    children: ReactElement | ReactElement[];
}

export const Breadcrumb = ({
    cssOverrides,
    children,
    ...props
}: BreadcrumbProps) => (
    <ol css={[breadcrumb, cssOverrides]} {...props}>
        {Children.map(children, (child) => {
            return cloneElement(child, {});
        })}
    </ol>
);
