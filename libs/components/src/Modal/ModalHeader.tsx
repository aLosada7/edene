import React from 'react';

import { Icon } from '@edene/foundations';

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
            <Icon>close</Icon>
        </ActionButton>
    </div>
);

export default ModalHeader;

export type { ModalHeaderProps };
