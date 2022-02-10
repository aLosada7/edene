import { Children, cloneElement, ReactElement } from 'react';
import { Props } from '../../helpers';
import { SvgChevronLeft } from '../../icons/chevron-left';
import { SvgChevronRight } from '../../icons/chevron-right';

import { leftButton, rightButton, slider } from './styles';

export interface SliderProps extends Props {
  children: ReactElement[];
}

export const Slider = ({ cssOverrides, children, ...props }: SliderProps) => (
  <div
    css={(theme: any) => [slider(theme.slider && theme), cssOverrides]}
    {...props}
  >
    {Children.map(children, (child) => {
      return cloneElement(child, {});
    })}
    <button css={() => [leftButton()]} aria-label="slide to left">
      <SvgChevronLeft />
    </button>
    <button css={() => [rightButton()]} aria-label="slide to right">
      <SvgChevronRight />
    </button>
  </div>
);
