import { Input, Label } from '@dana';
import { SerializedStyles } from '@emotion/react';
import { generateSourceId } from '../../../foundations/accesibility';
import { FormInput } from '../input/types';
import { checkbox, checkboxInput } from './styles';

export interface CheckboxProps extends FormInput {
    checked?: boolean;
    onClick?: any;
    children: string;
    cssLabelOverrides?: SerializedStyles | SerializedStyles;
}

export const Checkbox = ({
    id,
    checked = false,
    optional = false,
    onClick,
    children,
    cssLabelOverrides,
    ...props
}: CheckboxProps) => {
    const textInputId = id || generateSourceId();

    return (
        <div role="group">
            <Label
                cssOverrides={
                    cssLabelOverrides ? [checkbox, cssLabelOverrides] : checkbox
                }
                text={children}
                optional={optional}
            >
                <Input
                    cssOverrides={checkboxInput}
                    type="checkbox"
                    id={textInputId}
                    optional={optional}
                    onClick={onClick}
                    checked={checked}
                />
            </Label>
        </div>
    );
};
