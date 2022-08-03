import { useThemeContext, Props } from '@edene/foundations';

import { Text } from '../Text';
import { alert, alertColor } from './styles';

export interface AlertProps extends Props {
    color?: 'success' | 'danger';
    children: string;
}

export const Alert = ({ color = 'success', children }: AlertProps) => {
    const theme = useThemeContext();

    return (
        <Text cssOverrides={[alert, alertColor(theme, color)]}>{children}</Text>
    );
};
