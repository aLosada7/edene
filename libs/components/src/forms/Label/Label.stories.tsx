import { Story } from '@storybook/react';

import { Label, LabelProps } from './index';

export default {
    title: 'Components/Label',
    component: Label,
    args: {
        text: 'Email',
    },
};

export const Playground: Story<LabelProps> = (args: LabelProps) => (
    <Label {...args} />
);

export const Default: Story<LabelProps> = (args: LabelProps) => (
    <Label {...args} />
);

export const WithSupportingText = Default.bind({});
WithSupportingText.args = {
    supportingText: '(f.e. alex@example.com)',
};

export const WithHideLabel = Default.bind({});
WithHideLabel.args = {
    hideLabel: true,
};
