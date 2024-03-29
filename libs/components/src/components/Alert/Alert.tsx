/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';
import { ComponentColors,Props, useTheme } from '@edene/foundations';
import { SerializedStyles } from '@emotion/react';

import { Box } from '../../layout/Box';
import { Text } from '../../typography/Text';
import { alert, alertActions, alertTheme } from './styles';

export interface AlertProps extends Props {
    type?: 'brand' | ComponentColors;
    actions?: ReactNode;
    children: ReactNode;
}

export const Alert = (props: AlertProps) => {
    const { type = 'brand', actions, children, css, ...rest } = props;
    const { theme } = useTheme();

    return (
        <Box
            role="alert"
            css={
                [
                    alert,
                    alertTheme({ theme, color: type }),
                    css,
                ] as SerializedStyles[]
            }
            {...rest}
        >
            <Text type="regular" color={theme.white}>
                {children}
            </Text>
            {actions && <div css={alertActions}>{actions}</div>}
        </Box>
    );
};
