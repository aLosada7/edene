import { css } from '@emotion/react';
import { visuallyHidden as _visuallyHidden } from '../../core/accesibility';
import { ReactNode } from 'react';
import { supportingText } from './styles';

const visuallyHidden = css`
  ${_visuallyHidden}
`;

export const SupportingText = ({
  hideLabel,
  children,
}: {
  hideLabel?: boolean;
  children: ReactNode;
}) => {
  return (
    <p css={[supportingText(), hideLabel ? visuallyHidden : '']}>{children}</p>
  );
};
