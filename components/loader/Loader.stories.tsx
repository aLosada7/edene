import { Loader, LoaderProps } from './Loader';
import { asChromaticStory } from '../../../lib/story-intents';
import type { Story } from '../../../lib/storybook-emotion-10-fixes';

export default {
  title: 'Dana/UI Elements/Loader',
  component: Loader,
  args: {
    type: 'blocks',
  },
};

const Template: Story<LoaderProps> = (args) => <Loader {...args} />;

// *****************************************************************************

export const Spinner = Template.bind({});
asChromaticStory(Spinner);

// *****************************************************************************

export const TableLoader = Template.bind({});
TableLoader.args = {
  type: 'table',
};
