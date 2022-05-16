export interface ToastSettings {
    id?: string;
    title: React.ReactNode;
    body: React.ReactNode;
    /** The amount of time the toast will be shown in milliseconds */
    duration?: number;
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
