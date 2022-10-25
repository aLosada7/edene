import React, { Fragment, useState } from 'react';
import { Meta, Story } from '@storybook/react';

import Modal from './Modal';
import { Button } from '../Button';
import { ModalsProvider } from './ModalsProvider';
import { useModals } from './useModals';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import { Group } from '../Group';

// Estilos
// Tecla esc
// Cerrar cuando pulsas en el Overlay

export default {
    component: Modal,
    title: 'Overlay/Modal',
    decorators: [
        (Story: any) => (
            <ModalsProvider>
                <Story />
            </ModalsProvider>
        ),
    ],
} as Meta;

const Template: Story = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <Fragment>
            <Button onClick={() => setShowModal(true)}>Show modal</Button>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <ModalHeader
                    title="Modal example"
                    onClose={() => setShowModal(false)}
                />
                <ModalBody>
                    <Button onClick={() => setShowModal(false)}>
                        Close modal
                    </Button>
                </ModalBody>
            </Modal>
        </Fragment>
    );
};

export const Default = Template.bind({});

// **************************************************************************************************

const ModalsProviderTemplate: Story = () => {
    const modals = useModals();

    const closeModal = (id: string) => {
        modals.closeModal(id);
    };

    const openModal = (id: string) => {
        const newModalId = (+id + 1).toString();

        modals.openModal({
            id: newModalId,
            title: `Modal ${newModalId}`,
            children: (
                <Group>
                    <Button onClick={() => openModal(newModalId)}>
                        Launch another modal
                    </Button>
                    <Button onClick={() => closeModal(newModalId)}>
                        Close modal
                    </Button>
                </Group>
            ),
        });
    };

    return <Button onClick={() => openModal('0')}>Launch demo modal</Button>;
};

// **************************************************************************************************

export const Provider = ModalsProviderTemplate.bind({});
