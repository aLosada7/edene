import { forwardRef, Fragment, InputHTMLAttributes } from 'react';
import { descriptionId, Props } from '@edene/foundations';

import { Icon } from '../../icons';
import { InlineError } from '../InlineFeedback/InlineError';
import { InlineSuccess } from '../InlineFeedback/InlineSuccess';
import {
    errorInput,
    iconLeftInInput,
    iconLeftInput,
    input as inputE,
    successInput,
} from './styles';

export interface InputProps
    extends InputHTMLAttributes<HTMLInputElement>,
        Props {
    id: string;

    /** The input type */
    type: string;
    /** Adds the word "Optional" after the label. Non-optional fields are rendered with the `required` attribute. */
    // optional?: boolean;

    /** Appears as an inline error message. */
    error?: string;

    /**
     * Appears as an inline success message.
     * This prop should not have a value set at the same time as the error prop. In the event that both are set, errors take precedence.
     */
    success?: string;

    /** Only for radio buttons */
    checked?: boolean;

    iconLeft?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (props: InputProps, ref) => {
        const { id, error, success, iconLeft, css, ...rest } = props;

        const Error = error ? <InlineError>{error}</InlineError> : null;
        const Success =
            !error && success ? <InlineSuccess>{success}</InlineSuccess> : null;

        return (
            <Fragment>
                {iconLeft && (
                    <div css={iconLeftInput}>
                        <Icon color="#adb5bd" variant="outlined">
                            {iconLeft}
                        </Icon>
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
                        iconLeft && iconLeftInInput,
                        css,
                    ]}
                    // aria-required={!optional}
                    aria-invalid={!!error}
                    aria-describedby={error || success ? descriptionId(id) : ''}
                    {...rest}
                />
                {Error}
                {Success}
            </Fragment>
        );
    }
);
