import React from 'react';

import { Title } from '../title';

interface ModalTitleProps {
    children: React.ReactNode;
}

const ModalTitle = ({ children }: ModalTitleProps) => (
    <Title size="h4">{children}</Title>
);

export default ModalTitle;
