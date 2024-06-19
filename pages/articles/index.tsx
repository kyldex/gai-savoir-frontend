import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';

import styles from './index.module.scss';

import HomePageLink from '../../components/common/HomePageLink';
import ItemCard from '../../components/common/ItemCard';

import { CATEGORIES } from '../../utils/constants';
import type Idea from '../../types/Idea';
import type { IdeasData } from '../../types/IdeasData';

type Props = {
  articles: Idea[];
};

const Articles: NextPage<Props> = ({ articles }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{CATEGORIES.ARTICLES}</title>
        <meta name="description" content="Tous les articles du Gai Savoir" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/ideas?populate[0]=card_image,subcategory&sort=publishedAt%3Adesc`
  );
  const articles: IdeasData = await res.json();

  return {
    props: {
      articles: articles.data
    }
  };
};

export default Articles;
