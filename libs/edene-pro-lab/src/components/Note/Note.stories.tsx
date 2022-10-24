import { Story, Meta } from '@storybook/react';
import NoteComponent from './index';

export default {
    title: 'EdeneProLab/Components',
    component: NoteComponent,
} as Meta;

const Template: Story = () => <NoteComponent />;

export const Note = Template.bind({});
