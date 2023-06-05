import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';

import styles from './index.module.scss';

import HomePageLink from '../../components/common/HomePageLink';
import ItemCard from '../../components/common/ItemCard';

import type AudiovisualProduction from '../../types/AudiovisualProduction';
import { AudiovisualProductionsData } from '../../types/AudiovisualProductionsData';

interface Props {
  audiovisualProductions: AudiovisualProduction[];
}

const Audiovisuel: NextPage<Props> = ({ audiovisualProductions }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Production audiovisuelle</title>
        <meta
          name="description"
          content="Production audiovisuelle du Gai Savoir"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePageLink />

      <h1 className={styles.title}>PRODUCTION AUDIOVISUELLE</h1>

      <h2>LES PRODUCTIONS DU GAI SAVOIR</h2>

      <div className={styles.cardsContainer}>
        {audiovisualProductions.map((audiovisualProduction) => {
          if (audiovisualProduction.attributes.gai_savoir_production) {
            return (
              <ItemCard
                key={audiovisualProduction.id}
                type="audiovisual"
                title={audiovisualProduction.attributes.title}
                excerpt={audiovisualProduction.attributes.excerpt}
                categorySlugPart="production-audiovisuelle"
                slug={audiovisualProduction.attributes.slug}
                card_image={audiovisualProduction.attributes.card_image}
              />
            );
          }
        })}
      </div>

      <h2>LES PRODUCTIONS DIFFUSÉES PAR LE GAI SAVOIR</h2>

      <div className={styles.cardsContainer}>
        {audiovisualProductions.map((audiovisualProduction) => {
          if (!audiovisualProduction.attributes.gai_savoir_production) {
            return (
              <ItemCard
                key={audiovisualProduction.id}
                type="audiovisual"
                title={audiovisualProduction.attributes.title}
                excerpt={audiovisualProduction.attributes.excerpt}
                categorySlugPart="production-audiovisuelle"
                slug={audiovisualProduction.attributes.slug}
                card_image={audiovisualProduction.attributes.card_image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/audiovisual-productions?populate=*&sort=publishedAt%3Adesc`
  );
  const audiovisualProductions: AudiovisualProductionsData = await res.json();

  return {
    props: {
      audiovisualProductions: audiovisualProductions.data
    }
  };
};

export default Audiovisuel;
