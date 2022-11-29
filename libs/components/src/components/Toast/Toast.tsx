import { useCallback, useEffect } from 'react';

import { Icon } from '../../icons';
import { toast, toastIcon } from './styles';
import { IToastVariant } from './types';

interface ToastProps {
    hideToast(): void;
    duration?: number;
    variant?: IToastVariant;
    children: React.ReactNode;
}

const defaultProps: Required<Pick<ToastProps, 'variant'>> = {
    variant: 'info',
};

const Toast = (props: ToastProps) => {
    const { hideToast, variant, duration, children, ...rest } = {
        ...defaultProps,
        ...props,
    };

    const getToastIcon = (variant: IToastVariant) => {
        if (variant === 'success') return 'done';
        if (variant === 'error') return 'close';
        return 'info';
    };

    const toastTimeout = useCallback(() => {
        const timer = setTimeout(() => hideToast(), duration);

        return () => clearTimeout(timer);
    }, [duration, hideToast]);

    useEffect(() => {
        if (!duration) return;

        toastTimeout();
    });

    return (
        <div css={toast(variant)} {...rest}>
            <div css={toastIcon(variant)}>
                <Icon variant="outlined" color="#FCFCFC">
                    {getToastIcon(variant)}
                </Icon>
            </div>
            {children}
        </div>
    );
};

export default Toast;

export type { ToastProps };
