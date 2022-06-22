import { SerializedStyles } from '@emotion/react';
import { ButtonHTMLAttributes, cloneElement, useState } from 'react';
import { MaterialIcon } from '../../foundations/icons/MaterialIcon';
import { Props } from '../../helpers';
import { Button } from '../Button';
import { actionButton } from './styles';

export interface ActionButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        Props {
    children: React.ReactElement | string;
    cssOverrides?: SerializedStyles | SerializedStyles[];
}

export const ActionButton = ({
    children,
    cssOverrides,
    ...props
}: ActionButtonProps) => {
    return (
        <Button color="transparent" cssOverrides={actionButton} {...props}>
            {typeof children === 'string' ? (
                <MaterialIcon>{children as string}</MaterialIcon>
            ) : (
                cloneElement(children as React.ReactElement, {
                    size: 'xsmall',
                    color: 'dark',
                })
            )}
        </Button>
    );
};
