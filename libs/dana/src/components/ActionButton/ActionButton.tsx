import { SerializedStyles } from '@emotion/react';
import { ButtonHTMLAttributes, cloneElement, useState } from 'react';
import { Props } from '../../helpers';
import { Button } from '../Button';
import { actionButton } from './styles';

export interface ActionButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        Props {
    onClick: any;
    children: React.ReactElement;
    cssOverrides?: SerializedStyles | SerializedStyles[];
}

export const ActionButton = ({
    onClick,
    children,
    cssOverrides,
    ...props
}: ActionButtonProps) => {
    return (
        <Button
            color="transparent"
            onClick={onClick}
            cssOverrides={actionButton}
        >
            {cloneElement(children, { size: 'xsmall', color: 'dark' })}
        </Button>
    );
};
