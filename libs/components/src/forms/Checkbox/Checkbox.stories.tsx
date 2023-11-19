import { useState } from 'react';
import { Story } from '@storybook/react';

import { Checkbox, CheckboxGroup, CheckboxProps } from './index';

export default {
    title: 'Forms/Checkbox',
    component: Checkbox,
    args: {
        label: 'I accept terms and conditions',
    },
};

export const Playground: Story<CheckboxProps> = (props: CheckboxProps) => (
    <Checkbox {...props} />
);
Playground.storyName = '🧶 Playground';

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

export const ErrorCheckbox = ControlledTemplate.bind({});
ErrorCheckbox.args = {
    error: 'You must agree before submitting.',
};

export const SuccessCheckbox = ControlledTemplate.bind({});
SuccessCheckbox.args = {
    checked: true,
    success: 'Thank you for accepting terms and conditions.',
};

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
