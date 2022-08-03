import { useState } from 'react';

import { Icon, useThemeContext } from '@edene/foundations';

import { overlay, settings } from './styles';
import { SettingContent } from './SettingContent';

export const Settings = () => {
    const [open, setOpen] = useState(false);

    const { theme } = useThemeContext();

    return (
        <>
            <div css={settings(theme)} onClick={() => setOpen(true)}>
                <Icon>settings</Icon>
            </div>
            {open && <div css={overlay} onClick={() => setOpen(false)}></div>}
            <SettingContent open={open} onClose={() => setOpen(false)} />
        </>
    );
};
