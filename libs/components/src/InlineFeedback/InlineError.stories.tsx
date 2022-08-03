import { asPlayground, asChromaticStory } from '../lib/story-intents';
import type { Story } from '../lib/storybook-emotion-10-fixes';
import { InlineError } from './InlineError';
import type { InlineFeedbackProps } from './types';

export default {
    title: 'Laboratory/InlineError',
    component: InlineError,
};

const Template: Story<InlineFeedbackProps> = ({
    children,
    ...args
}: InlineFeedbackProps) => (
    <InlineError {...args}>{children ?? 'Please enter your name'}</InlineError>
);

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const InlineErrorDefaultTheme = Template.bind({});
asChromaticStory(InlineErrorDefaultTheme);

// *****************************************************************************

export const LongInlineErrorDefaultThemeMobile = Template.bind({});
LongInlineErrorDefaultThemeMobile.parameters = {
    viewport: { defaultViewport: 'mobileMedium' },
};
LongInlineErrorDefaultThemeMobile.args = {
    children: 'Please pick a date in the future.',
};

asChromaticStory(LongInlineErrorDefaultThemeMobile);

// *****************************************************************************
