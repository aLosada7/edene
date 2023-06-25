import { cloneElement, ReactElement } from 'react';

import { Props, ButtonSize, ButtonVariant } from '@edene/foundations';

import { btnGroup } from './styles';
import { IButtonBlock } from './Button';

export interface ButtonGroupProps extends Props {
    component?: 'footer';
    size?: ButtonSize | IButtonBlock;
    variant?: ButtonVariant;
    children: ReactElement | ReactElement[];
}

export function ButtonGroup(props: ButtonGroupProps) {
    const { component, children, size, variant, css, ...rest } = props;
    const elementArgs = {
        ...(size ? { size } : {}),
        ...(variant ? { variant } : {}),
    };

    const Element = component || 'div';

    return (
        <Element css={[btnGroup(size), css]} role="group" {...rest}>
            {(Array.isArray(children) ? children : [children]).map((child) =>
                cloneElement(child, elementArgs)
            )}
        </Element>
    );
}

export default ButtonGroup;
