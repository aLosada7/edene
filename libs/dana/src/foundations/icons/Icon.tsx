import { cloneElement, ReactElement } from 'react';
import { getColor } from '../colors/api';
import { EdeneColor } from '../colors/types';
import { iconSize } from '../size';
import useThemeContext from '../theme/useThemeContext';
import { IconSize } from './types';

export const Icon = ({
    children,
    size = 'medium',
    color,
}: {
    size?: IconSize;
    color?: EdeneColor;
    children: ReactElement;
}) => {
    const { theme } = useThemeContext();
    const iconColor = color || theme.black;

    return (
        <>
            {cloneElement(children, {
                fill: getColor({ theme, color: iconColor }),
                width: iconSize[size],
            })}
        </>
    );
};
