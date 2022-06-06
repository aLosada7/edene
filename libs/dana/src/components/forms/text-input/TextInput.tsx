import { ChangeEventHandler, InputHTMLAttributes } from 'react';
import { SerializedStyles } from '@emotion/react';

import { width10, width30, width4, widthFluid } from './styles';
import { Label } from '../../label';
import { Props } from '../../../helpers';
import { generateSourceId } from '../../../foundations/accesibility';
import { Input } from '../../forms/input';
import { FormInput } from '../input/types';
import { FormGroup } from '../../FormGroup';

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
        Props,
        FormInput {
    /**
     * Determines the width of a fixed-length field, based on the specified character length of the user input. If unspecified,
     * the width will default to 100% of the field's container.
     */
    width?: Width;
    /**
     * Appears as an inline error message.
     */
    error?: string;
    /**
     * Appears as an inline success message.
     * This prop should not have a value set at the same time as the error prop. In the event that both are set, errors take precedence.
     */
    success?: string;
    /**
     * The contents of the text input field. This is necessary when using the [controlled approach](https://reactjs.org/docs/forms.html#controlled-components) to form state management.
     *
     * _Note: if you pass the `value` prop, you MUST also pass an `onChange` handler, or the field will be rendered as read-only_
     */
    value?: string;
    leftIcon?: string;
    /**
     * The contents of the text area. This is necessary when using the [controlled approach](https://reactjs.org/docs/forms.html#controlled-components) to form state management.
     *
     * _Note: if you pass the `value` prop, you MUST also pass an `onChange` handler, or the field will be rendered as read-only._
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    cssLabelOverrides?: SerializedStyles | SerializedStyles[];
}

export const TextInput = ({
    id,
    label: labelText,
    optional = false,
    width,
    onChange,
    cssOverrides,
    cssLabelOverrides,
    ...props
}: TextInputProps) => {
    const textInputId = id || generateSourceId();

    const label = labelText ? (
        <Label
            cssOverrides={cssLabelOverrides}
            text={labelText}
            optional={optional}
        />
    ) : null;

    return (
        <FormGroup>
            {label}
            <Input
                type="text"
                id={textInputId}
                optional={optional}
                onChange={onChange}
                css={(theme: any) => [
                    width ? widths[width] : widthFluid,
                    cssOverrides,
                ]}
                {...props}
            />
        </FormGroup>
    );
};
