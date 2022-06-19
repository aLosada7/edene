/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import Toast from './Toast';
import { Button } from '../Button';
import { ToastsProvider } from './ToastsProvider';
import { useToasts } from './useToasts';
import { StoryVStack } from '../../lib/general-story-components';
import ToastHeader from './ToastHeader';
import ToastBody from './ToastBody';

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
            title: 'This is a fake but long title',
            description: "Woohoo, you're reading this text in a Toast!",
        });
    };

    return <Button onClick={() => showToast()}>Show toast</Button>;
};

// **************************************************************************************************

export const Default = Template.bind({});

export const Variants: Story = () => {
    return (
        <StoryVStack>
            <Toast hideToast={() => {}}>
                <ToastHeader
                    id="1"
                    title="Yay! Everything worked"
                    onClose={() => {}}
                />
            </Toast>
            <Toast variant="success" hideToast={() => {}}>
                <ToastHeader
                    id="1"
                    title="Yay! Everything worked but this is a large text"
                    onClose={() => {}}
                />
            </Toast>
            <Toast variant="error" hideToast={() => {}}>
                <ToastHeader
                    id="1"
                    title="Yay! Everything worked"
                    onClose={() => {}}
                />
                <ToastBody>Your mail has been succesfully sended.</ToastBody>
            </Toast>
        </StoryVStack>
    );
};
