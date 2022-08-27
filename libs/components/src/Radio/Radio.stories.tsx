import React from 'react';
import { RadioGroup, RadioGroupProps, Radio } from '.';
import { asChromaticStory } from '../lib/story-intents';
import type { Story } from '../lib/storybook-emotion-10-fixes';

export default {
    title: 'Components/Radio',
    args: {
        defaultValue: '2',
    },
};

const Template: Story<RadioGroupProps> = (args: RadioGroupProps) => {
    return (
        <RadioGroup {...args}>
            <Radio value="1">First</Radio>
            <Radio value="2">Second</Radio>
            <Radio value="3">Third</Radio>
        </RadioGroup>
    );
};

export const Default = Template.bind({});
asChromaticStory(Default);

export const Inline = Template.bind({});
Inline.args = {
    inline: true,
};
asChromaticStory(Inline);

const ControlledTemplate: Story<RadioGroupProps> = (args: RadioGroupProps) => {
    const [value, setValue] = React.useState('1');
    return (
        <RadioGroup onChange={setValue} value={value} {...args}>
            <Radio value="1">First</Radio>
            <Radio value="2">Second</Radio>
            <Radio value="3">Third</Radio>
        </RadioGroup>
    );
};

export const Controlled = ControlledTemplate.bind({});
asChromaticStory(Controlled);
