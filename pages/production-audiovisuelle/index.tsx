import type { NextPage } from 'next';
import Head from 'next/head';

import styles from './index.module.scss';

import HomePageLink from '../../components/common/HomePageLink';
import ItemCard from '../../components/common/ItemCard';

import audiovisualData from '../../assets/data/audiovisual';

const Audiovisuel: NextPage = () => {
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
        {audiovisualData.map((audiovisual) => {
          if (audiovisual.attributes.gai_savoir_production) {
            return (
              <ItemCard
                key={audiovisual.id}
                type="audiovisual"
                title={audiovisual.attributes.title}
                excerpt={audiovisual.attributes.excerpt}
                categorySlugPart="production-audiovisuelle"
                slug={audiovisual.attributes.slug}
                card_image={audiovisual.attributes.card_image}
              />
            );
          }
        })}
      </div>

      <h2>LES PRODUCTIONS DIFFUSÉES PAR LE GAI SAVOIR</h2>

      <div className={styles.cardsContainer}>
        {audiovisualData.map((audiovisual) => {
          if (!audiovisual.attributes.gai_savoir_production) {
            return (
              <ItemCard
                key={audiovisual.id}
                type="audiovisual"
                title={audiovisual.attributes.title}
                excerpt={audiovisual.attributes.excerpt}
                categorySlugPart="production-audiovisuelle"
                slug={audiovisual.attributes.slug}
                card_image={audiovisual.attributes.card_image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Audiovisuel;
