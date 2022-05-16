import { useCallback, useEffect } from 'react';
import { toast } from './styles';

interface ToastProps {
    hideToast(): void;
    duration?: number;
    children: React.ReactNode;
}

const Toast = ({ hideToast, duration, children, ...props }: ToastProps) => {
    const toastTimeout = useCallback(() => {
        const timer = setTimeout(() => hideToast(), duration);

        return () => clearTimeout(timer);
    }, [duration, hideToast]);

    useEffect(() => {
        if (!duration) return;

        toastTimeout();
    });

    return (
        <div css={toast} {...props}>
            {children}
        </div>
    );
};

export default Toast;

export type { ToastProps };
