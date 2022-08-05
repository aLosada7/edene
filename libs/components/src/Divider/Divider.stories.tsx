import { Divider, DividerProps } from './Divider';
import { asPlayground, asChromaticStory } from '../lib/story-intents';
import type { Story } from '../lib/storybook-emotion-10-fixes';
import { Container } from '..';

export default {
    title: 'Components/Divider',
    component: Divider,
};

const Template: Story<DividerProps> = (args) => <Divider {...args} />;

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const basic = () => (
    <Container mt={8}>
        <Divider />
    </Container>
);
asChromaticStory(basic);
