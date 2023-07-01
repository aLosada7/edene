import { Heading } from '@edene/components';

const menu = [
    { icon: 'home', title: 'Inicio' },
    { icon: 'grid_view', title: 'Espacios' },
    { icon: 'chat', title: 'Ayuda' },
    { icon: 'person', title: 'Mi cuenta' },
];

const N26Navbar = () => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px',
        }}
    >
        <Heading>C11</Heading>
        <div
            style={{
                display: 'flex',
                width: '100%',
                gap: '16px',
                justifyContent: 'flex-end',
            }}
        >
            {menu.map((item) => (
                <div
                    key={item.title}
                    style={{ display: 'flex', alignItems: 'center' }}
                >
                    <span
                        className="material-icons-outlined"
                        style={{ width: '32px' }}
                    >
                        {item.icon}
                    </span>
                    {item.title}
                </div>
            ))}
        </div>
    </div>
);

export default N26Navbar;
