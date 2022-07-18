import { DanaTheme } from '@dana-theme';
import { AppProps } from 'next/app';

import { Layout } from '../shared/components/Layout';

function App({ Component, pageProps }: AppProps) {
    return (
        <DanaTheme>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </DanaTheme>
    );
}

export default App;
