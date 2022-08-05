import { cloneElement } from 'react';
import {
    getColor,
    EdeneColor,
    useThemeContext,
    iconSize,
    IconSize,
} from '@edene/foundations';

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
