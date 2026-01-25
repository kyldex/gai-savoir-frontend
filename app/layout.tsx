import { ReactNode } from 'react';
import { Metadata } from 'next';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/globals.scss';

import { DeviceProvider } from '../context/DeviceContext';
import Layout from '../components/layout/Layout';
import Analytics from '../components/analytics';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE_URL || 'http://localhost:3000'),
  title: 'Gai Savoir',
  description:
    'Le Gai Savoir est une plateforme de contenus intellectuel, artistique et citoyen visant à se libérer de la logique de segmentation propres à la politique et aux industries culturelles et créatives.'
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body>
        <Analytics />

        <DeviceProvider>
          <Layout>{children}</Layout>
        </DeviceProvider>
      </body>
    </html>
  );
}
