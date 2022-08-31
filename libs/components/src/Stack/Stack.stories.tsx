import { Stack } from '.';
import { Button } from '../Button';
import { asChromaticStory, asPlayground } from '../lib/story-intents';
import type { Story } from '../lib/storybook-emotion-10-fixes';

export default {
    title: 'Components/Stack',
    component: Stack,
};

const Template: Story = () => (
    <Stack>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
    </Stack>
);

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const Default = Template.bind({});
asChromaticStory(Default);
