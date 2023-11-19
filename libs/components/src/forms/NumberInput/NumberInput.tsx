import { forwardRef, InputHTMLAttributes, useEffect, useState } from 'react';
import { generateSourceId,Props } from '@edene/foundations';
import { SerializedStyles } from '@emotion/react';

import { Button } from '../../components/Button';
import { Icon } from '../../icons';
import { FormGroup } from '../FormGroup';
import { Label } from '../Label';
import {
    numberInputValue,
    numberInputWrapper,
    operationButton,
} from './styles';

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

    cssLabel?: SerializedStyles | SerializedStyles[];
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
            css,
            cssLabel,
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
                css={cssLabel}
            ></Label>
        );

        return (
            <FormGroup>
                {label}
                <div css={[numberInputWrapper, css]} {...rest}>
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
