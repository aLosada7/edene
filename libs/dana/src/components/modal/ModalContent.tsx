import React, { ReactElement } from 'react';

export interface ModalContentProps {
    children: ReactElement | ReactElement[];
}

export const ModalContent = ({ children }: ModalContentProps) => {
    return <>{children}</>;
};
