import { box } from './styles';
import { BoxComponent, PBoxProps } from './types';

export const Box: BoxComponent = ((props: PBoxProps<'div'>) => {
    const {
        component: Element = 'div',
        children,
        css: cssOverrides,
        ...rest
    } = props;

    return (
        <Element css={[box(rest), cssOverrides]} {...rest}>
            {children}
        </Element>
    );
}) as BoxComponent;
