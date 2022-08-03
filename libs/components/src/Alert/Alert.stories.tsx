import { Alert } from './Alert';
import { asChromaticStory } from '../lib/story-intents';
import { StoryVStack } from '../lib/general-story-components';

export default {
    title: 'Components/Alert',
    component: Alert,
};

const Template = () => (
    <StoryVStack>
        <Alert>Button</Alert>
        <Alert color="danger">Button</Alert>
    </StoryVStack>
);

// *****************************************************************************

export const Default = Template.bind({});
asChromaticStory(Default);
