import React from 'react';

import { Icon } from '../../icons';
import { ActionButton } from '../ActionButton';
import ModalHeading from './ModalHeading';
import { modalHeader, modalHeaderActionButton } from './styles';

interface ModalHeaderProps {
    title?: React.ReactNode;
    onClose?(): void;
}

const ModalHeader = ({ title, onClose }: ModalHeaderProps) => (
    <div css={modalHeader}>
        {title && <ModalHeading>{title}</ModalHeading>}
        <ActionButton onClick={onClose} css={modalHeaderActionButton}>
            <Icon size="medium">close</Icon>
        </ActionButton>
    </div>
);

export default ModalHeader;

export type { ModalHeaderProps };
