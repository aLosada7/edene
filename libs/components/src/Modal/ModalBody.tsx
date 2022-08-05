import { Fragment, ReactNode } from 'react';

interface ModalBodyProps {
    children: ReactNode;
}

const ModalBody = ({ children }: ModalBodyProps) => {
    return <Fragment>{children}</Fragment>;
};

export default ModalBody;

export type { ModalBody };
