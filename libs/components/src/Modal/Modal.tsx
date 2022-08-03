import { css } from '@emotion/react';
import React, { useEffect, useRef } from 'react';
import { Card, CardBody } from '../Card';
import { cardOverrides, modal } from './styles';

interface ModalProps {
    id?: string;
    /* Disables onClock trigger for escape key press */
    closeOnEscape?: boolean;
    /* Disables focus trap */
    trapFocus?: boolean;
    show: boolean;
    title?: string;
    /** Called when close button clicked and when escape key is pressed */
    onClose(modalId: string): void;
    children: React.ReactElement[];
}

const Modal = ({
    id,
    closeOnEscape = true,
    trapFocus = false,
    show,
    onClose,
    children,
}: ModalProps) => {
    const idRef = useRef<string>('');
    const modalRef = useRef<HTMLElement | null>(null);

    const closeOnEscapePress = (event: KeyboardEvent) => {
        if (!trapFocus && event.code === 'Escape' && closeOnEscape) {
            onClose(idRef.current);
        }
    };

    const handleClick = (event: any) => {
        if (modalRef.current && !modalRef.current?.contains(event.target)) {
            onClose(idRef.current);
        }
    };

    useEffect(() => {
        if (id) idRef.current = id;
        if (!trapFocus) {
            window.addEventListener('keydown', closeOnEscapePress);
            return () =>
                window.removeEventListener('keydown', closeOnEscapePress);
        }

        return undefined;
    }, [id, trapFocus]);

    if (!show) return <></>;

    return (
        <div css={modal} onClick={handleClick}>
            <Card
                role="dialog"
                cssOverrides={cardOverrides}
                aria-modal="true"
                ref={modalRef}
            >
                <CardBody
                    cssOverrides={css`
                        padding: 1.2rem 2rem;
                    `}
                >
                    {children}
                </CardBody>
            </Card>
        </div>
    );
};
export default Modal;

export type { ModalProps };
