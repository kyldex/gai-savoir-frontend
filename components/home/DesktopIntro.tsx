import Image from 'next/image';

import styles from './DesktopIntro.module.scss';

import logo from '../../assets/img/gai_savoir_logo.svg';
import interrogation from '../../assets/img/interrogation.svg';
import kiosque from '../../assets/img/kiosque.svg';

const DesktopIntro = () => {
  return (
    <section>
      <h1 className={styles.title}>
        <span className={styles.visuallyHidden}>Gai Savoir</span>
        <Image src={logo} width={300} alt="" aria-hidden="true" />
      </h1>

      <div className={styles.titleContainer}>
        <p className={styles.slogan}>
          VOUS N&apos;ÊTES PAS CHEZ LE PSY, VOUS N&apos;ÊTES PAS CHEZ LE PRÊTRE
          <br />
          MAIS VOUS AVEZ LA PAROLE QUAND MÊME
        </p>
        <Image src={kiosque} width={80} className={styles.kiosque} alt="" />
      </div>

      <Image
        src={interrogation}
        width={60}
        className={styles.interrogation}
        alt=""
      />
    </section>
  );
};

export default DesktopIntro;
