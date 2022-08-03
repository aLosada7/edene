import { useState } from 'react';

import { Checkbox, CheckboxProps } from './Checkbox';
import { CheckboxGroup } from './CheckboxGroup';
import { asChromaticStory, asPlayground } from '../lib/story-intents';
import type { Story } from '../lib/storybook-emotion-10-fixes';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {
        label: 'I accept terms and conditions',
    },
};

const Template: Story<CheckboxProps> = (props: CheckboxProps) => (
    <Checkbox {...props} />
);

export const Playground = Template.bind({});
asPlayground(Playground);

export const OptionalCheckbox = Template.bind({});
OptionalCheckbox.args = {
    optional: true,
};
asChromaticStory(OptionalCheckbox);

// *****************************************************************************

export const ErrorCheckbox = Template.bind({});
ErrorCheckbox.args = {
    error: 'You must agree before submitting.',
};
asChromaticStory(ErrorCheckbox);

// *****************************************************************************

export const SuccessCheckbox = Template.bind({});
SuccessCheckbox.args = {
    success: 'Thank you.',
};
asChromaticStory(SuccessCheckbox);

// *****************************************************************************

export const Group = () => {
    const [values, setValues] = useState([]);

    return (
        <CheckboxGroup value={values} onChange={setValues}>
            <Checkbox label="Save information to pay faster next time" />
            <Checkbox label="My billing and shipping address are the same" />
        </CheckboxGroup>
    );
};
