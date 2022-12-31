import { SerializedStyles } from '@emotion/react';
import { generateSourceId, Props } from '@edene/foundations';

import { FormGroup } from '../FormGroup';
import { FormInput } from '../Input/types';
import { checkboxInput, checkboxLabel } from './styles';
import { useCheckboxGroup } from './useCheckboxGroup';
import { Input } from '../Input';
import { Label } from '../Label';

export interface CheckboxProps extends Omit<FormInput, 'label'>, Props {
    checked?: boolean;

    value?: string;

    onChange?: any;

    onClick?: any;

    label?: string;

    cssLabel?: SerializedStyles | SerializedStyles;
}

export const Checkbox = (props: CheckboxProps) => {
    const { id, label, css: cssOverrides, cssLabel, ...rest } = props;
    const textInputId = id || generateSourceId();
    const { onChange, isGroup } = useCheckboxGroup();

    const Wrapper = isGroup ? FormGroup : 'div';

    const InputComponent = (
        <Input
            type="checkbox"
            css={[checkboxInput(!!label), cssOverrides] as SerializedStyles[]}
            id={textInputId}
            onClick={onChange}
            onChange={props.onChange}
            {...rest}
        ></Input>
    );

    return (
        <Wrapper>
            {label ? (
                <Label
                    css={cssLabel ? [checkboxLabel, cssLabel] : checkboxLabel}
                    text={label}
                    htmlFor={textInputId}
                >
                    {InputComponent}
                </Label>
            ) : (
                InputComponent
            )}
        </Wrapper>
    );
};
