import { box } from './styles';
import { BoxComponent, PBoxProps } from './types';

export const Box: BoxComponent = (({
    as: Element = 'div',
    children,
    css,
    ...props
}: PBoxProps<'div'>) => (
    <Element css={[box(props), css]} {...props}>
        {children}
    </Element>
)) as BoxComponent;
