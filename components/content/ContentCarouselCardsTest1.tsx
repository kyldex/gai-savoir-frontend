import { FC } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import styles from './ContentCarouselCards.module.scss';

import { useDeviceContext } from '../../context/DeviceContext';

import useHasMounted from '../../utils/hooks/useHasMounted';

interface Props {
  title: string;
  allPostsURL: string;
}

const mockIAudiovisuel = [
  {
    title: 'Idées 1',
    excerpt: 'Je suis un test pour une nouvelle idée'
  },
  {
    title: 'Idées 2',
    excerpt: 'Je suis un test pour une nouvelle idée'
  },
  {
    title: 'Idées 3',
    excerpt: 'Je suis un test pour une nouvelle idée'
  }
];

const ContentCarouselCards: FC<Props> = ({ title, allPostsURL }) => {
  const { isMobile } = useDeviceContext();
  const hasMounted = useHasMounted();

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2>{title}</h2>
        <div className={styles.allPosts}>
          <Link href={allPostsURL} className={styles.allPostsLink}>
            TOUS LES POSTS
          </Link>
          <div className={styles.triangle} />
        </div>
      </div>

      {hasMounted ? (
        <Swiper
          slidesPerView={isMobile ? 1 : 3}
          centeredSlides={isMobile ? true : false}
          spaceBetween={8}
        >
          {mockIAudiovisuel.map((idea, index) => (
            <SwiperSlide key={index}>
              <div className={styles.slide}>
                <div>{idea.title}</div>
                <div>{idea.excerpt}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}
    </div>
  );
};

export default ContentCarouselCards;
