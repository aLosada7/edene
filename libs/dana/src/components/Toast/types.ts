export type IToastVariant = 'info' | 'success' | 'error';

export interface ToastSettings {
    id?: string;
    title: string;
    description: string;
    duration?: number;
    variant?: IToastVariant;
    /** Called when close button clicked and when escape key is pressed */
    onClose?(): void;
}

export interface ToastState {
    id: string;
    props: ToastSettings;
}

export interface ToastsState {
    toasts: ToastState[];
}
