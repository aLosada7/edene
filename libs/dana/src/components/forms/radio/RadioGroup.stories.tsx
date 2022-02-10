import React from 'react';
import { RadioGroup, RadioGroupProps, Radio } from '.';
import { asChromaticStory } from '../../../../lib/story-intents';
import type { Story } from '../../../../lib/storybook-emotion-10-fixes';

export default {
    title: 'Components/Forms/Radio',
};

const Template: Story<RadioGroupProps> = (props: RadioGroupProps) => {
    const [value, setValue] = React.useState('1');
    return (
        <RadioGroup onChange={setValue} value={value} {...props}>
            <Radio value="1">First</Radio>
            <Radio value="2">Second</Radio>
            <Radio value="3">Third</Radio>
        </RadioGroup>
    );
};

export const BasicRadioGroup = Template.bind({});
asChromaticStory(BasicRadioGroup);

export const RadioGroupWrap = Template.bind({});
RadioGroupWrap.args = {
    kind: 'wrap',
};
asChromaticStory(RadioGroupWrap);
