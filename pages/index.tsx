import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import styles from './index.module.scss';

import Intro from '../components/home/Intro';
import ContentCarouselCards from '../components/content/ContentCarouselCards';

import useHasMounted from '../utils/hooks/useHasMounted';
import eventsData from '../data/event';
import type AudiovisualProduction from '../types/AudiovisualProduction';
import type { AudiovisualProductionsData } from '../types/AudiovisualProductionsData';
import type Idea from '../types/Idea';
import type { IdeasData } from '../types/IdeasData';

import dotOrange from '../assets/img/dot_orange.svg';
import clock from '../assets/img/home/clock.svg';
import sunglasses from '../assets/img/home/sunglasses.svg';
import dotBurgundy from '../assets/img/home/dot_burgundy.svg';
import pencil from '../assets/img/home/pencil.svg';
import exclamation from '../assets/img/home/exclamation.svg';
import faces from '../assets/img/home/faces.svg';
import bird from '../assets/img/home/bird.svg';
import coffeemaker from '../assets/img/home/coffeemaker.svg';

interface Props {
  audiovisualProductions: AudiovisualProduction[];
  ideas: Idea[];
}

const Home: NextPage<Props> = ({ audiovisualProductions, ideas }) => {
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

      {/* Client only */}
      {hasMounted ? <Intro /> : null}

      <div style={{ marginTop: '56px' }}>
        <ContentCarouselCards type="events" cardsData={eventsData} />
      </div>

      <div className={styles.audiovisualContainer}>
        <ContentCarouselCards
          type="audiovisual"
          cardsData={audiovisualProductions}
        />
      </div>

      <div className={styles.illustrationsContainer}>
        <div className={styles.illustrationContainer}>
          <Image src={pencil} width={220} className={styles.pencil} alt="" />
        </div>
        <div className={styles.illustrationContainer}>
          <Image
            src={exclamation}
            width={50}
            className={styles.exclamation}
            alt=""
          />
        </div>
      </div>

      <ContentCarouselCards type="ideas" cardsData={ideas} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const audiovisualProductionsRes = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/audiovisual-productions?populate=*&sort=publishedAt%3Adesc`
  );
  const audiovisualProductions: AudiovisualProductionsData =
    await audiovisualProductionsRes.json();

  const ideasRes = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/ideas?populate=*&sort=publishedAt%3Adesc`
  );
  const ideas: IdeasData = await ideasRes.json();

  return {
    props: {
      audiovisualProductions: audiovisualProductions.data,
      ideas: ideas.data
    }
  };
};

export default Home;
