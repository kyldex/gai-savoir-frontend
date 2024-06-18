import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';

import styles from './index.module.scss';

import HomePageLink from '../../../components/common/HomePageLink';
import ItemCard from '../../../components/common/ItemCard';

import type Idea from '../../../types/Idea';
import type { IdeasData } from '../../../types/IdeasData';

type Props = {
  articles: Idea[];
}

const News: NextPage<Props> = ({ articles }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Actualités</title>
        <meta name="description" content="Actualités du Gai Savoir" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePageLink />

      <h1 className={styles.title}>ACTUALITÉS</h1>

      <div className={styles.cardsContainer}>
        {articles.map((article) => (
          <ItemCard
            key={article.id}
            type="ideas"
            title={article.attributes.title}
            excerpt={article.attributes.excerpt}
            categorySlugPart="articles/actualites"
            slug={article.attributes.slug}
            card_image={article.attributes.card_image}
          />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/ideas?filters[$and][0][subcategory][name][$eq]=Actualités&populate[0]=card_image&sort=publishedAt%3Adesc`
  );
  const articles: IdeasData = await res.json();

  return {
    props: {
      articles: articles.data
    }
  };
};

export default News;
