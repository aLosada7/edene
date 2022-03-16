import { DanaTheme } from '@dana-theme';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import { Layout, Router } from './shared/hoc';

ReactDOM.render(
    <StrictMode>
        <DanaTheme>
            <Router />
        </DanaTheme>
    </StrictMode>,
    document.getElementById('root')
);
