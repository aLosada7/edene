import React from 'react';

import { Title } from '../Title';

interface ModalTitleProps {
    children: React.ReactNode;
}

const ModalTitle = ({ children }: ModalTitleProps) => (
    <Title size="h4">{children}</Title>
);

export default ModalTitle;
