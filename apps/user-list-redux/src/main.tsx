import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app/app';
import configureStore from './store';

ReactDOM.render(
    <StrictMode>
        <Provider store={configureStore()}>
            <App />
        </Provider>
    </StrictMode>,
    document.getElementById('root')
);
