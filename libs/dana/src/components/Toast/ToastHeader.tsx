import { CloseIcon } from '../../foundations/icons/CloseIcon';
import { ActionButton } from '../ActionButton';
import { Title } from '../title';
import { toastHeader, toastTitle } from './styles';

interface ToastHeaderProps {
    id: string;
    title?: string;
    onClose(id: string): void;
}

const ToastHeader = ({ id, title, onClose, ...props }: ToastHeaderProps) => {
    const closeToast = () => onClose(id);

    return (
        <div
            css={toastHeader}
            aria-label="Close"
            data-dismiss="toast"
            {...props}
        >
            <Title cssOverrides={toastTitle}>{title}</Title>
            <ActionButton onClick={closeToast}>
                <CloseIcon />
            </ActionButton>
        </div>
    );
};

export default ToastHeader;

export type { ToastHeaderProps };
