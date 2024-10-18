import Image from 'next/image';

import styles from './MobileIntro.module.scss';

import interrogation from '../../assets/img/home/interrogation.svg';
import kiosque from '../../assets/img/home/kiosque.svg';

const MobileIntro = () => {
  return (
    <section>
      <p className={styles.slogan}>
        VOUS N&apos;ÊTES PAS CHEZ LE PSY, VOUS N&apos;ÊTES PAS AU CONFESSIONNAL
        MAIS VOUS AVEZ LA PAROLE QUAND MÊME
      </p>
      <div className={styles.illustationsContainer}>
        <Image src={kiosque} width={40} className={styles.kiosque} alt="" />
        <Image
          src={interrogation}
          width={30}
          className={styles.interrogation}
          alt=""
        />
      </div>
    </section>
  );
};

export default MobileIntro;
