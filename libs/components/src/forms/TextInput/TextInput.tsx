import { forwardRef, InputHTMLAttributes } from 'react';
import { SerializedStyles } from '@emotion/react';

import { Label } from '../Label';
import { Props, generateSourceId } from '@edene/foundations';
import { Input } from '../Input';
import { FormInput } from '../Input/types';
import { FormGroup } from '../FormGroup';

export interface TextInputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'>,
        FormInput,
        Props {
    /**
     * The contents of the text input field. This is necessary when using the [controlled approach](https://reactjs.org/docs/forms.html#controlled-components) to form state management.
     *
     * _Note: if you pass the `value` prop, you MUST also pass an `onChange` handler, or the field will be rendered as read-only_
     */
    value?: string;

    iconLeft?: string;

    cssLabelOverrides?: SerializedStyles | SerializedStyles[];
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    (props: TextInputProps, ref) => {
        const {
            id,
            label: labelText,
            onChange,
            cssOverrides,
            cssLabelOverrides,
            ...rest
        } = props;

        const textInputId = id || generateSourceId();

        const label = labelText && (
            <Label
                htmlFor={textInputId}
                text={labelText}
                cssOverrides={cssLabelOverrides}
            />
        );

        return (
            <FormGroup>
                {label}
                <Input
                    type="text"
                    ref={ref}
                    id={textInputId}
                    onChange={onChange}
                    css={[cssOverrides]}
                    {...rest}
                />
            </FormGroup>
        );
    }
);