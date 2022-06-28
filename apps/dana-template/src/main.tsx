import { DanaTheme } from '@dana-theme';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { Router } from './shared/hoc';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StrictMode>
        <DanaTheme>
            <Router />
        </DanaTheme>
    </StrictMode>
);
