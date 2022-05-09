export interface ModalSettings {
    id: string;
    title: string;
    children: React.ReactNode;
    /** Called when close button clicked and when escape key is pressed */
    onClose?(): void;
}

export interface ModalState {
    id: string;
    props: ModalSettings;
}

export interface ModalsState {
    modals: ModalState[];
    current: ModalState | null;
}
