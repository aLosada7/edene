import React, { ReactElement } from 'react';
import { CloseIcon } from '../../foundations/icons/CloseIcon';
import { ActionButton } from '../ActionButton';
import { Card, CardBody } from '../data-display';
import { Button } from '../forms';
import { Row } from '../layout';
import { Overlay } from '../overlay/Overlay';
import { Text } from '../text';
import { cardHeader, cardOverrides, modal } from './styles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ModalProps {
    title: string;
    opened: boolean;
    /** Called when close button clicked and when escape key is pressed */
    onClose(): void;
    children: ReactElement | ReactElement[] | string;
}

export const Modal = ({
    title,
    opened,
    children,
    onClose,
    ...props
}: ModalProps) => {
    if (!opened) return <></>;

    return (
        <>
            <div css={modal}>
                <Card cssOverrides={cardOverrides}>
                    <CardBody>
                        <Row
                            align="space-between-center"
                            cssOverrides={cardHeader}
                        >
                            <Text size="h5">{title}</Text>
                            <ActionButton onClick={onClose}>
                                <CloseIcon />
                            </ActionButton>
                        </Row>
                        <div>{children}</div>
                    </CardBody>
                </Card>
            </div>
            <Overlay />
        </>
    );
};
