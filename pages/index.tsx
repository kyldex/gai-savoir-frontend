import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import styles from './index.module.scss';

import Intro from '../components/home/Intro';
import ContentCarouselCards from '../components/content/ContentCarouselCards';

import useHasMounted from '../utils/hooks/useHasMounted';
import audiovisualData from '../assets/data/audiovisual';
import eventsData from '../assets/data/event';
import Idea from '../types/Idea';
import { IdeasData } from '../types/IdeasData';
import dotOrange from '../assets/img/dot_orange.svg';
import flower from '../assets/img/home/flower.svg';
import clock from '../assets/img/home/clock.svg';
import papers from '../assets/img/home/papers.svg';
import sunglasses from '../assets/img/home/sunglasses.svg';
import dotBurgundy from '../assets/img/home/dot_burgundy.svg';
import pencil from '../assets/img/home/pencil.svg';
import exclamation from '../assets/img/home/exclamation.svg';
import faces from '../assets/img/home/faces.svg';
import bird from '../assets/img/home/bird.svg';
import coffeemaker from '../assets/img/home/coffeemaker.svg';

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

      {/* Client only */}
      {hasMounted ? <Intro /> : null}

      <div style={{ marginTop: '56px' }}>
        <ContentCarouselCards type="events" cardsData={eventsData} />
      </div>

      <div className={styles.illustrationsContainer1}>
        <div className={styles.illustrationContainer}>
          <Image src={flower} width={65} className={styles.flower} alt="" />
        </div>
        <div className={styles.illustrationContainer}>
          <Image src={papers} width={85} className={styles.papers} alt="" />
        </div>
      </div>

      <ContentCarouselCards type="audiovisual" cardsData={audiovisualData} />

      <div className={styles.illustrationsContainer2}>
        <div className={styles.illustrationContainer}>
          <Image src={pencil} width={250} className={styles.pencil} alt="" />
        </div>
        <div className={styles.illustrationContainer}>
          <Image
            src={exclamation}
            width={70}
            className={styles.exclamation}
            alt=""
          />
        </div>
      </div>

      <ContentCarouselCards type="ideas" cardsData={ideas} />

      <div className={styles.illustrationsContainer3}>
        <div className={styles.illustrationContainer}>
          <Image src={bird} width={180} className={styles.bird} alt="" />
        </div>
        <div className={styles.illustrationContainer}>
          <Image src={coffeemaker} width={120} className={styles.coffeemaker} alt="" />
        </div>
        <div className={styles.illustrationContainer}>
          <Image
            src={clock}
            width={65}
            className={styles.clock}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/ideas?populate=*&sort=publishedAt`
  );
  const ideas: IdeasData = await res.json();

  return {
    props: {
      ideas: ideas.data
    }
  };
};

export default Home;
