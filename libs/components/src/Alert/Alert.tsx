import { SerializedStyles } from '@emotion/react';
import { ReactNode } from 'react';

import { useThemeContext, Props } from '@edene/foundations';

import { Text } from '../Text';
import { alert, alertTheme } from './styles';

export interface AlertProps extends Props {
    type?: 'success' | 'danger';

    actions?: ReactNode;

    children: ReactNode;
}

export const Alert = (props: AlertProps) => {
    const { theme } = useThemeContext();

    const { type, actions, children, cssOverrides } = props;

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
            {actions && <div>{actions}</div>}
        </div>
    );
};
