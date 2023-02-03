import { Story, Meta } from '@storybook/react';
import AccountSettingsForm from './index';

export default {
    title: 'Pages/Forms',
    component: AccountSettingsForm,
} as Meta;

const Template: Story = () => <AccountSettingsForm />;

export const AccountSettings = Template.bind({});
