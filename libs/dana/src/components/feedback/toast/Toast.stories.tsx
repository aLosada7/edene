import { Toast } from './Toast';
import { asPlayground, asChromaticStory } from '../../../../lib/story-intents';
import type { Story } from '../../../../lib/storybook-emotion-10-fixes';
import { Button } from '@dana';
import { toast } from './ToastManager';

export default {
    title: 'Components/Feedback/Toast',
    component: Toast,
};

// *****************************************************************************

export const Default: Story = () => {
    return (
        <Button
            color="gray"
            onClick={() => {
                toast.show('Welcome to the Campaign', {
                    duration: 10000,
                });
            }}
        >
            Show Toast
        </Button>
    );
};

// *****************************************************************************

export const WithTitleAndDescription: Story = () => {
    return (
        <Button
            color="gray"
            onClick={() => {
                toast.show(
                    {
                        title: 'toast title',
                        content: 'toast body',
                    },
                    {
                        duration: 10000,
                    }
                );
            }}
        >
            Show Toast
        </Button>
    );
};
