import { Story, Meta } from '@storybook/react';
import { AntDesignTextbox } from './AntDesignTextbox';

export default {
    component: AntDesignTextbox,
    title: 'Lab/Forms/AntDesignTextbox',
} as Meta;

const Template: Story = () => <AntDesignTextbox />;

export const Default = Template.bind({});
