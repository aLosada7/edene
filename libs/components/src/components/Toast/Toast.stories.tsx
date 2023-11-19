/* eslint-disable @typescript-eslint/no-empty-function */
import { Story } from '@storybook/react';

import { Row } from '../../layout/Grid';
import { Button } from '../Button';
import Toast from './Toast';
import ToastBody from './ToastBody';
import ToastHeader from './ToastHeader';
import { ToastsProvider } from './ToastsProvider';
import { useToasts } from './useToasts';

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
        <Row direction="column" gap={4}>
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
        </Row>
    );
};
