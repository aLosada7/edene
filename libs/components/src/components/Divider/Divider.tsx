import { EdeneColor, Props, useTheme } from '@edene/foundations';

import { divider, dividerThemeColor } from './styles';

export interface DividerProps extends Props {
    width?: string;
    mt?: number;
    mb?: number;
    mh?: number;
    color?: EdeneColor;
}

export const Divider = ({
    width = '100%',
    mt = 0,
    mb = 0,
    mh = 0,
    color,
    css,
    ...props
}: DividerProps) => {
    const { theme } = useTheme();

    return (
        <div
            role="separator"
            css={[
                divider(width, mt, mb, mh),
                dividerThemeColor({ theme, color }),
                css,
            ]}
            {...props}
        ></div>
    );
};
