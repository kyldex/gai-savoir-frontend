import { FC } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';

import styles from './DesktopMenu.module.scss';

import MenuLink from './common/MenuLink';

import { CATEGORIES, SUBCATEGORIES } from '../../utils/constants';

const DesktopMenu: FC = () => {
  return (
    <NavigationMenu.Root className={styles.navigationMenuRoot}>
      <NavigationMenu.List className={styles.navigationMenuList}>
        <NavigationMenu.Item className={styles.navigationMenuItem}>
          <MenuLink href="/evenements" className={styles.mainMenuLink}>
            {CATEGORIES.EVENTS.toUpperCase()}
          </MenuLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item className={styles.navigationMenuItem}>
          <NavigationMenu.Trigger className={styles.navigationMenuTrigger}>
            {CATEGORIES.ARTICLES.toUpperCase()}
            <CaretDownIcon className={styles.caretDown} aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={styles.navigationMenuContent}>
            <ul className={`${styles.contentList} ${styles.articles}`}>
              <li>
                <MenuLink href="/articles/actualites">
                  {SUBCATEGORIES.NEWS}
                </MenuLink>
              </li>
              <li>
                <MenuLink href="/articles/idees">
                  {SUBCATEGORIES.IDEAS}
                </MenuLink>
              </li>
              <li>
                <MenuLink href="/articles/sommes-nous-tous-fous">
                  {SUBCATEGORIES.CRAZY}
                </MenuLink>
              </li>
              <li>
                <MenuLink href="/articles/numerique">
                  {SUBCATEGORIES.DIGITAL}
                </MenuLink>
              </li>
              <li>
                <MenuLink href="/articles/culture">
                  {SUBCATEGORIES.CULTURE}
                </MenuLink>
              </li>
              <li>
                <MenuLink href="/articles/societe">
                  {SUBCATEGORIES.SOCIETY}
                </MenuLink>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item className={styles.navigationMenuItem}>
          <NavigationMenu.Trigger className={styles.navigationMenuTrigger}>
            {CATEGORIES.AUDIOVISUAL_PRODUCTION.toUpperCase()}
            <CaretDownIcon className={styles.caretDown} aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={styles.navigationMenuContent}>
            <ul className={`${styles.contentList} ${styles.audiovisual}`}>
              <li>
                <MenuLink href="/production-audiovisuelle/portraits-de-francais">
                  {SUBCATEGORIES.FRENCH_PORTRAITS}
                </MenuLink>
              </li>
              <li>
                <MenuLink href="/production-audiovisuelle/interviews">
                  {SUBCATEGORIES.INTERVIEWS}
                </MenuLink>
              </li>
              <li>
                <MenuLink href="/production-audiovisuelle/contributions-externes">
                  {SUBCATEGORIES.EXTERNAL_CONTRIBUTIONS}
                </MenuLink>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item className={styles.navigationMenuItem}>
          <MenuLink href="/contributeurs" className={styles.mainMenuLink}>
            CONTRIBUTEURS
          </MenuLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item className={styles.navigationMenuItem}>
          <MenuLink
            href="/observatoire-des-perceptions"
            className={styles.mainMenuLink}
          >
            OBSERVATOIRE DES PERCEPTIONS
          </MenuLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item className={styles.navigationMenuItem}>
          <MenuLink href="/apropos" className={styles.mainMenuLink}>
            À PROPOS
          </MenuLink>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default DesktopMenu;
