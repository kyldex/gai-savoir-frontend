import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './ItemCard.module.scss';

interface Props {
  type: 'events' | 'audiovisual' | 'ideas';
  title: string;
  excerpt: string;
  categorySlugPart: string;
  slug: string;
  card_image: {
    data: {
      attributes: {
        url: string;
      };
    } | null;
  };
  isInsideCarousel?: boolean;
}

const ItemCard: FC<Props> = ({
  type,
  title,
  excerpt,
  categorySlugPart,
  slug,
  card_image,
  isInsideCarousel = false
}) => {
  return (
    <Link
      href={`/${categorySlugPart}/${slug}`}
      className={`${styles.cardLinkContainer}${
        isInsideCarousel ? ` ${styles.isInsideCarousel}` : ''
      }`}
    >
      {card_image.data ? (
        <div className={`${styles.cardImageContainer} ${styles[type]}`}>
          <Image
            src={card_image.data.attributes.url}
            fill
            className={`${styles.cardImage} ${styles[type]}`}
            alt=""
          />
        </div>
      ) : (
        <div className={styles.purpleRectangle} />
      )}
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.cardExcerpt}>{excerpt}</div>
    </Link>
  );
};

export default ItemCard;
