import { Story } from '@storybook/react';

import { Button, Stack } from '@edene/components';

import { Underline } from './index';

export default {
    title: 'Animations/Underline',
    component: Underline,
};

export const Default: Story = () => {
    return (
        <Underline delay="1s">
            <Button variant="link" component="a" href="#">
                Home
            </Button>
        </Underline>
    );
};

export const Types = () => (
    <Stack>
        <Underline delay="1s" start="left">
            <Button variant="link" component="a" href="#">
                Left
            </Button>
        </Underline>
        <Underline delay="1s" start="center">
            <Button variant="link" component="a" href="#">
                Center
            </Button>
        </Underline>
        <Underline delay="1s" start="right">
            <Button variant="link" component="a" href="#">
                Right
            </Button>
        </Underline>
    </Stack>
);
