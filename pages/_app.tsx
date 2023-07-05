import type { AppProps } from 'next/app';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
