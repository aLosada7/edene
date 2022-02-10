import { InputHTMLAttributes, useState } from 'react';

import { input, numberInputWrapper, subtractButton, sumButton } from './styles';
import { SvgEye } from '../../icons/eye';
import { SvgEyeStrike } from '../../icons/eye-strike';
import { SvgMinus } from '../../icons/minus';
import { SvgPlus } from '../../icons/plus';
import { Label } from '../label';

export interface NumberInputProps
  extends InputHTMLAttributes<HTMLSelectElement> {
  label: string;
}

export const NumberInput = ({
  label: labelText,
  ...props
}: NumberInputProps) => {
  const [value, setValue] = useState(0);
  const sum = () => setValue(value + 1);
  const subtract = () => setValue(value - 1);
  return (
    <Label text={labelText}>
      <div css={() => [numberInputWrapper()]}>
        <input css={() => [input()]} type="number" value={value} />

        <button css={() => [sumButton()]} onClick={sum} aria-label="sum">
          <SvgPlus />
        </button>
        <button
          css={() => [subtractButton()]}
          onClick={subtract}
          aria-label="substract"
        >
          <SvgMinus />
        </button>
      </div>
    </Label>
  );
};
