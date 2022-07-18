import { cloneElement, ReactElement } from 'react';

import { btnGroup } from './styles';
import { IButtonSize, IButtonBlock, IButtonVariant } from './Button';
import { Props } from '@edene/foundations';

export interface ButtonGroupProps extends Props {
    component?: 'footer';
    size?: IButtonSize | IButtonBlock;
    variant?: IButtonVariant;
    children: ReactElement | ReactElement[];
}

export function ButtonGroup({
    component,
    children,
    size,
    variant,
    cssOverrides,
    ...props
}: ButtonGroupProps) {
    const elementArgs = {
        ...(size ? { size } : {}),
        ...(variant ? { variant } : {}),
    };

    const Element = component || 'div';

    return (
        <Element css={[btnGroup(size), cssOverrides]} role="group" {...props}>
            {(Array.isArray(children) ? children : [children]).map((child) =>
                cloneElement(child, elementArgs)
            )}
        </Element>
    );
}

export default ButtonGroup;
