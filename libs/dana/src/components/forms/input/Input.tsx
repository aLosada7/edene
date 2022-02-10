import React, { ChangeEventHandler, cloneElement } from 'react';
import { InputHTMLAttributes } from 'react';
import { descriptionId } from '../../../foundations/accesibility';
import { Props } from '../../../helpers';
import {
    errorInput,
    input as inputE,
    successInput,
    leftIconInput,
    leftIconInInput,
} from './styles';

export interface InputProps
    extends InputHTMLAttributes<HTMLInputElement>,
        Props {
    id: string;
    /**
     * Adds the word "Optional" after the label. Non-optional fields are rendered with the `required` attribute.
     */
    optional?: boolean;
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
     * Only for radio buttons
     */
    checked?: boolean;
    /**
     * The contents of the text area. This is necessary when using the [controlled approach](https://reactjs.org/docs/forms.html#controlled-components) to form state management.
     *
     * _Note: if you pass the `value` prop, you MUST also pass an `onChange` handler, or the field will be rendered as read-only._
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    leftIcon?: JSX.Element;
}

export const Input = ({
    id,
    value,
    checked = undefined,
    optional = false,
    error,
    success,
    onChange,
    leftIcon,
    cssOverrides,
    ...props
}: InputProps) => {
    return (
        <>
            {leftIcon ? (
                <span css={leftIconInput}>
                    {cloneElement(leftIcon, {
                        size: 'medium',
                    })}
                </span>
            ) : null}
            <input
                type="text"
                css={[
                    inputE,
                    success || error
                        ? success
                            ? successInput
                            : errorInput
                        : null,
                    leftIcon ? leftIconInInput : null,
                    cssOverrides,
                ]}
                id={id}
                value={value}
                aria-required={!optional}
                aria-invalid={!!error}
                aria-describedby={error || success ? descriptionId(id) : ''}
                checked={checked}
                onChange={onChange}
                {...props}
            />
        </>
    );
};
