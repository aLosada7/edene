import {
    ChangeEventHandler,
    InputHTMLAttributes,
    useEffect,
    useState,
} from 'react';

import { input, numberInputWrapper, subtractButton, sumButton } from './styles';
import { MinusIcon, PlusIcon } from '../../../foundations/icons';
import { Label } from '../../label';
import { field } from '../input/styles';
import { generateSourceId } from 'libs/dana/src/foundations/accesibility';
import { FormInput } from '../input/types';
import { Props } from '../../../helpers';
import { SerializedStyles } from '@emotion/react';
import { Input } from '../input';
export interface NumberInputProps extends Props, FormInput {
    min?: number;
    max?: number;
    value?: number;
    error?: string;
    /**
     * Appears as an inline success message.
     * This prop should not have a value set at the same time as the error prop. In the event that both are set, errors take precedence.
     */
    success?: string;
    /**
     * The contents of the text area. This is necessary when using the [controlled approach](https://reactjs.org/docs/forms.html#controlled-components) to form state management.
     *
     * _Note: if you pass the `value` prop, you MUST also pass an `onChange` handler, or the field will be rendered as read-only._
     */
    onChange: (value: number) => void;
    /**
     * The contents of the text input field. This is necessary when using the [controlled approach](https://reactjs.org/docs/forms.html#controlled-components) to form state management.
     *
     * _Note: if you pass the `value` prop, you MUST also pass an `onChange` handler, or the field will be rendered as read-only_
     */
    cssLabelOverrides?: SerializedStyles | SerializedStyles[];
}

export const NumberInput = ({
    id,
    label: labelText,
    optional = false,
    max,
    min,
    error,
    success,
    onChange,
    cssOverrides,
    cssLabelOverrides,
    ...props
}: NumberInputProps) => {
    const textInputId = id || generateSourceId();

    const [value, setValue] = useState<number>(
        props.value ? (min && props.value < min ? min : props.value) : min || 0
    );

    useEffect(() => {
        onChange(value);
    }, [value]);

    const sum = () =>
        setValue(!max || (max && value < max) ? value + 1 : value);
    const subtract = () =>
        setValue(!min || (min && value > min) ? value - 1 : value);
    return (
        <div role="group" css={field}>
            {labelText && (
                <Label
                    text={labelText}
                    cssOverrides={cssLabelOverrides}
                ></Label>
            )}
            <div css={() => [numberInputWrapper()]}>
                <Input
                    type="number"
                    id={textInputId}
                    value={value}
                    optional={optional}
                    success={success}
                    error={error}
                    onChange={(event) => setValue(Number(event.target.value))}
                    css={[input, cssOverrides]}
                    min={min}
                    max={max}
                />

                <button
                    css={() => [subtractButton()]}
                    onClick={subtract}
                    aria-label="substract"
                >
                    <MinusIcon />
                </button>

                <button
                    css={() => [sumButton()]}
                    onClick={sum}
                    aria-label="sum"
                >
                    <PlusIcon />
                </button>
            </div>
        </div>
    );
};
