import { Toast, useToast } from '@dana';
import { useCallback, useEffect } from 'react';
import { toaster } from './styles';

export const Toaster = () => {
    const { contentRef, toastOptions } = useToast();

    const eventListener = useCallback(() => {
        console.log(contentRef); // use the stateful variable in event listener
        console.log(toastOptions);
    }, [contentRef, toastOptions]);

    eventListener();

    return (
        <Toast
            id="toaster-root"
            cssOverrides={toaster}
            position={toastOptions.position}
            autoClose={toastOptions.autoClose}
            closeButton={toastOptions.closeButton}
        >
            {contentRef.current}
        </Toast>
    );
};
