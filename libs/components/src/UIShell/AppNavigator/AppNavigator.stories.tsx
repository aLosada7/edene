import { css } from '@emotion/react';
import { Meta,Story } from '@storybook/react';

import AppNavigator, { AppNavigatorProps } from './AppNavigator';
import AppNavigatorItem from './AppNavigatorItem';

const menu = [
    { icon: 'home', title: 'Inicio' },
    { icon: 'grid_view', title: 'Espacios' },
    { icon: 'chat', title: 'Ayuda' },
    { icon: 'person', title: 'Mi cuenta' },
];

export default {
    component: AppNavigator,
    title: 'Lab/AppNavigator',
} as unknown as Meta;

export const Default: Story<AppNavigatorProps> = () => (
    <AppNavigator>
        {menu.map((item) => (
            <AppNavigatorItem
                key={item.title}
                href="#"
                aria-current={item.title === 'Inicio'}
            >
                <div
                    css={css`
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        padding: 16px 0px;
                    `}
                >
                    <span className="material-icons-outlined">{item.icon}</span>
                    {item.title}
                </div>
            </AppNavigatorItem>
        ))}
    </AppNavigator>
);
