import { Fragment, useState } from 'react';
import { Icon } from '@edene/components';
import { useTheme } from '@edene/foundations';

import { SettingsContent } from './SettingsContent';
import { overlay, settings } from './styles';

export const Settings = () => {
    const [open, setOpen] = useState(false);

    const { theme } = useTheme();

    return (
        <Fragment>
            <div css={settings(theme)} onClick={() => setOpen(true)}>
                <Icon color={theme.white}>settings</Icon>
            </div>
            {open && <div css={overlay} onClick={() => setOpen(false)}></div>}
            <SettingsContent open={open} onClose={() => setOpen(false)} />
        </Fragment>
    );
};
