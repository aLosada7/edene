import React, { useState } from 'react';
import { Container, Button } from '../..';
import { asChromaticStory } from '../../lib/story-intents';
import type { Story } from '../../lib/storybook-emotion-10-fixes';
import { Modal } from './Modal';

export default {
    title: 'Components/Modal',
    component: Modal,
};

const Template: Story = () => {
    const [opened, setOpened] = useState(false);

    return (
        <Container mt={10}>
            <>
                <Button onClick={() => setOpened(true)}>Open Modal</Button>
                <Modal
                    opened={opened}
                    title="My modal"
                    onClose={() => setOpened(false)}
                >
                    My modal
                </Modal>
            </>
        </Container>
    );
};

export const Default = Template.bind({});
asChromaticStory(Default);
