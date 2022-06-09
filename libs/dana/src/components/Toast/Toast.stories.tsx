import React from 'react';
import { Meta, Story } from '@storybook/react';

import Toast from './Toast';
import { Button } from '../Button';
import { ToastsProvider } from './ToastsProvider';
import { useToasts } from './useToasts';

export default {
    component: Toast,
    title: 'Components/Toast',
    decorators: [
        (Story: any) => (
            <ToastsProvider>
                <Story />
            </ToastsProvider>
        ),
    ],
} as Meta;

const Template: Story = () => {
    const toasts = useToasts();

    const showToast = () => {
        toasts.showToast({
            title: <strong>This is a fake but long title</strong>,
            body: <p>Woohoo, you're reading this text in a Toast!</p>,
        });
    };

    return <Button onClick={() => showToast()}>Show toast</Button>;
};

// **************************************************************************************************

export const Default = Template.bind({});
