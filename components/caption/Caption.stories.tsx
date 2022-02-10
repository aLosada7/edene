import type { Story } from '../../libs/dana/lib/storybook-emotion-10-fixes';
import {
  asChromaticStory,
  asPlayground,
} from '../../libs/dana/lib/story-intents';
import { Caption, CaptionProps } from './Caption';

export default {
  component: Caption,
  title: 'Dana/UI Elements/Caption',
  args: {
    text: 'Could a computer ever create better art than a human?',
  },
};

const Template: Story<CaptionProps> = (args) => <Caption {...args} />;

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const DefaultCaption = Template.bind({});
asChromaticStory(DefaultCaption);
