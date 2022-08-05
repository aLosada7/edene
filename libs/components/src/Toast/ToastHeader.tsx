import { Icon } from '../icons';
import { ActionButton } from '../ActionButton';
import { Title } from '../Title';
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
                <Icon>close</Icon>
            </ActionButton>
        </div>
    );
};

export default ToastHeader;

export type { ToastHeaderProps };
