import Image from 'next/image';

import styles from './styles.module.scss';

import { getArticles, getAudiovisualProductions } from '../services/strapi';

import Intro from '../components/home/Intro';
import ContentCarouselCards from '../components/content/ContentCarouselCards';

import eventsData from '../data/event';

import pencil from '../assets/img/home/pencil.svg';
import exclamation from '../assets/img/home/exclamation.svg';

export default async function HomePage() {
  const [ideas, audiovisualProductions] = await Promise.all([
    getArticles(),
    getAudiovisualProductions(),
  ]);

  return (
    <div className={styles.container}>
      <Intro />

      <div style={{ marginTop: '56px' }}>
        <ContentCarouselCards type="ideas" cardsData={ideas} />
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

      <ContentCarouselCards type="events" cardsData={eventsData} />
    </div>
  );
}
