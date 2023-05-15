import Image from 'next/image';

import styles from './DesktopIntro.module.scss';

import LadderDesktopIcon from './LadderDesktopIcon';
import MegaphoneIcon from './MegaphoneIcon';

import logo from '../../assets/img/gai_savoir_logo.svg';
import whiteStar from '../../assets/img/star_white.svg';
import kiosque from '../../assets/img/kiosque.svg';
import yellow_dot from '../../assets/img/yellow_dot.svg';
import bridge from '../../assets/img/bridge.svg';
import interrogation from '../../assets/img/interrogation.svg';

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
        <Image
          src={yellow_dot}
          width={30}
          className={styles.yellowDot}
          alt=""
        />
        <Image src={bridge} width={350} className={styles.bridge} alt="" />

        <MegaphoneIcon className={styles.megaphone} />

        <Image
          src={interrogation}
          width={60}
          className={styles.interrogation}
          alt=""
        />
        <Image src={whiteStar} width={95} className={styles.whiteStar} alt="" />
      </div>
    </section>
  );
};

export default DesktopIntro;
