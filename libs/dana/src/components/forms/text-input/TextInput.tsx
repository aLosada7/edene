import { ChangeEventHandler, InputHTMLAttributes } from 'react';
import { SerializedStyles } from '@emotion/react';

import {
    inlineMessage,
    successMessage,
    errorMessage,
    width10,
    width30,
    width4,
    widthFluid,
} from './styles';
import { Label } from '../../label';
import { Props } from '../../../helpers';
import {
    descriptionId,
    generateSourceId,
} from '../../../foundations/accesibility';
import { SvgCaution, SvgSuccess } from '../../../foundations/icons';
import { text } from '../../../foundations/palette';
import { Text } from '../../text';
import { Input } from '../..';
import { field } from '../input/styles';
import { FormInput } from '../input/types';

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
    leftIcon?: JSX.Element;
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
    error,
    success,
    leftIcon,
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
        >
            {error && (
                <Text
                    icon={<SvgCaution size="xsmall" color={text.error} />}
                    cssOverrides={[errorMessage, inlineMessage]}
                >
                    <span id={descriptionId(textInputId)}>{error}</span>
                </Text>
            )}
            {!error && success && (
                <Text
                    icon={<SvgSuccess size="xsmall" color={text.success} />}
                    cssOverrides={[successMessage, inlineMessage]}
                >
                    <span id={descriptionId(textInputId)}>{success}</span>
                </Text>
            )}
        </Label>
    ) : null;

    return (
        <div role="group" css={field}>
            {label}
            <Input
                type="text"
                id={textInputId}
                optional={optional}
                success={success}
                error={error}
                leftIcon={leftIcon}
                onChange={onChange}
                css={(theme: any) => [
                    width ? widths[width] : widthFluid,
                    cssOverrides,
                ]}
            />
        </div>
    );
};
