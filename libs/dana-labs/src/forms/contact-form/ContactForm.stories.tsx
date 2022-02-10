import { Story, Meta } from '@storybook/react';
import { ContactForm } from './ContactForm';

export default {
    title: 'DanaLabs/Forms',
} as Meta;

const Template: Story = () => <ContactForm />;

export const Contact = Template.bind({});
Contact.args = {};
