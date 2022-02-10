import { Slider, SliderProps } from './Slider';
import { asPlayground, asChromaticStory } from '../../../lib/story-intents';
import type { Story } from '../../../lib/storybook-emotion-10-fixes';

export default {
  title: 'Laboratory/UI Elements/Slider',
  component: Slider,
  args: {
    text: 'State',
  },
};

const Template: Story<SliderProps> = (args: SliderProps) => (
  <Slider {...args}></Slider>
);

// *****************************************************************************

export const Playground = Template.bind({});
Playground.args = {
  text: 'Email',
};
asPlayground(Playground);

// *****************************************************************************

export const DefaultSlider = Template.bind({});
asChromaticStory(DefaultSlider);
