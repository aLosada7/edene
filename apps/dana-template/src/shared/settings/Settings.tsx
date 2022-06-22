import { useState } from 'react';

import { MaterialIcon, useThemeContext } from '@dana';

import { overlay, settings } from './styles';
import { SettingContent } from './SettingContent';

export const Settings = () => {
    const [open, setOpen] = useState(false);

    const { theme } = useThemeContext();

    return (
        <>
            <div css={settings(theme)} onClick={() => setOpen(true)}>
                <MaterialIcon>settings</MaterialIcon>
            </div>
            {open && <div css={overlay} onClick={() => setOpen(false)}></div>}
            <SettingContent open={open} onClose={() => setOpen(false)} />
        </>
    );
};
