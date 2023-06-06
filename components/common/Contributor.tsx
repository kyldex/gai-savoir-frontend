import { FC } from 'react';
import Image from 'next/image';

import styles from './Contributor.module.scss';

interface Props {
  firstname: string;
  lastname: string;
  desciption: string;
  imageUrl?: string;
  variant?: boolean;
}

const Contributor: FC<Props> = ({
  firstname,
  lastname,
  desciption,
  imageUrl,
  variant = false
}) => {
  return (
    <div
      className={`${styles.container}${variant ? ` ${styles.variant}` : ''}`}
    >
      <div
        className={`${styles.photoContainer}${
          variant ? ` ${styles.variant}` : ''
        }`}
      >
        {imageUrl ? (
          <Image src={imageUrl} fill className={styles.photo} alt="" />
        ) : (
          <div className={styles.noPhoto} />
        )}
      </div>

      <div
        className={`${styles.textContainer}${
          variant ? ` ${styles.variant}` : ''
        }`}
      >
        <div className={styles.name}>
          {variant ? (
            <div>
              {firstname}
              <br />
              {lastname}
            </div>
          ) : (
            `${firstname} ${lastname}`
          )}
        </div>
        <div className={styles.desciption}>{desciption}</div>
      </div>
    </div>
  );
};

export default Contributor;
