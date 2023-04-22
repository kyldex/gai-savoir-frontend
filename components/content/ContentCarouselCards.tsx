import { FC } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import styles from './ContentCarouselCards.module.scss';

import { useDeviceContext } from '../../context/DeviceContext';

import useHasMounted from '../../utils/hooks/useHasMounted';
import Idea from '../../types/Idea';

interface Props {
  title: string;
  allPostsURL: string;
  cardsData: Idea[];
}

const ContentCarouselCards: FC<Props> = ({ title, allPostsURL, cardsData }) => {
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
        <div className={styles.carouselContainer}>
          <Swiper
            slidesPerView={isMobile ? 1 : 3}
            centeredSlides={isMobile ? true : false}
            spaceBetween={8}
          >
            {cardsData.map((idea) => (
              <SwiperSlide key={idea.id}>
                <Link
                  href={`/idees/${idea.attributes.slug}`}
                  className={styles.slide}
                >
                  <div className={styles.purpleRectangle} />
                  <div className={styles.cardTitle}>
                    {idea.attributes.title}
                  </div>
                  <div className={styles.cardExcerpt}>
                    {idea.attributes.excerpt}
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : null}
    </div>
  );
};

export default ContentCarouselCards;
