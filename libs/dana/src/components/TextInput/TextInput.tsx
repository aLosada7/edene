import { forwardRef, InputHTMLAttributes } from 'react';
import { SerializedStyles } from '@emotion/react';

import { width10, width30, width4, widthFluid } from './styles';
import { Label } from '../label';
import { Props } from '../../helpers';
import { generateSourceId } from '../../foundations/accesibility';
import { Input } from '../Input';
import { FormInput } from '../Input/types';
import { FormGroup } from '../FormGroup';

export type Width = 30 | 10 | 4;

const widths: {
    [key in Width]: SerializedStyles;
} = {
    30: width30,
    10: width10,
    4: width4,
};

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
    /**
     * Determines the width of a fixed-length field, based on the specified character length of the user input. If unspecified,
     * the width will default to 100% of the field's container.
     */
    width?: Width;
    leftIcon?: string;
    cssLabelOverrides?: SerializedStyles | SerializedStyles[];
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    (props: TextInputProps, ref) => {
        const {
            id,
            label: labelText,
            optional = false,
            width,
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
                optional={optional}
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
                    optional={optional}
                    onChange={onChange}
                    css={[width ? widths[width] : widthFluid, cssOverrides]}
                    {...rest}
                />
            </FormGroup>
        );
    }
);
