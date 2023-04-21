import Image from 'next/image';

import styles from './MobileIntro.module.scss';

import logo from '../assets/img/gai_savoir_logo.svg';
import interrogation from '../../assets/img/interrogation.svg';
import kiosque from '../../assets/img/kiosque.svg';

const MobileIntro = () => {
  return (
    <section>
      {/* <Image src={logo} width={200} alt="Logo Gai Savoir" /> */}
      <h1 className={styles.slogan}>
        VOUS N&apos;ÊTES PAS CHEZ LE PSY, VOUS N&apos;ÊTES PAS CHEZ LE PRÊTRE
        MAIS VOUS AVEZ LA PAROLE QUAND MÊME
      </h1>
      <Image src={kiosque} width={40} alt="" />
      <Image src={interrogation} width={40} alt="" />
    </section>
  );
};

export default MobileIntro;
