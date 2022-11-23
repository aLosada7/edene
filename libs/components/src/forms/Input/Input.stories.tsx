import { Story } from '@storybook/react';

import { Input, InputProps } from './index';

export default {
    title: 'Forms/Input',
    component: Input,
    args: { id: 'input-id', type: 'text' },
};

const Playground: Story<InputProps> = (args: InputProps) => {
    return <Input {...args} />;
};
Playground.storyName = '🧶 Playground';

export const Default: Story<InputProps> = (args: InputProps) => (
    <Input {...args} />
);

export const WithSuccess = Default.bind({});
WithSuccess.args = {
    success: 'Looks good!',
};

export const WithError = Default.bind({});
WithError.args = {
    error: 'Mail already registered',
};
