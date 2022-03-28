import React, { useState } from 'react';
import { Container, Button, ModalFooter, ModalContent, Text } from '../..';
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
        <Container mt={8}>
            <>
                <Button onClick={() => setOpened(true)}>Open Modal</Button>
                <Modal
                    opened={opened}
                    title="Deactivate account"
                    onClose={() => setOpened(false)}
                >
                    <ModalContent>
                        <Text size="sm" color="hsl(212, 18%, 35%)">
                            Are vou sure vou want to deactivate vour account? Bi
                            doing this you will lose all of your saved data and
                            will not ha ahlata ratriovs it.
                        </Text>
                    </ModalContent>
                    <ModalFooter>
                        <Button
                            variant="link"
                            color="dark"
                            onClick={() => setOpened(false)}
                        >
                            Cancel
                        </Button>
                        <Button color="danger">Deactivate</Button>
                    </ModalFooter>
                </Modal>
            </>
        </Container>
    );
};

export const Default = Template.bind({});
asChromaticStory(Default);
