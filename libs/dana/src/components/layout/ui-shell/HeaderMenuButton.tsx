import { MenuButton } from '../../navigation/menu-button';
import { headerMenuButton } from './stylesHeader';

export type TooltipAlignment = 'end';

export interface HeaderMenuButtonProps {
    'aria-label': string;
    /**
     * Choose if you want to show the menu button independently of the viewport size
     */
    isAlwaysVisible?: boolean;
    isActive?: boolean;
    onClick: any;
    variant: 'light' | 'dark';
}

export const HeaderMenuButton = ({
    isAlwaysVisible = false,
    isActive = false,
    variant,
    onClick,
    ...props
}: HeaderMenuButtonProps) => {
    return (
        <MenuButton
            cssOverrides={headerMenuButton(isAlwaysVisible)}
            variant={variant}
            aria-label={props['aria-label']}
            onClick={onClick}
        />
    );
};
