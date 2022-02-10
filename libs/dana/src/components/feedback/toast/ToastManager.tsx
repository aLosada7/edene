import React from 'react';
import ReactDOM from 'react-dom';
import { Toast, ToastProps } from './Toast';

export interface ToastMessage {
    title: string;
    content?: string;
}

export interface ToastOptions {
    duration?: number;
}

export class ToastManager {
    private containerRef: HTMLDivElement;
    private toasts: ToastProps[] = [];

    constructor() {
        const body = document.getElementsByTagName(
            'body'
        )[0] as HTMLBodyElement;
        const toastContainer = document.createElement('div') as HTMLDivElement;
        toastContainer.id = 'toast-container-main';
        body.insertAdjacentElement('beforeend', toastContainer);
        this.containerRef = toastContainer;
    }

    public show(content: string | ToastMessage, options: ToastOptions): void {
        const toastId = Math.random().toString(36).substr(2, 9);
        const toast: ToastProps = {
            id: toastId,
            message: typeof content === 'string' ? { title: content } : content,
            ...options,
            destroy: () => this.destroy(toastId),
        };

        this.toasts = [toast, ...this.toasts];
        this.render();
    }

    public destroy(id: string): void {
        this.toasts = this.toasts.filter(
            (toast: ToastProps) => toast.id !== id
        );
        this.render();
    }

    private render(): void {
        const toastsList = this.toasts.map((toastProps: ToastProps) => (
            <Toast key={toastProps.id} {...toastProps} />
        ));
        ReactDOM.render(toastsList, this.containerRef);
    }
}

export const toast = new ToastManager();
