import { cloneElement } from 'react';
import { getColor } from '../../colors/api';
import { EdeneColor } from '../../colors/types';
import useThemeContext from '../../theme/useThemeContext';
import { iconSize, IconSize } from '../../sizes';

export const SvgIcon = ({
    children,
    size = 'medium',
    color,
}: {
    size?: IconSize;
    color?: EdeneColor;
    children: React.ReactElement;
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
