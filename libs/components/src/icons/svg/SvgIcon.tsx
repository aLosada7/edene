import { cloneElement } from 'react';
import {
    EdeneColor,
    getColor,
    IconSize,
    iconSize,
    useTheme,
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
    const { theme } = useTheme();
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
