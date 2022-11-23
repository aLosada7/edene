import React from 'react';

import { Icon } from '../../icons';
import { ActionButton } from '../ActionButton';
import ModalHeading from './ModalHeading';
import { modalHeader } from './styles';

interface ModalHeaderProps {
    title?: React.ReactNode;
    onClose?(): void;
}

const ModalHeader = ({ title, onClose }: ModalHeaderProps) => (
    <div css={modalHeader}>
        {title && <ModalHeading>{title}</ModalHeading>}
        <ActionButton onClick={onClose}>
            <Icon>close</Icon>
        </ActionButton>
    </div>
);

export default ModalHeader;

export type { ModalHeaderProps };
