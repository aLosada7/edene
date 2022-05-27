import { MenuButton } from '../../MenuButton';
import { headerMenuButton } from './stylesHeader';

export interface HeaderMenuButtonProps {
    'aria-label': string;
    /**
     * Choose if you want to show the menu button independently of the viewport size
     */
    alwaysVisible?: boolean;
    isActive?: boolean;
    onClick: any;
    variant: 'light' | 'dark';
}

export const HeaderMenuButton = ({
    alwaysVisible = false,
    isActive = false,
    variant,
    onClick,
    ...props
}: HeaderMenuButtonProps) => {
    return (
        <MenuButton
            alwaysVisible={alwaysVisible}
            isActive={isActive}
            cssOverrides={headerMenuButton(alwaysVisible)}
            variant={variant}
            aria-label={props['aria-label']}
            onClick={onClick}
        />
    );
};
