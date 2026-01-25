import type { Metadata } from 'next';

import styles from './styles.module.scss';

import HomePageLink from '../../components/common/HomePageLink';
import ItemCard from '../../components/common/ItemCard';

import { CATEGORIES } from '../../utils/constants';
import { getArticles } from '../../services/strapi';

export const metadata: Metadata = {
  title: CATEGORIES.ARTICLES,
  description: 'Tous les articles du Gai Savoir'
};

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <div className={styles.container}>
      <HomePageLink />

      <h1 className={styles.title}>{CATEGORIES.ARTICLES}</h1>

      <div className={styles.cardsContainer}>
        {articles.map((article) => {
          const subcategorySlug =
            article.attributes.subcategory?.data.attributes.slug;
          return subcategorySlug ? (
            <ItemCard
              key={article.id}
              type="ideas"
              title={article.attributes.title}
              excerpt={article.attributes.excerpt}
              categorySlugPart={`articles/${subcategorySlug}`}
              slug={article.attributes.slug}
              card_image={article.attributes.card_image}
            />
          ) : null;
        })}
      </div>
    </div>
  );
}
