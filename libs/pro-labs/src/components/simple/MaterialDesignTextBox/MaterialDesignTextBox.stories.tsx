import { Story, Meta } from '@storybook/react';
import { MaterialDesignTextBox } from './MaterialDesignTextBox';

export default {
    component: MaterialDesignTextBox,
    title: 'Lab/Forms/MaterialDesignTextBox',
} as Meta;

const Template: Story = () => <MaterialDesignTextBox />;

export const Default = Template.bind({});
