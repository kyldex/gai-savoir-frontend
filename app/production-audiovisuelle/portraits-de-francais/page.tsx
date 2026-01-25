import type { Metadata } from 'next';

import styles from './styles.module.scss';

import HomePageLink from '../../../components/common/HomePageLink';
import ItemCard from '../../../components/common/ItemCard';

import { SUBCATEGORIES } from '../../../utils/constants';
import { getAudiovisualProductionsBySubcategory } from '../../../services/strapi';

export const metadata: Metadata = {
  title: SUBCATEGORIES.FRENCH_PORTRAITS,
  description: `${SUBCATEGORIES.FRENCH_PORTRAITS} - Productions audiovisuelles du Gai Savoir`
};

export default async function PortraitsDeFrancaisPage() {
  const audiovisualProductions = await getAudiovisualProductionsBySubcategory(
    SUBCATEGORIES.FRENCH_PORTRAITS
  );

  return (
    <div className={styles.container}>
      <HomePageLink />

      <h1 className={styles.title}>{SUBCATEGORIES.FRENCH_PORTRAITS.toUpperCase()}</h1>

      <div className={styles.cardsContainer}>
        {audiovisualProductions.map((audiovisualProduction) => (
          <ItemCard
            key={audiovisualProduction.id}
            type="audiovisual"
            title={audiovisualProduction.attributes.title}
            excerpt={audiovisualProduction.attributes.excerpt}
            categorySlugPart="production-audiovisuelle/portraits-de-francais"
            slug={audiovisualProduction.attributes.slug}
            card_image={audiovisualProduction.attributes.card_image}
          />
        ))}
      </div>
    </div>
  );
}
