import { forwardRef, InputHTMLAttributes, useEffect, useState } from 'react';
import { SerializedStyles } from '@emotion/react';

import { Props, generateSourceId } from '@edene/foundations';

import { Icon } from '../../icons';
import {
    numberInputWrapper,
    operationButton,
    numberInputValue,
} from './styles';
import { Label } from '../Label';
import { FormGroup } from '../FormGroup';
import { Button } from '../../components/Button';

export interface NumberInputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>,
        Props {
    labelText?: string;

    min?: number;

    max?: number;

    step: number;

    value?: number;

    /**
     * The contents of the text area. This is necessary when using the [controlled approach](https://reactjs.org/docs/forms.html#controlled-components) to form state management.
     * _Note: if you pass the `value` prop, you MUST also pass an `onChange` handler, or the field will be rendered as read-only._
     */
    onChange?: (value: number) => void;

    cssLabelOverrides?: SerializedStyles | SerializedStyles[];
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
    (props: NumberInputProps, ref) => {
        const {
            id,
            labelText,
            step,
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
            if (onChange) onChange(value);
        }, [value]);

        const sum = () =>
            setValue(!max || (max && value < max) ? value + step : value);
        const subtract = () =>
            setValue(!min || (min && value > min) ? value - step : value);

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
                <div css={[numberInputWrapper, cssOverrides]}>
                    <Button
                        variant="outlined"
                        size="xsmall"
                        onClick={subtract}
                        css={operationButton}
                        aria-label="substract"
                        disabled={min ? value - step < min : false}
                    >
                        <Icon>remove</Icon>
                    </Button>
                    <div ref={ref} css={numberInputValue}>
                        {value}
                    </div>
                    <Button
                        variant="outlined"
                        size="xsmall"
                        onClick={sum}
                        css={operationButton}
                        aria-label="sum"
                        disabled={max ? value + step > max : false}
                    >
                        <Icon>add</Icon>
                    </Button>
                </div>
            </FormGroup>
        );
    }
);
