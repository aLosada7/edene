import { InputHTMLAttributes, useState, useEffect } from 'react';

import { input, numberInputWrapper, subtractButton, sumButton } from './styles';
import { SvgMinus, SvgPlus } from '../../../foundations/icons';
import { Label } from '../../label';

export interface NumberInputProps
    extends InputHTMLAttributes<HTMLSelectElement> {
    label: string;
    min?: number;
    max?: number;
    value?: number;
}

export const NumberInput = ({
    label: labelText,
    max,
    min,
    ...props
}: NumberInputProps) => {
    const [value, setValue] = useState(
        props.value ? (min && props.value < min ? min : props.value) : min || 1
    );

    const sum = () =>
        setValue(!max || (max && value < max) ? value + 1 : value);
    const subtract = () =>
        setValue(!min || (min && value > min) ? value - 1 : value);
    return (
        <div>
            <Label text={labelText}></Label>
            <div css={() => [numberInputWrapper()]}>
                <input
                    css={() => [input()]}
                    type="number"
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                />

                <button
                    css={() => [subtractButton()]}
                    onClick={subtract}
                    aria-label="substract"
                >
                    <SvgMinus />
                </button>

                <button
                    css={() => [sumButton()]}
                    onClick={sum}
                    aria-label="sum"
                >
                    <SvgPlus />
                </button>
            </div>
        </div>
    );
};
