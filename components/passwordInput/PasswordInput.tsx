import { InputHTMLAttributes, useState } from 'react';

import { input, passwordInputWrapper, visibilityButton } from './styles';
import { SvgEye } from '../../icons/eye';
import { SvgEyeStrike } from '../../icons/eye-strike';
import { Label } from '../label';

export interface PasswordInputProps
  extends InputHTMLAttributes<HTMLSelectElement> {
  label: string;
}

export const PasswordInput = ({
  label: labelText,
  ...props
}: PasswordInputProps) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <Label text={labelText}>
      <div css={() => [passwordInputWrapper()]}>
        <input css={() => [input()]} type={visibility ? 'text' : 'password'} />

        <button
          css={() => [visibilityButton()]}
          onClick={() => setVisibility(!visibility)}
          aria-label="toogle visibility"
        >
          {visibility ? <SvgEyeStrike /> : <SvgEye />}
        </button>
      </div>
    </Label>
  );
};
