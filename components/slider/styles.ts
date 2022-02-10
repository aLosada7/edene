import { css } from '@emotion/react';

import { sliderDefault } from '../../core/themes/slider';

export const slider = ({ slider } = sliderDefault) => css`
  position: relative;
  border: 1px solid ${slider.borderPrimary};
  min-height: 300px;
`;

export const leftButton = () => css`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;

  svg {
    width: 48px;
    height: 48px;
    fill: black;
    pointer-events: none;
  }
`;

export const rightButton = () => css`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;

  svg {
    width: 48px;
    height: 48px;
    fill: black;
    pointer-events: none;
  }
`;
