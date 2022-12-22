import { ThemeProvider } from '@edene/foundations';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { Router } from './shared/hoc';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StrictMode>
        <ThemeProvider>
            <Router />
        </ThemeProvider>
    </StrictMode>
);
