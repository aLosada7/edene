import { Story, Meta } from '@storybook/react';
import { ContactForm } from './ContactForm';

export default {
    title: 'EdeneProLab/Forms',
    component: ContactForm,
} as Meta;

const Template: Story = () => <ContactForm />;

export const Contact = Template.bind({});
Contact.args = {};
