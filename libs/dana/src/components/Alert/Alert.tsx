import { css } from '@emotion/react';

import { Text } from '..';
import useThemeContext from '../../foundations/theme/useThemeContext';
import { Props } from '../../helpers';
import { alert, alertColor } from './styles';

export interface AlertProps extends Props {
    color?: 'success' | 'danger';
    children: string;
}

export const Alert = ({
    color = 'success',
    cssOverrides,
    children,
    ...props
}: AlertProps) => {
    const theme = useThemeContext();

    return (
        <Text cssOverrides={[alert, alertColor(theme, color)]}>{children}</Text>
    );
};
