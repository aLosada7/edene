/* eslint-disable @typescript-eslint/no-empty-function */
import { Story } from '@storybook/react';

import Toast from './Toast';
import { Button } from '../Button';
import { ToastsProvider } from './ToastsProvider';
import { useToasts } from './useToasts';
import ToastHeader from './ToastHeader';
import ToastBody from './ToastBody';
import { Stack } from '../../layout/Stack';

export default {
    component: Toast,
    title: 'Components/Toast',
    decorators: [
        (Story: Story) => (
            <ToastsProvider>
                <Story />
            </ToastsProvider>
        ),
    ],
};

const Template = () => {
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

export const Variants = () => {
    return (
        <Stack>
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
        </Stack>
    );
};
