import { forwardRef, InputHTMLAttributes, useEffect, useState } from 'react';

import { input, numberInputWrapper, subtractButton, sumButton } from './styles';
import { MinusIcon, PlusIcon } from '../../foundations/icons';
import { Label } from '../label';
import { generateSourceId } from 'libs/dana/src/foundations/accesibility';
import { FormInput } from '../Input/types';
import { Props } from '../../helpers';
import { SerializedStyles } from '@emotion/react';
import { Input } from '../Input';
import { FormGroup } from '../FormGroup';
export interface NumberInputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>,
        FormInput,
        Props {
    min?: number;
    max?: number;
    value?: number;
    /**
     * The contents of the text area. This is necessary when using the [controlled approach](https://reactjs.org/docs/forms.html#controlled-components) to form state management.
     *
     * _Note: if you pass the `value` prop, you MUST also pass an `onChange` handler, or the field will be rendered as read-only._
     */
    onChange: (value: number) => void;
    cssLabelOverrides?: SerializedStyles | SerializedStyles[];
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
    (props: NumberInputProps, ref) => {
        const {
            id,
            label: labelText,
            optional = false,
            max,
            min,
            onChange,
            cssOverrides,
            cssLabelOverrides,
            ...rest
        } = props;

        const numberInputId = id || generateSourceId();

        const [value, setValue] = useState<number>(
            rest.value ? (min && rest.value < min ? min : rest.value) : min || 0
        );

        useEffect(() => {
            onChange(value);
        }, [value]);

        const sum = () =>
            setValue(!max || (max && value < max) ? value + 1 : value);
        const subtract = () =>
            setValue(!min || (min && value > min) ? value - 1 : value);

        const label = labelText && (
            <Label
                htmlFor={numberInputId}
                text={labelText}
                cssOverrides={cssLabelOverrides}
            ></Label>
        );

        return (
            <FormGroup>
                {label}
                <div css={() => [numberInputWrapper()]}>
                    <Input
                        type="number"
                        id={numberInputId}
                        value={value}
                        onChange={(event) =>
                            setValue(Number(event.target.value))
                        }
                        css={[input, cssOverrides]}
                        min={min}
                        max={max}
                        ref={ref}
                        {...rest}
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
            </FormGroup>
        );
    }
);
