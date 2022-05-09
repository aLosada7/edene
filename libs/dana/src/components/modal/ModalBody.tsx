import React from 'react';

interface ModalBodyProps {
    children: React.ReactNode;
}

const ModalBody = ({ children }: ModalBodyProps) => {
    return <>{children}</>;
};

export default ModalBody;

export type { ModalBody };
