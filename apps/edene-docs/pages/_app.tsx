import { AppProps } from 'next/app';

import { EdeneTheme, pinkTheme } from '@edene/foundations';

import './styles.scss';
import { Layout } from '../components/Layout';

function App({ Component, pageProps }: AppProps) {
    return (
        <EdeneTheme theme={pinkTheme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </EdeneTheme>
    );
}

export default App;
