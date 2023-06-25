import { PolymorphicComponentProps, Props } from '@edene/foundations';
import { ReactNode } from 'react';

export interface LinkProps extends Props {
    children: ReactNode;
}

export type PLinkProps<C> = PolymorphicComponentProps<C, LinkProps>;

type LinkComponent = <C = 'a'>(props: PLinkProps<C>) => React.ReactElement;

const Link: LinkComponent = ({
    as: Component = 'a',
    children,
    css,
    ...props
}) => (
    <Component css={css} {...props}>
        {children}
    </Component>
);

export default Link;
