import type { Metadata } from 'next';

import styles from './styles.module.scss';

import HomePageLink from '../../components/common/HomePageLink';
import ItemCard from '../../components/common/ItemCard';

import eventsData from '../../data/event';

export const metadata: Metadata = {
  title: 'Évènements',
  description: 'Les évènements du Gai Savoir'
};

export default function EvenementsPage() {
  return (
    <div className={styles.container}>
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
}
