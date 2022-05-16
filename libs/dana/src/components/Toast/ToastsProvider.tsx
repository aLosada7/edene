import { createContext, useReducer } from 'react';

import Toast from './Toast';
import ToastHeader from './ToastHeader';
import ToastBody from './ToastBody';
import { toastsReducer } from './reducer';
import { ToastSettings, ToastState } from './types';
import { toastContainer } from './styles';

export interface ToastsContextProps {
    toasts: ToastState[];
    showToast: (props: ToastSettings) => string;
    hideToast: (id: string) => void;
}

export const ToastsContext = createContext<ToastsContextProps | null>(null);

const getRandomId = (): string => {
    return Math.random().toString(36).slice(2);
};

/************************************************************************/

export interface ToastsProviderProps {
    /** App */
    children: React.ReactNode;
    /** Shared Toast component props, applied for every toast */
    toastProps?: ToastSettings;
    /** Confirm toast labels */
}

export const ToastsProvider = ({ children }: ToastsProviderProps) => {
    const [state, dispatch] = useReducer(toastsReducer, {
        toasts: [],
    });

    const showToast = (props: ToastSettings) => {
        const id = props.id || getRandomId();
        dispatch({
            type: 'SHOW',
            payload: {
                id,
                props,
            },
        });
        return id;
    };

    const hideToast = (id: string): void => {
        if (!id) return;
        dispatch({ type: 'HIDE', payload: id });
    };

    const ctx: ToastsContextProps = {
        toasts: state.toasts,
        showToast,
        hideToast,
    };

    const getToastProps = (toast: ToastState) => {
        const { body: toastChildren, ...rest } = toast.props;
        return {
            toastProps: {
                ...rest,
                id: toast.id,
                hideToast: () => hideToast(toast.id),
            },
            content: toastChildren,
        };
    };

    return (
        <ToastsContext.Provider value={ctx}>
            {state.toasts.length > 0 && (
                <div css={toastContainer}>
                    {state.toasts.map((toast, index) => {
                        const { toastProps, content } = getToastProps(toast);

                        return (
                            <Toast key={index} {...toastProps}>
                                <ToastHeader
                                    {...toastProps}
                                    onClose={hideToast}
                                />
                                <ToastBody>{content}</ToastBody>
                            </Toast>
                        );
                    })}
                </div>
            )}
            {children}
        </ToastsContext.Provider>
    );
};
