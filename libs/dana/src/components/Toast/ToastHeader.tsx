import { CloseIcon } from '../../foundations/icons/CloseIcon';
import { ActionButton } from '../ActionButton';
import { toastHeader } from './styles';

interface ToastHeaderProps {
    id: string;
    title?: React.ReactNode;
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
            {title}
            <ActionButton onClick={closeToast}>
                <CloseIcon />
            </ActionButton>
        </div>
    );
};

export default ToastHeader;

export type { ToastHeaderProps };
