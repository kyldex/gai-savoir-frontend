import type { AppProps } from 'next/app';
import Script from 'next/script';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/globals.scss';

import { DeviceProvider } from '../context/DeviceContext';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-1LSW9T6KFY"
      />
      <Script id="analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-1LSW9T6KFY');
        `}
      </Script>

      <DeviceProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DeviceProvider>
    </>
  );
}

export default MyApp;
