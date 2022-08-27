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

const ControlledTemplate: Story<CheckboxProps> = (props: CheckboxProps) => {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <Checkbox
            checked={checked}
            onChange={(event: any) => setChecked(event.currentTarget.checked)}
            {...props}
        />
    );
};

export const Controlled = ControlledTemplate.bind({});
asChromaticStory(Controlled);

export const OptionalCheckbox = ControlledTemplate.bind({});
OptionalCheckbox.args = {
    optional: true,
};
asChromaticStory(OptionalCheckbox);

// *****************************************************************************

export const ErrorCheckbox = ControlledTemplate.bind({});
ErrorCheckbox.args = {
    error: 'You must agree before submitting.',
};
asChromaticStory(ErrorCheckbox);

// *****************************************************************************

export const SuccessCheckbox = ControlledTemplate.bind({});
SuccessCheckbox.args = {
    success: 'Thank you.',
};
asChromaticStory(SuccessCheckbox);

// *****************************************************************************

export const Group = () => {
    const [values, setValues] = useState<string[]>([]);

    return (
        <CheckboxGroup value={values} onChange={setValues}>
            <Checkbox
                value="savePayInfo"
                label="Save information to pay faster next time"
            />
            <Checkbox
                value="saveBillingInfo"
                label="Save billing and shipping address are the same"
            />
        </CheckboxGroup>
    );
};
