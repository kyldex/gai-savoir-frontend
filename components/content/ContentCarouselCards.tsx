import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from './ContentCarouselCards.module.scss';

import breakpoints from '../../utils/breakpoints';
import type Idea from '../../types/Idea';
import type { Audiovisual } from '../../assets/data/audiovisualType';
import type { Event } from '../../assets/data/eventType';

interface Props {
  type: 'events' | 'audiovisual' | 'ideas';
  cardsData: Idea[] | Audiovisual[] | Event[];
}

const ContentCarouselCards: FC<Props> = ({ type, cardsData }) => {
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
        catergorySlugPart = 'evenements';
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

      <div className={styles.carouselContainer}>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          // Default parameter set to "auto" for SSG to work.
          slidesPerView="auto"
          breakpoints={{
            300: {
              slidesPerView: 1,
              centeredSlides: true
            },
            [breakpoints.sm]: {
              slidesPerView: 2,
              centeredSlides: false
            },
            [breakpoints.md]: {
              slidesPerView: 3,
              centeredSlides: false
            }
          }}
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
                <div className={styles.cardTitle}>{idea.attributes.title}</div>
                <div className={styles.cardExcerpt}>
                  {idea.attributes.excerpt}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ContentCarouselCards;
