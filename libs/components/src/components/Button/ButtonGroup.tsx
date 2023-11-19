import { cloneElement } from 'react';

import { ButtonGroupProps } from '.';
import { btnGroup } from './styles';

export function ButtonGroup({
    children,
    size,
    variant,
    css,
    ...props
}: ButtonGroupProps) {
    const elementArgs = {
        ...(size ? { size } : {}),
        ...(variant ? { variant } : {}),
    };

    return (
        <div role="group" css={[btnGroup(size), css]} {...props}>
            {(Array.isArray(children) ? children : [children]).map((child) =>
                cloneElement(child, elementArgs)
            )}
        </div>
    );
}

export default ButtonGroup;
