import { css } from '@emotion/react';
import React, { ReactElement } from 'react';
import { CloseIcon } from '../../foundations/icons/CloseIcon';
import { ActionButton } from '../ActionButton';
import { Card, CardBody } from '../data-display';
import { Row } from '../layout';
import { Overlay } from '../overlay/Overlay';
import { Title } from '../title';
import { cardHeader, cardOverrides, modal } from './styles';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ModalProps {
    title: string;
    opened: boolean;
    /** Called when close button clicked and when escape key is pressed */
    onClose(): void;
    children: ReactElement[];
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
                    <CardBody
                        cssOverrides={css`
                            padding: 1.2rem 2rem;
                        `}
                    >
                        <Row
                            align="space-between-center"
                            cssOverrides={cardHeader}
                        >
                            <Title size="h4">{title}</Title>
                            <ActionButton onClick={onClose}>
                                <CloseIcon />
                            </ActionButton>
                        </Row>
                        {children[0]}
                    </CardBody>
                    {children[1]}
                </Card>
            </div>
            <Overlay onClick={onClose} />
        </>
    );
};
