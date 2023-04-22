import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';

import styles from './MobileMenu.module.scss';

import closeIcon from '../../assets/img/close.png';

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

            <ul id="mobile-menu" className={styles.mobileMenu}>
              <li>
                <Link href="/evenements" onClick={toggleMenuIsOpen}>
                  ÉVÈNEMENTS
                </Link>
              </li>
              <li>
                <Link href="/audiovisuel" onClick={toggleMenuIsOpen}>
                  PRODUCTION AUDIOVISUELLE
                </Link>
              </li>
              <li>
                <Link href="/idees" onClick={toggleMenuIsOpen}>
                  IDÉES
                </Link>
              </li>
              <li>
                <Link href="/idees" onClick={toggleMenuIsOpen}>
                  CONTRIBUTEURS
                </Link>
              </li>
              <li>
                <Link href="/idees" onClick={toggleMenuIsOpen}>
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
