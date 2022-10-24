import { css } from '@emotion/react';

import { Alert as AlertComponent } from './Alert';
import { asChromaticStory } from '../lib/story-intents';
import { StoryVStack } from '../lib/general-story-components';

export default {
    title: 'Components',
    component: AlertComponent,
};

const Template = () => (
    <StoryVStack
        cssOverrides={css`
            width: 100vw;
        `}
    >
        <AlertComponent>This is a default alert</AlertComponent>
        <AlertComponent color="success">This is a success alert</AlertComponent>
        <AlertComponent color="danger">This is a danger alert</AlertComponent>
    </StoryVStack>
);

// *****************************************************************************

export const Alert = Template.bind({});
asChromaticStory(Alert);
