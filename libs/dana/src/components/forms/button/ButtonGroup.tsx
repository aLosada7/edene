import { IButtonSize } from '../../../foundations/size';
import { cloneElement } from 'react';
import { btnGroup } from './styles';
import { IButtonBlock, IButtonVariant } from './Button';

export interface ButtonGroupProps {
    size?: IButtonSize | IButtonBlock;
    variant?: IButtonVariant;
    children: React.ReactElement[];
}

export function ButtonGroup({
    children,
    size,
    variant,
    ...props
}: ButtonGroupProps) {
    const elementArgs = {
        ...(size ? { size } : {}),
        ...(variant ? { variant } : {}),
    };

    return (
        <div css={btnGroup} role="group">
            {children.map((child) => cloneElement(child, elementArgs))}
        </div>
    );
}

export default ButtonGroup;
