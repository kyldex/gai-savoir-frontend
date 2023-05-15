import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import styles from './index.module.scss';

import HomePageLink from '../../components/common/HomePageLink';

import Idea from '../../types/Idea';
import { IdeasData } from '../../types/IdeasData';

interface Props {
  ideas: Idea[];
}

const Articles: NextPage<Props> = ({ ideas }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Articles</title>
        <meta name="description" content="Idées du Gai Savoir" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePageLink />

      <h1 className={styles.title}>IDÉES</h1>

      <div className={styles.list}>
        <ul>
          {ideas.map((idea) => (
            <li key={idea.id}>
              <Link href={`/idees/${idea.attributes.slug}`}>
                {idea.attributes.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/ideas`);
  const ideas: IdeasData = await res.json();

  return {
    props: {
      ideas: ideas.data
    }
  };
};

export default Articles;
