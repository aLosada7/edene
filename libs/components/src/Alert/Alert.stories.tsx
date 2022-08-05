import { Alert } from './Alert';
import { asChromaticStory } from '../lib/story-intents';
import { StoryVStack } from '../lib/general-story-components';

export default {
    title: 'Components/Alert',
    component: Alert,
};

const Template = () => (
    <StoryVStack>
        <Alert>This is a default alert</Alert>
        <Alert color="success">This is a success alert</Alert>
        <Alert color="danger">This is a danger alert</Alert>
    </StoryVStack>
);

// *****************************************************************************

export const Default = Template.bind({});
asChromaticStory(Default);
