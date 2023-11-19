import { Fragment,ReactElement, useEffect, useRef } from 'react';
import { Props } from '@edene/foundations';
import { SerializedStyles } from '@emotion/react';

import { Card, CardSection } from '../Card';
import { cardOverrides, cardPadding, modal } from './styles';

interface ModalProps extends Props {
    id?: string;
    /* Disables onClock trigger for escape key press */
    closeOnEscape?: boolean;
    /* Disables focus trap */
    trapFocus?: boolean;
    show: boolean;
    title?: string;
    /** Called when close button clicked and when escape key is pressed */
    onClose(modalId: string): void;
    children: ReactElement[];
}

const Modal = (props: ModalProps) => {
    const {
        id,
        closeOnEscape = true,
        trapFocus = false,
        show,
        onClose,
        children,
        css,
        ...rest
    } = props;
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

    if (!show) return <Fragment></Fragment>;

    return (
        <div css={[modal, css]} onClick={handleClick} {...rest}>
            <Card
                role="dialog"
                css={[cardOverrides, css] as SerializedStyles[]}
                aria-modal="true"
                ref={modalRef}
            >
                <CardSection css={cardPadding}>{children}</CardSection>
            </Card>
        </div>
    );
};
export default Modal;

export type { ModalProps };
