import { useRef, useState } from 'react';
import { ToastPosition, ToastOptions } from './Toast';

type ToastHandler = (content: JSX.Element, options?: ToastOptions) => void;

const globalToastOptions = {
    position: 'BOTTOM_RIGHT' as ToastPosition,
    closeButton: true,
    autoClose: 3000,
};

export const useToast = () => {
    const [content, setContent] = useState(<h1>Hello</h1>);
    const [toastOptions, setToastOptions] = useState(globalToastOptions);

    const contentRef = useRef(content);

    const toast: ToastHandler = (
        content: JSX.Element,
        options?: ToastOptions
    ) => {
        console.log('newContent: ', content);
        setContent(content);
        setToastOptions({
            ...globalToastOptions,
            ...options,
        });
        contentRef.current = content;
        console.log(content);
        console.log(toastOptions);
    };

    return { contentRef, toastOptions, toast };
};
