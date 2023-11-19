import { forwardRef } from 'react';
import { PolymorphicRef, Props,useTheme } from '@edene/foundations';
import { SerializedStyles } from '@emotion/react';

import { Button } from '../Button';
import { tab, tabHidden,tabSelected } from './styles';
import { useTabs } from './useTabs';

export interface TabProps extends Props {
    id?: string;
    label: string;
    tabKey: string;
    hidden?: boolean;
}

export const Tab = forwardRef(
    (
        { hidden = false, label, tabKey, css, ...props }: TabProps,
        ref: PolymorphicRef<'button'>
    ) => {
        const { orientation, active, color, onTabChange } = useTabs();
        const { theme } = useTheme();

        const activeTab = active === tabKey;

        return (
            <Button
                variant="text"
                color="dark"
                ref={ref}
                onClick={() => onTabChange(tabKey)}
                css={
                    [
                        tab,
                        activeTab && tabSelected(orientation, { theme, color }),
                        hidden && tabHidden,
                        css,
                    ] as SerializedStyles[]
                }
                {...props}
            >
                {label}
            </Button>
        );
    }
) as any;
