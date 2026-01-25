import type { Metadata } from 'next';

import styles from './styles.module.scss';

import HomePageLink from '../../components/common/HomePageLink';
import ItemCard from '../../components/common/ItemCard';

import { CATEGORIES } from '../../utils/constants';
import { getAudiovisualProductions } from '../../services/strapi';

export const metadata: Metadata = {
  title: CATEGORIES.AUDIOVISUAL_PRODUCTION,
  description: `${CATEGORIES.AUDIOVISUAL_PRODUCTION} du Gai Savoir`
};

export default async function AudiovisuelPage() {
  const audiovisualProductions = await getAudiovisualProductions();

  return (
    <div className={styles.container}>
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
}
