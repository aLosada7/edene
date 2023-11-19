import { createContext, useReducer } from 'react';

import Modal from './Modal';
import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';
import { modalsReducer } from './reducer';
import { ModalSettings, ModalState } from './types';

export interface ModalsContextProps {
    modals: ModalState[];
    openModal: (props: ModalSettings) => string;
    closeModal: (id: string) => void;
}

export const ModalsContext = createContext<ModalsContextProps | null>(null);

/************************************************************************/

export interface ModalsProviderProps {
    /** App */
    children: React.ReactNode;
    /** Shared Modal component props, applied for every modal */
    modalProps?: ModalSettings;
    /** Confirm modal labels */
}

export const ModalsProvider = ({ children }: ModalsProviderProps) => {
    const [state, dispatch] = useReducer(modalsReducer, {
        modals: [],
        current: null,
    });

    const openModal = (props: ModalSettings) => {
        const id = props.id;
        dispatch({
            type: 'OPEN',
            payload: {
                id,
                props,
            },
        });
        return id;
    };

    const closeModal = (id?: string) => {
        if (!id) return;
        dispatch({ type: 'CLOSE', payload: id });
    };

    const ctx: ModalsContextProps = {
        modals: state.modals,
        openModal,
        closeModal,
    };

    const getCurrentModal = () => {
        if (!state.current) return {};
        const { children: currentModalChildren, ...rest } = state.current.props;
        return {
            modalProps: rest,
            content: currentModalChildren,
        };
    };

    const { modalProps: currentModalProps, content } = getCurrentModal();

    return (
        <ModalsContext.Provider value={ctx}>
            <Modal
                {...currentModalProps}
                show={state.modals.length > 0}
                onClose={(modalId) => closeModal(modalId)}
            >
                <ModalHeader
                    {...currentModalProps}
                    onClose={() => closeModal(state.current?.id)}
                />
                <ModalBody>{content}</ModalBody>
            </Modal>
            {children}
        </ModalsContext.Provider>
    );
};
