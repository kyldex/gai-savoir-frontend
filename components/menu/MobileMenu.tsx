import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';

import styles from './MobileMenu.module.scss';

import closeIcon from '../../assets/img/menu/close.png';
import orangeStar from '../../assets/img/menu/star_orange.svg';

interface Props {
  toggleMenuIsOpen: () => void;
}

const MobileMenuBar: FC<Props> = ({ toggleMenuIsOpen }) => {
  return (
    <Dialog.Root modal defaultOpen>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content onEscapeKeyDown={toggleMenuIsOpen}>
          <div className={styles.mobileMenuContainer}>
            <button
              type="button"
              onClick={toggleMenuIsOpen}
              aria-label="Fermer le menu mobile"
            >
              <Image src={closeIcon} width={32} alt="" aria-hidden="true" />
            </button>

            <Image
              src={orangeStar}
              width={100}
              className={styles.orangeStar}
              alt=""
            />

            <ul id="mobile-menu" className={styles.mobileMenu}>
              <li>
                <Link href="/" onClick={toggleMenuIsOpen}>
                  ACCUEIL
                </Link>
              </li>
              <li>
                <Link href="/evenements" onClick={toggleMenuIsOpen}>
                  ÉVÈNEMENTS
                </Link>
              </li>
              <li>
                <Link href="/articles" onClick={toggleMenuIsOpen}>
                  ARTICLES
                </Link>
              </li>
              <li>
                <Link
                  href="/production-audiovisuelle"
                  onClick={toggleMenuIsOpen}
                >
                  PRODUCTION AUDIOVISUELLE
                </Link>
              </li>
              <li>
                <Link href="/contributeurs" onClick={toggleMenuIsOpen}>
                  CONTRIBUTEURS
                </Link>
              </li>
              <li>
                <Link
                  href="/observatoire-des-perceptions"
                  onClick={toggleMenuIsOpen}
                >
                  OBSERVATOIRE DES PERCEPTIONS
                </Link>
              </li>
              <li>
                <Link href="/apropos" onClick={toggleMenuIsOpen}>
                  À PROPOS
                </Link>
              </li>
            </ul>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MobileMenuBar;
