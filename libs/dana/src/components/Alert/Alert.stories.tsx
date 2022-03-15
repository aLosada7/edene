import { Alert } from './Alert';
import { asPlayground, asChromaticStory } from '../../lib/story-intents';
import type { Story } from '../../lib/storybook-emotion-10-fixes';
import { StoryVStack } from '../../lib/general-story-components';

export default {
    title: 'Components/Notification/Alert',
    component: Alert,
};

export const Template = () => (
    <StoryVStack>
        <Alert>Button</Alert>
        <Alert color="danger">Button</Alert>
    </StoryVStack>
);

// *****************************************************************************

export const Default = Template.bind({});
asChromaticStory(Default);
