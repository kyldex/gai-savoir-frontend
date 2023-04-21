import type { AppProps } from 'next/app';

import '../styles/globals.scss';

import { DeviceProvider } from '../context/DeviceContext';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DeviceProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DeviceProvider>
  );
}

export default MyApp;
