import React from 'react';

import { CloseIcon } from '../../foundations/icons/CloseIcon';
import { ActionButton } from '../ActionButton';
import ModalTitle from './ModalTitle';
import { modalHeader } from './styles';

interface ModalHeaderProps {
    title?: React.ReactNode;
    onClose?(): void;
}

const ModalHeader = ({ title, onClose }: ModalHeaderProps) => (
    <div css={modalHeader}>
        {title && <ModalTitle>{title}</ModalTitle>}
        <ActionButton onClick={onClose}>
            <CloseIcon />
        </ActionButton>
    </div>
);

export default ModalHeader;

export type { ModalHeaderProps };
