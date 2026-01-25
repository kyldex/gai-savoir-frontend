import type { Metadata } from 'next';

import styles from './styles.module.scss';

import HomePageLink from '../../../components/common/HomePageLink';
import ItemCard from '../../../components/common/ItemCard';

import { SUBCATEGORIES } from '../../../utils/constants';
import { getArticlesBySubcategory } from '../../../services/strapi';

export const metadata: Metadata = {
  title: SUBCATEGORIES.CRAZY,
  description: `${SUBCATEGORIES.CRAZY} - Articles du Gai Savoir`
};

export default async function SommesNousTousFousPage() {
  const articles = await getArticlesBySubcategory(SUBCATEGORIES.CRAZY);

  return (
    <div className={styles.container}>
      <HomePageLink />

      <h1 className={styles.title}>{SUBCATEGORIES.CRAZY.toUpperCase()}</h1>

      <div className={styles.cardsContainer}>
        {articles.map((article) => (
          <ItemCard
            key={article.id}
            type="ideas"
            title={article.attributes.title}
            excerpt={article.attributes.excerpt}
            categorySlugPart="articles/sommes-nous-tous-fous"
            slug={article.attributes.slug}
            card_image={article.attributes.card_image}
          />
        ))}
      </div>
    </div>
  );
}
