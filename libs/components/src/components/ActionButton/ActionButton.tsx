import { SerializedStyles } from '@emotion/react';
import { ButtonHTMLAttributes, cloneElement } from 'react';

import { Props, IconVariant } from '@edene/foundations';

import { Icon } from '../../icons';
import { Button } from '../Button';
import { actionButton } from './styles';

export interface ActionButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        Props {
    children: React.ReactElement | string;
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
