import { AppNavigator, AppNavigatorItem } from '@edene/components';
import { css } from '@emotion/react';

const menu = [
    { icon: 'home', title: 'Inicio' },
    { icon: 'grid_view', title: 'Espacios' },
    { icon: 'chat', title: 'Ayuda' },
    { icon: 'person', title: 'Mi cuenta' },
];

const N26MobileNavbar = () => {
    return (
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
                        <span className="material-icons-outlined">
                            {item.icon}
                        </span>
                        {item.title}
                    </div>
                </AppNavigatorItem>
            ))}
        </AppNavigator>
    );
};

export default N26MobileNavbar;
