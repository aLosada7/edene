import React, { forwardRef, useCallback } from 'react';
import { InputHTMLAttributes } from 'react';
import { descriptionId } from '../../foundations/accesibility';
import { Props } from '../../helpers';
import { InlineError } from '../InlineFeedback/InlineError';
import { InlineSuccess } from '../InlineFeedback/InlineSuccess';
import {
    inputWrapper,
    input as inputE,
    errorInput,
    successInput,
    leftIconInput,
    leftIconInInput,
} from './styles';
import { MaterialIcon } from '@dana-icons';

export interface InputProps
    extends InputHTMLAttributes<HTMLInputElement>,
        Props {
    id: string;
    /** The input type */
    type: string;
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
    leftIcon?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (props: InputProps, ref) => {
        const {
            id,
            optional = false,
            error,
            success,
            leftIcon,
            cssOverrides,
            ...rest
        } = props;

        const Error = error ? <InlineError>{error}</InlineError> : null;
        const Success =
            !error && success ? <InlineSuccess>{success}</InlineSuccess> : null;

        return (
            <>
                {leftIcon && (
                    <div css={leftIconInput}>
                        <MaterialIcon>{leftIcon}</MaterialIcon>
                    </div>
                )}
                <input
                    id={id}
                    ref={ref}
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
                    aria-required={!optional}
                    aria-invalid={!!error}
                    aria-describedby={error || success ? descriptionId(id) : ''}
                    {...rest}
                />
                {Error}
                {Success}
            </>
        );
    }
);
