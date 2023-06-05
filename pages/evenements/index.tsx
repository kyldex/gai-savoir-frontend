import type { NextPage } from 'next';
import Head from 'next/head';

import styles from './index.module.scss';

import HomePageLink from '../../components/common/HomePageLink';
import ItemCard from '../../components/common/ItemCard';

import eventsData from '../../data/event';

const Evenements: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Évènements</title>
        <meta name="description" content="Les évènements du Gai Savoir" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePageLink />

      <h1 className={styles.title}>LES ÉVÈVENEMENTS</h1>

      <div className={styles.cardsContainer}>
        {eventsData.map((event) => (
          <ItemCard
            key={event.id}
            type="events"
            title={event.attributes.title}
            excerpt={event.attributes.excerpt}
            categorySlugPart="evenements"
            slug={event.attributes.slug}
            card_image={event.attributes.card_image}
          />
        ))}
      </div>
    </div>
  );
};

export default Evenements;
