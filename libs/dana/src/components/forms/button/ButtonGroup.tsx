import { cloneElement } from 'react';
import { btnGroup } from './styles';

export type IButtonGroupVariant = 'basic' | 'outline';

export interface ButtonGroupProps {
    variant?: IButtonGroupVariant;
    children: React.ReactElement[];
}

export function ButtonGroup({ children, variant, ...props }: ButtonGroupProps) {
    return (
        <div css={btnGroup} role="group">
            {children.map((child) => cloneElement(child, { variant }))}
        </div>
    );
}

export default ButtonGroup;
