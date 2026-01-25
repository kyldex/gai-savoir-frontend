import type { Metadata } from 'next';

import styles from './styles.module.scss';

import HomePageLink from '../../../components/common/HomePageLink';
import ItemCard from '../../../components/common/ItemCard';

import { SUBCATEGORIES } from '../../../utils/constants';
import { getAudiovisualProductionsBySubcategory } from '../../../services/strapi';

export const metadata: Metadata = {
  title: SUBCATEGORIES.INTERVIEWS,
  description: `${SUBCATEGORIES.INTERVIEWS} - Productions audiovisuelles du Gai Savoir`
};

export default async function InterviewsPage() {
  const audiovisualProductions = await getAudiovisualProductionsBySubcategory(
    SUBCATEGORIES.INTERVIEWS
  );

  return (
    <div className={styles.container}>
      <HomePageLink />

      <h1 className={styles.title}>{SUBCATEGORIES.INTERVIEWS.toUpperCase()}</h1>

      <div className={styles.cardsContainer}>
        {audiovisualProductions.map((audiovisualProduction) => (
          <ItemCard
            key={audiovisualProduction.id}
            type="audiovisual"
            title={audiovisualProduction.attributes.title}
            excerpt={audiovisualProduction.attributes.excerpt}
            categorySlugPart="production-audiovisuelle/interviews"
            slug={audiovisualProduction.attributes.slug}
            card_image={audiovisualProduction.attributes.card_image}
          />
        ))}
      </div>
    </div>
  );
}
