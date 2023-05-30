import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './MobileMenuBar.module.scss';

import MobileMenu from './MobileMenu';

import hamburgerBtnIcon from '../../assets/img/menu/hamburger_button_285x227.png';
import textLogo from '../../assets/img/menu/logo_text_only.svg';
import birdLogo from '../../assets/img/menu/logo_bird.svg';
import instagramLogo from '../../assets/img/menu/instagram_410x410.png';

const MobileMenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuIsOpen = () => {
    setIsMenuOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className={styles.mobileMenuBar}>
      <button
        type="button"
        onClick={toggleMenuIsOpen}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
      >
        <Image src={hamburgerBtnIcon} width={32} alt="" aria-hidden="true" />
      </button>

      <Link href="/" className={styles.mobileMenuBarLogo}>
        <h1 className={styles.title}>
          <span className={styles.visuallyHidden}>Gai Savoir</span>
          <Image
            src={textLogo}
            width={120}
            className={styles.mobileMenuLogoText}
            alt=""
            aria-hidden="true"
          />
          <Image src={birdLogo} width={30} alt="" aria-hidden="true" />
        </h1>
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

      {isMenuOpen && <MobileMenu toggleMenuIsOpen={toggleMenuIsOpen} />}
    </div>
  );
};

export default MobileMenuBar;
