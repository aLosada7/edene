import { IButtonSize } from '../../../foundations/size';
import { cloneElement } from 'react';
import { btn, btnColor, buttonIconLeft, buttonIconRight } from './styles';
import { Color, PaletteColor } from '../../../foundations/palette';
import { SerializedStyles } from '@emotion/react';
import useThemeContext from '../../../foundations/theme/useThemeContext';

export type IButtonVariant = 'basic' | 'outline';

export interface ButtonProps {
    id?: string;
    color?: Color | PaletteColor;
    variant?: IButtonVariant;
    size?: IButtonSize;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    disabled?: boolean;
    /**
     * A callback function called when the component is opened or closed.
     * Receives the click event as an argument.
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    cssOverrides?: SerializedStyles | SerializedStyles[];
    children?: JSX.Element | string;
}

export const Button = ({
    color = 'primary',
    variant = 'basic',
    size = 'medium',
    leftIcon,
    rightIcon,
    disabled,
    onClick = () => undefined,
    cssOverrides,
    ...props
}: ButtonProps) => {
    const theme = useThemeContext();

    return (
        <button
            type="button"
            id={props.id}
            css={[
                btn(theme, size),
                btnColor(theme, color, variant),
                cssOverrides,
            ]}
            disabled={disabled}
            onClick={onClick}
        >
            {leftIcon ? (
                <span css={buttonIconLeft}>
                    {cloneElement(leftIcon, {
                        size,
                    })}
                </span>
            ) : null}
            {props.children}
            {rightIcon ? (
                <span css={buttonIconRight}>
                    {cloneElement(rightIcon, { size })}
                </span>
            ) : null}
        </button>
    );
};

// color como colors
