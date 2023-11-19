import { Fragment, useState } from 'react';
import { Meta, Story } from '@storybook/react';

import { Row } from '../../layout/Grid';
import { Button } from '../Button';
import Modal from './Modal';
import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';
import { ModalsProvider } from './ModalsProvider';
import { useModals } from './useModals';

// Estilos
// Tecla esc
// Cerrar cuando pulsas en el Overlay

export default {
    component: Modal,
    title: 'Components/Modal',
    decorators: [
        (Story: Story) => (
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
                <Row gap={2}>
                    <Button onClick={() => openModal(newModalId)}>
                        Launch another modal
                    </Button>
                    <Button onClick={() => closeModal(newModalId)}>
                        Close modal
                    </Button>
                </Row>
            ),
        });
    };

    return <Button onClick={() => openModal('0')}>Launch demo modal</Button>;
};

// **************************************************************************************************

export const Provider = ModalsProviderTemplate.bind({});
