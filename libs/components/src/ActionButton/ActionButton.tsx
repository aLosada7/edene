import { SerializedStyles } from '@emotion/react';
import { ButtonHTMLAttributes, cloneElement } from 'react';

import { Props, IconVariant } from '@edene/foundations';

import { Icon } from '../icons';
import { Button } from '../Button';
import { actionButton } from './styles';

export interface ActionButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        Props {
    children: React.ReactElement | string;
    variant?: IconVariant;
}

export const ActionButton = ({
    children,
    cssOverrides,
    variant = 'filled',
    ...props
}: ActionButtonProps) => {
    return (
        <Button
            color="transparent"
            cssOverrides={[actionButton, cssOverrides] as SerializedStyles[]}
            {...props}
        >
            {typeof children === 'string' ? (
                <Icon variant={variant}>{children as string}</Icon>
            ) : (
                cloneElement(children as React.ReactElement, {
                    size: 'xsmall',
                    color: 'dark',
                    variant,
                })
            )}
        </Button>
    );
};
