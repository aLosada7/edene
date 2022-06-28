import React, { forwardRef } from 'react';
import { SerializedStyles } from '@emotion/react';

import {
    useThemeContext,
    PolymorphicComponentProps,
    PolymorphicRef,
} from '@dana-theme';

import { Props } from '../../helpers';
import { Button } from '../Button';
import { tab, tabSelected, tabHidden } from './styles';
import { useTabs } from './useTabs';

export interface SharedTabProps extends Props {
    id?: string;
    label: string;
    tabKey: string;
    children: React.ReactNode;
}

export type TabProps<C> = PolymorphicComponentProps<C, SharedTabProps>;

type TabComponent = <C = 'button'>(props: TabProps<C>) => React.ReactElement;

export const Tab: TabComponent = forwardRef(
    (props: TabProps<'button'>, ref: PolymorphicRef<'button'>) => {
        const {
            component,
            hidden,
            label,
            children,
            tabKey,
            cssOverrides,
            ...rest
        } = props;

        const { orientation, active, color, onTabChange } = useTabs();
        const { theme } = useThemeContext();

        const isActiveTab = active === tabKey;

        const Element = component || Button;

        return (
            <Element
                variant="link"
                color="dark"
                ref={ref}
                onClick={() => onTabChange(tabKey)}
                cssOverrides={
                    [
                        tab,
                        isActiveTab &&
                            tabSelected(orientation, { theme, color }),
                        hidden && tabHidden,
                        cssOverrides,
                    ] as SerializedStyles[]
                }
                {...rest}
            >
                {label}
            </Element>
        );
    }
) as any;
