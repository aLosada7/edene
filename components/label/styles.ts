import { css } from '@emotion/react';

import { labelDefault } from '../../core/themes/label';
import { textSans } from '../../core/typography/api';

export const labelText = ({ label } = labelDefault) => css`
  ${textSans.medium({ fontWeight: 'bold', lineHeight: 'regular' })};
  color: ${label.textLabel};
`;

export const optionalText = ({ label } = labelDefault) => css`
  ${textSans.small({ lineHeight: 'regular' })};
  color: ${label.textOptional};
  font-style: italic;
`;

export const supportingText = ({ label } = labelDefault) => css`
  ${textSans.small({ lineHeight: 'regular' })};
  color: ${label.textSupporting};
  margin: 2px 0 0;
`;
