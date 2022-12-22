import { SerializedStyles } from '@emotion/react';
import { ReactNode } from 'react';

import { useTheme, Props, ComponentColors } from '@edene/foundations';

import { Text } from '../../typography/Text';
import { alert, alertActions, alertTheme } from './styles';

export interface AlertProps extends Props {
    type?: 'brand' | ComponentColors;

    actions?: ReactNode;

    children: ReactNode;
}

export const Alert = (props: AlertProps) => {
    const { type = 'brand', actions, children, cssOverrides } = props;

    const { theme } = useTheme();

    return (
        <div
            css={
                [
                    alert,
                    alertTheme({ theme, color: type }),
                    cssOverrides,
                ] as SerializedStyles[]
            }
            role="alert"
        >
            <Text>{children}</Text>
            {actions && <div css={alertActions}>{actions}</div>}
        </div>
    );
};
