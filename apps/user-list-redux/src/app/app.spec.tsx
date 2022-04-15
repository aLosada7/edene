import { screen, render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/rootReducer';
import App from './app';

const store = createStore(rootReducer);

const Wrapper = ({ children }: any) => (
    <Provider store={store}>{children}</Provider>
);

describe('App', () => {
    it('renders correctly', async () => {
        const { asFragment } = render(<App />, { wrapper: Wrapper });

        // same than tree.toJSON()
        expect(asFragment()).toMatchSnapshot();
    });
});
