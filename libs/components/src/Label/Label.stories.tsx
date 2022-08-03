import { Label, LabelProps } from './Label';
import { asPlayground, asChromaticStory } from '../lib/story-intents';
import type { Story } from '../lib/storybook-emotion-10-fixes';

export default {
    title: 'Components/Label',
    component: Label,
    args: {
        text: 'Email',
        optional: false,
        hideLabel: false,
    },
};

const Template: Story<LabelProps> = (args: LabelProps) => <Label {...args} />;

// *****************************************************************************

export const Playground = Template.bind({});
Playground.args = {
    text: 'Email',
};
asPlayground(Playground);

// *****************************************************************************

export const Default = Template.bind({});
asChromaticStory(Default);

// *****************************************************************************

export const WithSupportingText = Template.bind({});
WithSupportingText.args = {
    supporting: 'alex@example.com',
};
asChromaticStory(WithSupportingText);

// *****************************************************************************

export const WithOptional = Template.bind({});
WithOptional.args = {
    optional: true,
};
asChromaticStory(WithOptional);

// *****************************************************************************
