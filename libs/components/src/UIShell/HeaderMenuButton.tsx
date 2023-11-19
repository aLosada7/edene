import { Props } from '@edene/foundations';
import { SerializedStyles } from '@emotion/react';

import { MenuButton } from '../components/MenuButton';
import { headerMenuButton } from './stylesHeader';

export interface HeaderMenuButtonProps extends Props {
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
    css,
    ...props
}: HeaderMenuButtonProps) => {
    return (
        <MenuButton
            alwaysVisible={alwaysVisible}
            css={[headerMenuButton(alwaysVisible), css] as SerializedStyles[]}
            {...props}
        />
    );
};
