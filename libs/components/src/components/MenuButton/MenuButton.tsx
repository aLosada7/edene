import { ButtonHTMLAttributes } from 'react';

import { Props } from '@edene/foundations';
import { menu, menuLine, menuOpen } from './styles';

export interface MenuButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        Props {
    alwaysVisible?: boolean;

    active?: boolean;

    variant?: 'light' | 'dark';
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
