import React from 'react';
import { SerializedStyles } from '@emotion/react';

import { generateSourceId } from '../../foundations/accesibility';
import { FormGroup } from '../FormGroup';
import { FormInput } from '../Input/types';
import { checkbox, checkboxInput, checkboxLabel } from './styles';
import { useCheckboxGroup } from './useCheckboxGroup';
import { Input } from '../Input';
import { Label } from '../Label';

export interface CheckboxProps extends FormInput {
    checked?: boolean;
    // value?: (string | number)[];
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
    optional = false,
    label,
    cssLabelOverrides,
    ...props
}: CheckboxProps) => {
    const textInputId = id || generateSourceId();
    const group = useCheckboxGroup();

    const Wrapper = ({ children }: { children: React.ReactNode }) =>
        group.isGroup ? <>{children}</> : <FormGroup>{children}</FormGroup>;

    return (
        <Wrapper>
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
                        type="checkbox"
                        cssOverrides={checkboxInput}
                        id={textInputId}
                        {...props}
                    ></Input>
                </Label>
            </div>
        </Wrapper>
    );
};
