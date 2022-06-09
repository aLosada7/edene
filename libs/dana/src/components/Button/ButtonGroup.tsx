import { IButtonSize } from '../../foundations/size';
import { cloneElement, ReactElement } from 'react';
import { btnGroup } from './styles';
import { IButtonBlock, IButtonVariant } from './Button';
import { SerializedStyles } from '@emotion/react';

export interface ButtonGroupProps {
    as?: 'footer';
    size?: IButtonSize | IButtonBlock;
    variant?: IButtonVariant;
    children: ReactElement | ReactElement[];
    cssOverrides?: SerializedStyles | SerializedStyles[];
}

export function ButtonGroup({
    as,
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

    const Element = as || 'div';

    return (
        <Element css={[btnGroup(size), cssOverrides]} role="group">
            {(Array.isArray(children) ? children : [children]).map((child) =>
                cloneElement(child, elementArgs)
            )}
        </Element>
    );
}

export default ButtonGroup;
