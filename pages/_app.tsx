import type { AppProps } from 'next/app';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/globals.scss';

import { DeviceProvider } from '../context/DeviceContext';
import Layout from '../components/layout/Layout';

import Analytics from '../components/analytics';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />

      <DeviceProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DeviceProvider>
    </>
  );
}

export default MyApp;
