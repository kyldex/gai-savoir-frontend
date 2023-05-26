import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from './ContentCarouselCards.module.scss';

import { useDeviceContext } from '../../context/DeviceContext';

import useHasMounted from '../../utils/hooks/useHasMounted';
import type Idea from '../../types/Idea';
import type { Audiovisual } from '../../assets/data/audiovisualType';

interface Props {
  type: 'events' | 'audiovisual' | 'ideas';
  cardsData: Idea[] | Audiovisual[];
}

const ContentCarouselCards: FC<Props> = ({ type, cardsData }) => {
  const { isMobile } = useDeviceContext();
  const hasMounted = useHasMounted();

  const getInfo = () => {
    let title = '';
    let allPostsURL = '/';
    let cssSlide = '';
    let catergorySlugPart = '';

    switch (type) {
      case 'events':
        title = 'ÉVÈNEMENTS';
        allPostsURL = '/evenements';
        cssSlide = 'events';
        catergorySlugPart = 'idees';
        break;
      case 'audiovisual':
        title = 'PRODUCTION AUDIOVISUELLE';
        allPostsURL = '/production-audiovisuelle';
        cssSlide = 'audiovisual';
        catergorySlugPart = 'production-audiovisuelle';
        break;
      case 'ideas':
        title = 'IDÉES';
        allPostsURL = '/idees';
        cssSlide = 'ideas';
        catergorySlugPart = 'idees';
        break;
      default:
        console.error('unknown type for carousel cards');
    }

    return { title, allPostsURL, cssSlide, catergorySlugPart };
  };

  const { title, allPostsURL, cssSlide, catergorySlugPart } = getInfo();

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
                  href={`/${catergorySlugPart}/${idea.attributes.slug}`}
                  className={`${styles.slide} ${styles[cssSlide]}`}
                >
                  {idea.attributes.card_image.data ? (
                    <Image
                      src={idea.attributes.card_image.data.attributes.url}
                      alt=""
                      width={250}
                      height={
                        (type === 'events' && 250) ||
                        (type === 'audiovisual' && 200) ||
                        (type === 'ideas' && 250) ||
                        250
                      }
                      className={styles.cardImage}
                    />
                  ) : (
                    <div className={styles.purpleRectangle} />
                  )}
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
