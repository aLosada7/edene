import { css } from '@emotion/react';
import { focusHalo } from '../../core/accesibility';
import { height } from '../../core/size';
import { textSans } from '../../core/typography/api';

export const textInput = (theme: any) => {
  return css`
    box-sizing: border-box;
    height: ${height.inputMedium}px;
    ${textSans.medium({ lineHeight: 'regular' })};
    padding: 0 0.5rem;

    &:focus {
      ${focusHalo};
    }
  `;
};

export const inlineMessageMargin = css`
  margin-top: 2px;
`;

export const widthFluid = css`
  width: 100%;
`;

export const width30 = css`
  width: 40ex;
  max-width: 100%; /* prevent overflow on narrow viewports */
`;

export const width10 = css`
  width: 18ex;
`;

export const width4 = css`
  width: 9ex;
`;
