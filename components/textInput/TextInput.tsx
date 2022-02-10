import { InputHTMLAttributes } from 'react';
import { SerializedStyles } from '@emotion/react';

import {
  inlineMessageMargin,
  textInput,
  width10,
  width30,
  width4,
  widthFluid,
} from './styles';
import { Label } from '../label';
import { Props } from '../../helpers';
import { descriptionId, generateSourceId } from '../../core/accesibility';

export type Width = 30 | 10 | 4;

const widths: {
  [key in Width]: SerializedStyles;
} = {
  30: width30,
  10: width10,
  4: width4,
};

export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'>,
    Props {
  id?: string;
  /**
   * Appears above the text input
   */
  label: string;
  /**
   * Adds the word "Optional" after the label. Non-optional fields are rendered with the `required` attribute.
   */
  optional?: boolean;
  /**
   * Determines the width of a fixed-length field, based on the specified character length of the user input. If unspecified,
   * the width will default to 100% of the field's container.
   */
  width?: Width;
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
   * The contents of the text input field. This is necessary when using the [controlled approach](https://reactjs.org/docs/forms.html#controlled-components) to form state management.
   *
   * _Note: if you pass the `value` prop, you MUST also pass an `onChange` handler, or the field will be rendered as read-only_
   */
  value?: string;
}

export const TextInput = ({
  id,
  label: labelText,
  optional = false,
  width,
  error,
  success,
  cssOverrides,
  ...props
}: TextInputProps) => {
  const textInputId = id || generateSourceId();
  return (
    <Label text={labelText}>
      {error && (
        <div css={inlineMessageMargin}>
          <span id={descriptionId(textInputId)}>{error}</span>
        </div>
      )}
      {!error && success && (
        <div css={inlineMessageMargin}>
          <span id={descriptionId(textInputId)}>{success}</span>
        </div>
      )}
      <input
        css={(theme: any) => [
          width ? widths[width] : widthFluid,
          textInput(theme.textInput && theme),
          cssOverrides,
        ]}
        type="text"
        id={textInputId}
        aria-required={!optional}
        aria-invalid={!!error}
        aria-describedby={error || success ? descriptionId(textInputId) : ''}
        required={!optional}
        {...props}
      />
    </Label>
  );
};
