import { Props } from '@edene/foundations';

import { Icon } from '../../icons';
import { Heading } from '../../typography/Heading';
import { ActionButton } from '../ActionButton';
import { toastHeader, toastHeading } from './styles';

export interface ToastHeaderProps extends Props {
    id: string;
    title?: string;
    onClose(id: string): void;
}

const ToastHeader = (props: ToastHeaderProps) => {
    const { id, title, onClose, css, ...rest } = props;
    const closeToast = () => onClose(id);

    return (
        <div
            css={[toastHeader, css]}
            aria-label="Close"
            data-dismiss="toast"
            {...rest}
        >
            <Heading type="h1" css={toastHeading}>
                {title}
            </Heading>
            <ActionButton onClick={closeToast}>
                <Icon>close</Icon>
            </ActionButton>
        </div>
    );
};

export default ToastHeader;
