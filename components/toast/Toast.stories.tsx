import { Toast } from './Toast';
import {
    asPlayground,
    asChromaticStory,
} from '../../libs/dana/lib/story-intents';
import type { Story } from '../../libs/dana/lib/storybook-emotion-10-fixes';
import { Button, useToast } from '@dana';

export default {
    title: 'Components/Forms/Toast',
    component: Toast,
};

const Template: Story = () => (
    <Toast id="1">
        <span>Hello</span>
    </Toast>
);

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const Default: Story = () => {
    const { toast } = useToast();
    return (
        <Button
            color="gray"
            onClick={() => {
                toast(<p>Que tal</p>, {
                    position: 'BOTTOM_RIGHT',
                    closeButton: true,
                    autoClose: 5000,
                });
            }}
        >
            Show Toast
        </Button>
    );
};
