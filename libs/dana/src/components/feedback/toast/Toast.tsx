import { Button, CloseIcon } from '@dana';
import { ToastMessage, ToastOptions } from './ToastManager';
import React, { useEffect } from 'react';
import './styles.scss';

export interface ToastProps extends ToastOptions {
    id: string;
    destroy: () => void;
    message: ToastMessage;
    duration?: number;
}

export const Toast: React.FC<ToastProps> = (props) => {
    const { destroy, message, duration = 0, id } = props;

    useEffect(() => {
        if (!duration) return;

        const timer = setTimeout(() => {
            destroy();
        }, duration);

        return () => clearTimeout(timer);
    }, [destroy, duration]);

    return (
        <div>
            <div className={'toast-header'}>
                <div>{message.title}</div>
                <Button onClick={destroy}>
                    <CloseIcon size="medium" />
                </Button>
            </div>
            <div className={'toast-body'}>{message.content}</div>
        </div>
    );
};
