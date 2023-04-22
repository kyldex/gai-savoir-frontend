import Image from 'next/image';

import styles from './MobileIntro.module.scss';

import interrogation from '../../assets/img/interrogation.svg';
import kiosque from '../../assets/img/kiosque.svg';

const MobileIntro = () => {
  return (
    <section>
      <h1 className={styles.slogan}>
        VOUS N&apos;ÊTES PAS CHEZ LE PSY, VOUS N&apos;ÊTES PAS CHEZ LE PRÊTRE
        MAIS VOUS AVEZ LA PAROLE QUAND MÊME
      </h1>
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
