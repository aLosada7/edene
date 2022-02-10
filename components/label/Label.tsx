import { SerializedStyles } from '@emotion/react';
import { LabelHTMLAttributes, ReactNode } from 'react';
import { Props } from '../../helpers';
import { SupportingText } from './SupportingText';
import { Text } from './Text';

export interface LabelProps
  extends LabelHTMLAttributes<HTMLLabelElement>,
    Props {
  /**
   * The label text
   */
  text: string;
  /**
   * Additional text or component that appears below the label
   */
  supporting?: string;
  /**
   * Adds the word "Optional" after the label
   */
  optional?: boolean;
  /**
   * Visually hides the label
   */
  hideLabel?: boolean;
  cssOverrides?: SerializedStyles | SerializedStyles[];
  children?: ReactNode;
}

export const Label = ({
  text,
  supporting,
  optional = false,
  hideLabel = false,
  cssOverrides,
  children,
  ...props
}: LabelProps) => {
  return (
    <label css={cssOverrides} {...props}>
      <Text hideLabel={hideLabel} text={text} optional={optional} />
      {supporting ? (
        <SupportingText hideLabel={hideLabel}>{supporting}</SupportingText>
      ) : (
        ''
      )}
      {children}
    </label>
  );
};
