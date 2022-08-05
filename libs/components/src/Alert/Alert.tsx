import { useThemeContext, Props } from '@edene/foundations';
import { ReactNode } from 'react';

import { Text } from '../Text';
import { alert, alertTheme } from './styles';

export interface AlertProps extends Props {
    color?: 'success' | 'danger';
    children: ReactNode;
}

export const Alert = ({ color, children }: AlertProps) => {
    const { theme } = useThemeContext();

    return (
        <Text cssOverrides={[alert, alertTheme({ theme, color })]} role="alert">
            {children}
        </Text>
    );
};
