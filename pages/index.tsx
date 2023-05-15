import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import styles from './index.module.scss';

import Intro from '../components/home/Intro';
import ContentCarouselCards from '../components/content/ContentCarouselCards';

import useHasMounted from '../utils/hooks/useHasMounted';
import Idea from '../types/Idea';
import { IdeasData } from '../types/IdeasData';
import dotOrange from '../assets/img/dot_orange.svg';
import flower from '../assets/img/flower.svg';
import clock from '../assets/img/clock.svg';
import papers from '../assets/img/papers.svg';
import sunglasses from '../assets/img/sunglasses.svg';
import dotBurgundy from '../assets/img/dot_burgundy.svg';
import pencil from '../assets/img/pencil.svg';
import exclamation from '../assets/img/exclamation.svg';
import faces from '../assets/img/faces.svg';
import bird from '../assets/img/bird.svg';
import coffeemaker from '../assets/img/coffeemaker.svg';

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

      <ContentCarouselCards
        title="ÉVÈNEMENTS"
        allPostsURL="/evenements"
        cardsData={ideas}
      />

      <div className={styles.illustrationsContainer1}>
        <div className={styles.illustrationContainer}>
          <Image
            src={dotOrange}
            width={80}
            className={styles.dotOrange}
            alt=""
          />
        </div>
        <div className={styles.illustrationContainer}>
          <Image src={flower} width={80} className={styles.flower} alt="" />
        </div>
        <div className={styles.illustrationContainer}>
          <Image src={clock} width={80} className={styles.clock} alt="" />
        </div>
        <div className={styles.illustrationContainer}>
          <Image src={papers} width={100} className={styles.papers} alt="" />
        </div>
      </div>

      <ContentCarouselCards
        title="PRODUCTION AUDIOVISUELLE"
        allPostsURL="/production-audiovisuelle"
        cardsData={ideas}
      />

      <div className={styles.illustrationsContainer2}>
        <div className={styles.illustrationContainer}>
          <Image
            src={sunglasses}
            width={200}
            className={styles.sunglasses}
            alt=""
          />
        </div>
        <div className={styles.illustrationContainer}>
          <Image src={pencil} width={250} className={styles.pencil} alt="" />
        </div>
        <div className={styles.illustrationContainer}>
          <Image
            src={dotBurgundy}
            width={70}
            className={styles.dotBurgundy}
            alt=""
          />
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

      <ContentCarouselCards
        title="IDÉES"
        allPostsURL="/idees"
        cardsData={ideas}
      />

      <div className={styles.illustrationsContainer3}>
        <div className={styles.illustrationContainer}>
          <Image src={faces} width={180} className={styles.faces} alt="" />
        </div>
        <div className={styles.illustrationContainer}>
          <Image src={bird} width={180} className={styles.bird} alt="" />
        </div>
        <div className={styles.illustrationContainer}>
          <Image
            src={coffeemaker}
            width={140}
            className={styles.coffeemaker}
            alt=""
          />
        </div>
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

export default Home;
