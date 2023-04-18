import Link from 'next/link';
import Image from 'next/image';

import styles from './MobileMenu.module.scss';

import hamburgerBtnIcon from '../../assets/img/hamburger_button_285x227.png';
import textLogo from '../../assets/img/logo_text_only.svg';
import instagramLogo from '../../assets/img/instagram_410x410.png';

const MobileMenu = () => {
  return (
    <div className={styles.mobileMenuBar}>
      <button aria-expanded="false" aria-controls="mobile-menu">
        <Image
          src={hamburgerBtnIcon}
          width={32}
          alt=""
          aria-hidden="true"
        />
      </button>

      <Link href="./" className={styles.mobileMenuBarLogo}>
        <Image src={textLogo} width={120} alt="" aria-hidden="true" />
      </Link>

      <Link href="https://www.instagram.com/gai_savoir_/" target="_blank">
        <Image
          src={instagramLogo}
          width={32}
          height={32}
          alt=""
          aria-hidden="true"
        />
      </Link>

      <div>
        <ul id="mobile-menu" className={styles.mobileMenu}>
          <li>
            <Link href="/evenements">ÉVÈNEMENTS</Link>
          </li>
          <li>
            <Link href="/audiovisuel">PRODUCTION AUDIOVISUELLE</Link>
          </li>
          <li>
            <Link href="/textes">IDÉES</Link>
          </li>
          <li>
            <Link href="/textes">CONTRIBUTEURS</Link>
          </li>
          <li>
            <Link href="/textes">OBSERVATOIRE DES PERCEPTIONS</Link>
          </li>
          <li>
            <Link href="/apropos">À PROPOS</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
