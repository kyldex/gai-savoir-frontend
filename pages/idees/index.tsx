import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import styles from './index.module.scss';

import HomePageLink from '../../components/common/HomePageLink';
import ItemCard from '../../components/common/ItemCard';

import Idea from '../../types/Idea';
import { IdeasData } from '../../types/IdeasData';

interface Props {
  ideas: Idea[];
}

const Articles: NextPage<Props> = ({ ideas }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Idées</title>
        <meta name="description" content="Idées du Gai Savoir" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePageLink />

      <h1 className={styles.title}>IDÉES</h1>

      <div className={styles.cardsContainer}>
        {ideas.map((idea) => (
          <ItemCard
            key={idea.id}
            type="ideas"
            title={idea.attributes.title}
            excerpt={idea.attributes.excerpt}
            categorySlugPart="idees"
            slug={idea.attributes.slug}
            card_image={idea.attributes.card_image}
          />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/ideas?populate=*&sort=publishedAt%3Adesc`
  );
  const ideas: IdeasData = await res.json();

  return {
    props: {
      ideas: ideas.data
    }
  };
};

export default Articles;
