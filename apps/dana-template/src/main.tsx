import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import { Layout, Router } from './shared/hoc';

ReactDOM.render(
    <StrictMode>
        <Router>
            <Layout></Layout>
        </Router>
    </StrictMode>,
    document.getElementById('root')
);
