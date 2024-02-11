import { ButtonHTMLAttributes, cloneElement, ReactNode } from 'react';
import { IconVariant, Props } from '@edene/foundations';
import { SerializedStyles } from '@emotion/react';

import { Icon } from '../../icons';
import { Button } from '../Button';
import { actionButton } from './styles';

export interface ActionButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        Props {
    children: ReactNode;
    variant?: IconVariant;
}

export const ActionButton = (props: ActionButtonProps) => {
    const { children, variant = 'filled', css, ...rest } = props;

    return (
        <Button
            color="transparent"
            css={[actionButton, css] as SerializedStyles[]}
            {...rest}
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
