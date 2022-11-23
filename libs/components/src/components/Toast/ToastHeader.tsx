import { Icon } from '../../icons';
import { ActionButton } from '../ActionButton';
import { Heading } from '../../typography/Heading';
import { toastHeader, toastHeading } from './styles';

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
            <Heading cssOverrides={toastHeading}>{title}</Heading>
            <ActionButton onClick={closeToast}>
                <Icon>close</Icon>
            </ActionButton>
        </div>
    );
};

export default ToastHeader;

export type { ToastHeaderProps };
