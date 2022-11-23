import { SerializedStyles } from '@emotion/react';

import { generateSourceId } from '@edene/foundations';

import { FormGroup } from '../FormGroup';
import { FormInput } from '../Input/types';
import { checkbox, checkboxInput, checkboxLabel } from './styles';
import { useCheckboxGroup } from './useCheckboxGroup';
import { Input } from '../Input';
import { Label } from '../Label';

export interface CheckboxProps extends Omit<FormInput, 'label'> {
    checked?: boolean;

    value?: string;

    onChange?: any;

    onClick?: any;

    label: string;

    cssLabelOverrides?: SerializedStyles | SerializedStyles;
}

export const Checkbox = (props: CheckboxProps) => {
    const { id, label, cssLabelOverrides, ...rest } = props;
    const textInputId = id || generateSourceId();
    const { onChange, isGroup } = useCheckboxGroup();

    const Wrapper = isGroup ? FormGroup : 'div';

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
                    htmlFor={textInputId}
                >
                    <Input
                        type="checkbox"
                        cssOverrides={checkboxInput}
                        id={textInputId}
                        onClick={onChange}
                        onChange={props.onChange}
                        {...rest}
                    ></Input>
                </Label>
            </div>
        </Wrapper>
    );
};
