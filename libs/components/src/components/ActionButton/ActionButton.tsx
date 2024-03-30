import { ButtonHTMLAttributes, ReactNode } from 'react';
import { IconVariant, Props } from '@edene/foundations';
import { SerializedStyles } from '@emotion/react';

import { Button } from '../Button';
import { actionButton } from './styles';

export interface ActionButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        Props {
    children: ReactNode;
    variant?: IconVariant;
}

export const ActionButton = (props: ActionButtonProps) => {
    const { children, css, ...rest } = props;

    return (
        <Button
            color="transparent"
            css={[actionButton, css] as SerializedStyles[]}
            {...rest}
        >
            {children}
        </Button>
    );
};
