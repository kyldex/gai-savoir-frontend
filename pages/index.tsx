import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';

import styles from './index.module.scss';

import Intro from '../components/home/Intro';
import ContentCarouselCards from '../components/content/ContentCarouselCards';

import useHasMounted from '../utils/hooks/useHasMounted';
import Idea from '../types/Idea';
import { IdeasData } from '../types/IdeasData';

interface Props {
  ideas: Idea[];
}

const Home: NextPage<Props> = ({ ideas }) => {
  const hasMounted = useHasMounted();

  return (
    <div className={styles.container}>
      <Head>
        <title>Gai Savoir Accueil</title>
        <meta
          name="description"
          content="Le Gai Savoir est une plateforme de contenus intellectuel, artistique et citoyen visant à se libérer de la logique de segmentation propres à la politique et aux industries culturelles et créatives."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* TODO: Client only. Custom layout shift ? + pas de h1 dans le html initial */}
      {hasMounted ? <Intro /> : null}

      <div className={styles.contentCarouselCardsContainer}>
        <ContentCarouselCards title="IDÉES" allPostsURL="/idees" cardsData={ideas} />
      </div>

      {/* <div className={styles.contentCarouselCardsContainer}>
        <ContentCarouselCards title="IDÉES" allPostsURL='/idees'/>
      </div>

      <div className={styles.contentCarouselCardsContainer}>
        <ContentCarouselCards title="IDÉES" allPostsURL='/idees'/>
      </div> */}
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

export default Home;
