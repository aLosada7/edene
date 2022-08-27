import { SerializedStyles } from '@emotion/react';
import { ReactNode } from 'react';

import { useThemeContext, Props } from '@edene/foundations';

import { Text } from '../Text';
import { alert, alertTheme } from './styles';

export interface AlertProps extends Props {
    color?: 'success' | 'danger';
    actions?: ReactNode;
    children: ReactNode;
}

export const Alert = ({
    color,
    actions,
    children,
    cssOverrides,
}: AlertProps) => {
    const { theme } = useThemeContext();

    return (
        <div
            css={
                [
                    alert,
                    alertTheme({ theme, color }),
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
