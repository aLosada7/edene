import { SerializedStyles } from '@emotion/react';
import { generateSourceId } from '../../../foundations/accesibility';
import { FormGroup } from '../../FormGroup';
import { Label } from '../../label';
import { Input } from '../input';
import { FormInput } from '../input/types';
import { checkbox, checkboxInput, checkboxLabel } from './styles';

export interface CheckboxProps extends FormInput {
    checked?: boolean;
    onClick?: any;
    /**
     * Appears as an inline error message.
     */
    error?: string;
    /**
     * Appears as an inline success message.
     * This prop should not have a value set at the same time as the error prop. In the event that both are set, errors take precedence.
     */
    success?: string;
    label: string;
    cssLabelOverrides?: SerializedStyles | SerializedStyles;
}

export const Checkbox = ({
    id,
    checked = false,
    optional = false,
    onClick,
    label,
    cssLabelOverrides,
    ...props
}: CheckboxProps) => {
    const textInputId = id || generateSourceId();

    return (
        <FormGroup>
            <div css={checkbox}>
                <Label
                    cssOverrides={
                        cssLabelOverrides
                            ? [checkboxLabel, cssLabelOverrides]
                            : checkboxLabel
                    }
                    text={label}
                    optional={optional}
                    htmlFor={textInputId}
                >
                    <Input
                        cssOverrides={checkboxInput}
                        type="checkbox"
                        id={textInputId}
                        optional={optional}
                        onClick={onClick}
                        checked={checked}
                        {...props}
                    ></Input>
                </Label>
            </div>
        </FormGroup>
    );
};
