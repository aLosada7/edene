import { Group } from '.';
import { Button } from '../Button';
import { asChromaticStory, asPlayground } from '../lib/story-intents';
import type { Story } from '../lib/storybook-emotion-10-fixes';

export default {
    title: 'Components/Group',
    component: Group,
};

const Template: Story = () => (
    <Group>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
    </Group>
);

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const Default = Template.bind({});
asChromaticStory(Default);
