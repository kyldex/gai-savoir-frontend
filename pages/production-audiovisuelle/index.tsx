import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';

import styles from './index.module.scss';

import HomePageLink from '../../components/common/HomePageLink';
import ItemCard from '../../components/common/ItemCard';

import { CATEGORIES } from '../../utils/constants';
import type AudiovisualProduction from '../../types/AudiovisualProduction';
import type { AudiovisualProductionsData } from '../../types/AudiovisualProductionsData';

type Props = {
  audiovisualProductions: AudiovisualProduction[];
};

const Audiovisuel: NextPage<Props> = ({ audiovisualProductions }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{CATEGORIES.AUDIOVISUAL_PRODUCTION}</title>
        <meta
          name="description"
          content={`${CATEGORIES.AUDIOVISUAL_PRODUCTION} du Gai Savoir`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePageLink />

      <h1 className={styles.title}>{CATEGORIES.AUDIOVISUAL_PRODUCTION}</h1>

      <h2>LES PRODUCTIONS DU GAI SAVOIR</h2>

      <div className={styles.cardsContainer}>
        {audiovisualProductions.map((audiovisualProduction) => {
          const subcategorySlug =
            audiovisualProduction.attributes.subcategory?.data.attributes.slug;
          const isAGaiSavoirProduction =
            audiovisualProduction.attributes.gai_savoir_production;
          return subcategorySlug && isAGaiSavoirProduction ? (
            <ItemCard
              key={audiovisualProduction.id}
              type="audiovisual"
              title={audiovisualProduction.attributes.title}
              excerpt={audiovisualProduction.attributes.excerpt}
              categorySlugPart={`production-audiovisuelle/${subcategorySlug}`}
              slug={audiovisualProduction.attributes.slug}
              card_image={audiovisualProduction.attributes.card_image}
            />
          ) : null;
        })}
      </div>

      <h2>LES PRODUCTIONS DIFFUSÉES PAR LE GAI SAVOIR</h2>

      <div className={styles.cardsContainer}>
        {audiovisualProductions.map((audiovisualProduction) => {
          const subcategorySlug =
            audiovisualProduction.attributes.subcategory?.data.attributes.slug;
          const isAGaiSavoirProduction =
            audiovisualProduction.attributes.gai_savoir_production;
          return subcategorySlug && !isAGaiSavoirProduction ? (
            <ItemCard
              key={audiovisualProduction.id}
              type="audiovisual"
              title={audiovisualProduction.attributes.title}
              excerpt={audiovisualProduction.attributes.excerpt}
              categorySlugPart={`production-audiovisuelle/${subcategorySlug}`}
              slug={audiovisualProduction.attributes.slug}
              card_image={audiovisualProduction.attributes.card_image}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/audiovisual-productions?populate[0]=card_image,subcategory&sort=publishedAt%3Adesc`
  );
  const audiovisualProductions: AudiovisualProductionsData = await res.json();

  return {
    props: {
      audiovisualProductions: audiovisualProductions.data
    }
  };
};

export default Audiovisuel;
