import { FC } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from './ContentCarouselCards.module.scss';

import { useDeviceContext } from '../../context/DeviceContext';

import useHasMounted from '../../utils/hooks/useHasMounted';
import Idea from '../../types/Idea';

interface Props {
  type: 'events' | 'audiovisual' | 'ideas';
  cardsData: Idea[];
}

const ContentCarouselCards: FC<Props> = ({ type, cardsData }) => {
  const { isMobile } = useDeviceContext();
  const hasMounted = useHasMounted();

  const getInfo = () => {
    let title = '';
    let allPostsURL = '/';
    let cssSlide = '';

    switch (type) {
      case 'events':
        title = 'ÉVÈNEMENTS';
        allPostsURL = '/evenements';
        cssSlide = 'events';
        break;
      case 'audiovisual':
        title = 'PRODUCTION AUDIOVISUELLE';
        allPostsURL = '/production-audiovisuelle';
        cssSlide = 'audiovisual';
        break;
      case 'ideas':
        title = 'IDÉES';
        allPostsURL = '/idees';
        cssSlide = 'ideas';
        break;
      default:
        console.error('unknown type for carousel cards');
    }

    return { title, allPostsURL, cssSlide };
  };

  const { title, allPostsURL, cssSlide } = getInfo();

  return (
    <section className={styles.container}>
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
            navigation={true}
            modules={[Navigation]}
            slidesPerView={isMobile ? 1 : 3}
            centeredSlides={isMobile ? true : false}
            // spaceBetween={8}
          >
            {cardsData.map((idea) => (
              <SwiperSlide key={idea.id}>
                <Link
                  href={`/idees/${idea.attributes.slug}`}
                  className={`${styles.slide} ${styles[cssSlide]}`}
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
    </section>
  );
};

export default ContentCarouselCards;
