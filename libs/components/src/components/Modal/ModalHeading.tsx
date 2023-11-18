import React from 'react';

import { Heading } from '../../typography/Heading';

interface ModalHeadingProps {
    children: React.ReactNode;
}

const ModalHeading = ({ children }: ModalHeadingProps) => (
    <Heading type="h4">{children}</Heading>
);

export default ModalHeading;
