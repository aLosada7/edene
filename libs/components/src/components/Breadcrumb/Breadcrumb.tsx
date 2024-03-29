import { ReactNode } from 'react';
import { Props } from '@edene/foundations';

import { breadcrumb } from './styles';

export interface BreadcrumbProps extends Props {
    children: ReactNode;
}

export const Breadcrumb = (props: BreadcrumbProps) => {
    const { children, css, ...rest } = {
        ...props,
    };

    return (
        <ol css={[breadcrumb, css]} {...rest}>
            {children}
        </ol>
    );
};
