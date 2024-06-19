import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';

import styles from './index.module.scss';

import HomePageLink from '../../../components/common/HomePageLink';
import ItemCard from '../../../components/common/ItemCard';

import { SUBCATEGORIES } from '../../../utils/constants';
import type AudiovisualProduction from '../../../types/AudiovisualProduction';
import type { AudiovisualProductionsData } from '../../../types/AudiovisualProductionsData';

type Props = {
  audiovisualProductions: AudiovisualProduction[];
};

const ExternalContributions: NextPage<Props> = ({ audiovisualProductions }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{SUBCATEGORIES.EXTERNAL_CONTRIBUTIONS}</title>
        <meta
          name="description"
          content={`${SUBCATEGORIES.EXTERNAL_CONTRIBUTIONS} audiovisuelles du Gai Savoir`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePageLink />

      <h1 className={styles.title}>{SUBCATEGORIES.EXTERNAL_CONTRIBUTIONS}</h1>

      <div className={styles.cardsContainer}>
        {audiovisualProductions.map((audiovisualProduction) => (
          <ItemCard
            key={audiovisualProduction.id}
            type="audiovisual"
            title={audiovisualProduction.attributes.title}
            excerpt={audiovisualProduction.attributes.excerpt}
            categorySlugPart="production-audiovisuelle/contributions-externes"
            slug={audiovisualProduction.attributes.slug}
            card_image={audiovisualProduction.attributes.card_image}
          />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/audiovisual-productions?filters[$and][0][subcategory][name][$eq]=${SUBCATEGORIES.EXTERNAL_CONTRIBUTIONS}&populate[0]=card_image&sort=publishedAt%3Adesc`
  );
  const audiovisualProductions: AudiovisualProductionsData = await res.json();

  return {
    props: {
      audiovisualProductions: audiovisualProductions.data
    }
  };
};

export default ExternalContributions;
