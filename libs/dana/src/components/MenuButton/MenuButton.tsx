import { SerializedStyles } from '@emotion/react';
import { ButtonHTMLAttributes, useState } from 'react';
import { Props } from '../../helpers';
import { menu, menuLine, menuOpen } from './styles';

export interface MenuButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        Props {
    alwaysVisible?: boolean;
    active?: boolean;
    onClick: any;
    variant?: 'light' | 'dark';
    cssOverrides?: any;
}

export const MenuButton = ({
    alwaysVisible = false,
    active = false,
    variant = 'dark',
    cssOverrides,
    ...props
}: MenuButtonProps) => {
    return (
        <button css={[menu, cssOverrides]} {...props}>
            <div
                css={[menuLine(variant), active && !alwaysVisible && menuOpen]}
            ></div>
        </button>
    );
};
