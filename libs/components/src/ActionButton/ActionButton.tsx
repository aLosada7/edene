import { SerializedStyles } from '@emotion/react';
import { ButtonHTMLAttributes, cloneElement } from 'react';

import { Icon, Props } from '@edene/foundations';

import { Button } from '../Button';
import { actionButton } from './styles';

export interface ActionButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        Props {
    children: React.ReactElement | string;
}

export const ActionButton = ({
    children,
    cssOverrides,
    ...props
}: ActionButtonProps) => {
    return (
        <Button
            color="transparent"
            cssOverrides={[actionButton, cssOverrides] as SerializedStyles[]}
            {...props}
        >
            {typeof children === 'string' ? (
                <Icon>{children as string}</Icon>
            ) : (
                cloneElement(children as React.ReactElement, {
                    size: 'xsmall',
                    color: 'dark',
                })
            )}
        </Button>
    );
};
