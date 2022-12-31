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

export const MenuButton = (props: MenuButtonProps) => {
    const {
        alwaysVisible = false,
        active = false,
        variant = 'dark',
        css: cssOverrides,
        ...rest
    } = props;

    return (
        <button css={[menu, cssOverrides]} {...rest}>
            <div
                css={[menuLine(variant), active && !alwaysVisible && menuOpen]}
            ></div>
        </button>
    );
};
