import { MenuButton } from '../components/MenuButton';
import { headerMenuButton } from './stylesHeader';

export interface HeaderMenuButtonProps {
    'aria-label': string;
    /**
     * Choose if you want to show the menu button independently of the viewport size
     */
    alwaysVisible?: boolean;
    active?: boolean;
    onClick: any;
    variant: 'light' | 'dark';
}

export const HeaderMenuButton = ({
    alwaysVisible = false,
    ...props
}: HeaderMenuButtonProps) => {
    return (
        <MenuButton
            alwaysVisible={alwaysVisible}
            cssOverrides={headerMenuButton(alwaysVisible)}
            {...props}
        />
    );
};
