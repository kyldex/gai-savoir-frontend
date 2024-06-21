import { FC } from 'react';
import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';

import styles from './MobileMenu.module.scss';

import MenuLink from './common/MenuLink';

import { CATEGORIES, SUBCATEGORIES } from '../../utils/constants';
import closeIcon from '../../assets/img/menu/close.png';
import orangeStar from '../../assets/img/menu/star_orange.svg';

type Props = {
  toggleMenuIsOpen: () => void;
};

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

            <NavigationMenu.Root
              orientation="vertical"
              className={styles.navigationMenuRoot}
            >
              <NavigationMenu.List className={styles.navigationMenuList}>
              <NavigationMenu.Item className={styles.navigationMenuItem}>
                  <MenuLink
                    href="/"
                    className={styles.mainMenuLink}
                    onClick={toggleMenuIsOpen}
                  >
                    ACCUEIL
                  </MenuLink>
                </NavigationMenu.Item>

                <NavigationMenu.Item className={styles.navigationMenuItem}>
                  <MenuLink
                    href="/evenements"
                    className={styles.mainMenuLink}
                    onClick={toggleMenuIsOpen}
                  >
                    {CATEGORIES.EVENTS.toUpperCase()}
                  </MenuLink>
                </NavigationMenu.Item>

                <NavigationMenu.Item className={styles.navigationMenuItem}>
                  <NavigationMenu.Trigger
                    className={styles.navigationMenuTrigger}
                  >
                    {CATEGORIES.ARTICLES.toUpperCase()}
                    <CaretDownIcon className={styles.caretDown} aria-hidden />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content
                    className={styles.navigationMenuContent}
                  >
                    <ul className={`${styles.contentList} ${styles.articles}`}>
                      <li>
                        <MenuLink
                          href="/articles/actualites"
                          onClick={toggleMenuIsOpen}
                        >
                          {SUBCATEGORIES.NEWS}
                        </MenuLink>
                      </li>
                      <li>
                        <MenuLink
                          href="/articles/idees"
                          onClick={toggleMenuIsOpen}
                        >
                          {SUBCATEGORIES.IDEAS}
                        </MenuLink>
                      </li>
                      <li>
                        <MenuLink
                          href="/articles/sommes-nous-tous-fous"
                          onClick={toggleMenuIsOpen}
                        >
                          {SUBCATEGORIES.CRAZY}
                        </MenuLink>
                      </li>
                      <li>
                        <MenuLink
                          href="/articles/numerique"
                          onClick={toggleMenuIsOpen}
                        >
                          {SUBCATEGORIES.DIGITAL}
                        </MenuLink>
                      </li>
                      <li>
                        <MenuLink
                          href="/articles/culture"
                          onClick={toggleMenuIsOpen}
                        >
                          {SUBCATEGORIES.CULTURE}
                        </MenuLink>
                      </li>
                      <li>
                        <MenuLink
                          href="/articles/societe"
                          onClick={toggleMenuIsOpen}
                        >
                          {SUBCATEGORIES.SOCIETY}
                        </MenuLink>
                      </li>
                    </ul>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item className={styles.navigationMenuItem}>
                  <NavigationMenu.Trigger
                    className={styles.navigationMenuTrigger}
                  >
                    {CATEGORIES.AUDIOVISUAL_PRODUCTION.toUpperCase()}
                    <CaretDownIcon className={styles.caretDown} aria-hidden />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content
                    className={styles.navigationMenuContent}
                  >
                    <ul
                      className={`${styles.contentList} ${styles.audiovisual}`}
                    >
                      <li>
                        <MenuLink
                          href="/production-audiovisuelle/portraits-de-francais"
                          onClick={toggleMenuIsOpen}
                        >
                          {SUBCATEGORIES.FRENCH_PORTRAITS}
                        </MenuLink>
                      </li>
                      <li>
                        <MenuLink
                          href="/production-audiovisuelle/interviews"
                          onClick={toggleMenuIsOpen}
                        >
                          {SUBCATEGORIES.INTERVIEWS}
                        </MenuLink>
                      </li>
                      <li>
                        <MenuLink
                          href="/production-audiovisuelle/contributions-externes"
                          onClick={toggleMenuIsOpen}
                        >
                          {SUBCATEGORIES.EXTERNAL_CONTRIBUTIONS}
                        </MenuLink>
                      </li>
                    </ul>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item className={styles.navigationMenuItem}>
                  <MenuLink
                    href="/contributeurs"
                    className={styles.mainMenuLink}
                    onClick={toggleMenuIsOpen}
                  >
                    CONTRIBUTEURS
                  </MenuLink>
                </NavigationMenu.Item>

                <NavigationMenu.Item className={styles.navigationMenuItem}>
                  <MenuLink
                    href="/observatoire-des-perceptions"
                    className={styles.mainMenuLink}
                    onClick={toggleMenuIsOpen}
                  >
                    OBSERVATOIRE DES PERCEPTIONS
                  </MenuLink>
                </NavigationMenu.Item>

                <NavigationMenu.Item className={styles.navigationMenuItem}>
                  <MenuLink
                    href="/apropos"
                    className={styles.mainMenuLink}
                    onClick={toggleMenuIsOpen}
                  >
                    À PROPOS
                  </MenuLink>
                </NavigationMenu.Item>
              </NavigationMenu.List>
            </NavigationMenu.Root>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MobileMenuBar;
