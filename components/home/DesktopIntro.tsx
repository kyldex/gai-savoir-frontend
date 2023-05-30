import Image from 'next/image';

import styles from './DesktopIntro.module.scss';

import LadderDesktopIcon from './LadderDesktopIcon';
import MegaphoneIcon from './MegaphoneIcon';

import logo from '../../assets/img/gai_savoir_logo.svg';
import whiteStar from '../../assets/img/home/star_white.svg';
import kiosque from '../../assets/img/home/kiosque.svg';
import dot_yellow from '../../assets/img/dot_yellow.svg';
import bridge from '../../assets/img/home/bridge.svg';
import target from '../../assets/img/home/target.svg';
import interrogation from '../../assets/img/home/interrogation.svg';

const DesktopIntro = () => {
  return (
    <section>
      <div className={styles.desktopIntroContainer1}>
        <h1 className={styles.title}>
          <span className={styles.visuallyHidden}>Gai Savoir</span>
          <Image src={logo} width={300} alt="" aria-hidden="true" />
        </h1>

        <div className={styles.sloganContainer}>
          <LadderDesktopIcon className={styles.ladderDesktop} />

          <Image
            src={whiteStar}
            width={95}
            className={styles.whiteStar}
            alt=""
          />
          <p className={styles.slogan}>
            VOUS N&apos;ÊTES PAS CHEZ LE PSY, VOUS N&apos;ÊTES PAS CHEZ LE
            PRÊTRE
            <br />
            MAIS VOUS AVEZ LA PAROLE QUAND MÊME
          </p>
          <Image src={kiosque} width={80} className={styles.kiosque} alt="" />
        </div>
      </div>

      <div className={styles.desktopIntroContainer2}>
        <MegaphoneIcon className={styles.megaphone} />

        <Image
          src={interrogation}
          width={60}
          className={styles.interrogation}
          alt=""
        />
      </div>
    </section>
  );
};

export default DesktopIntro;
