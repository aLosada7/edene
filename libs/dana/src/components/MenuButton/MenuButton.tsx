import { SerializedStyles } from '@emotion/react';
import { ButtonHTMLAttributes, useState } from 'react';
import { Props } from '../../helpers';
import { menu, menuLine, menuOpen } from './styles';

export interface MenuButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        Props {
    alwaysVisible?: boolean;
    isActive?: boolean;
    onClick: any;
    variant?: 'light' | 'dark';
    cssOverrides?: any;
}

export const MenuButton = ({
    alwaysVisible = false,
    isActive = false,
    onClick,
    variant = 'dark',
    cssOverrides,
    ...props
}: MenuButtonProps) => {
    const [active, setActive] = useState(isActive);
    return (
        <button
            css={[menu, cssOverrides]}
            onClick={() => {
                setActive(!active);
                onClick(active);
            }}
            aria-label={props['aria-label']}
        >
            <div
                css={[menuLine(variant), active && !alwaysVisible && menuOpen]}
            ></div>
        </button>
    );
};
