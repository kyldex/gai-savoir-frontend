import Image from 'next/image';

import styles from './DesktopIntro.module.scss';

import logo from '../../assets/img/gai_savoir_logo.svg';
import interrogation from '../../assets/img/interrogation.svg';
import kiosque from '../../assets/img/kiosque.svg';

const DesktopIntro = () => {
  return (
    <section>
      <Image
        src={logo}
        width={300}
        className={styles.logo}
        alt="Logo Gai Savoir"
      />

      <div className={styles.titleContainer}>
        <h1 className={styles.slogan}>
          VOUS N&apos;ÊTES PAS CHEZ LE PSY, VOUS N&apos;ÊTES PAS CHEZ LE PRÊTRE
          <br />
          MAIS VOUS AVEZ LA PAROLE QUAND MÊME
        </h1>
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
